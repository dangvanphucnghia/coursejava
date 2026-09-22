"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const INTRO_DURATION_SECONDS = 10;
const FALLBACK_AFTER_PLAY_MS = INTRO_DURATION_SECONDS * 1000 + 1200;
const VIDEO_SRC = "/images/video-banner/7866909641592.mp4";
const SEEN_KEY = "coursejava:intro-seen";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  // Starts closed so the first paint never traps a returning visitor behind the
  // overlay; the effect below opens it only when this session hasn't seen it.
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [needsTapToPlay, setNeedsTapToPlay] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SEEN_KEY) === "1") {
        return;
      }

      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Private mode or blocked storage: fall through and play once.
    }

    // sessionStorage is unreadable during SSR, so showing the overlay can only
    // be decided after mount. Setting `false` is a no-op, so this cannot cascade.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  const clearTimers = useCallback(() => {
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) {
      return;
    }

    finishedRef.current = true;
    clearTimers();
    videoRef.current?.pause();
    backgroundVideoRef.current?.pause();
    setProgress(100);
    setIsLeaving(true);
    closeTimerRef.current = window.setTimeout(() => setIsVisible(false), 420);
  }, [clearTimers]);

  const startFallbackTimer = useCallback(() => {
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
    }

    fallbackTimerRef.current = window.setTimeout(finishIntro, FALLBACK_AFTER_PLAY_MS);
  }, [finishIntro]);

  const playIntro = useCallback(async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      setNeedsTapToPlay(false);
      video.currentTime = 0;
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.currentTime = 0;
        void backgroundVideoRef.current.play().catch(() => undefined);
      }
      await video.play();
    } catch {
      setNeedsTapToPlay(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.currentTime = 0;
      }
      setProgress(0);
      void playIntro();
    };

    const handlePlaying = () => {
      setNeedsTapToPlay(false);
      startFallbackTimer();
    };

    const handleTimeUpdate = () => {
      const currentTime = Math.min(video.currentTime, INTRO_DURATION_SECONDS);
      setProgress((currentTime / INTRO_DURATION_SECONDS) * 100);

      if (video.currentTime >= INTRO_DURATION_SECONDS) {
        finishIntro();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        finishIntro();
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", finishIntro);
    video.addEventListener("error", finishIntro);
    window.addEventListener("keydown", handleKeyDown);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", finishIntro);
      video.removeEventListener("error", finishIntro);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimers();
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [clearTimers, finishIntro, isVisible, playIntro, startFallbackTimer]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] bg-black text-white transition-opacity duration-500",
        isLeaving ? "opacity-0" : "opacity-100",
      ].join(" ")}
      role="dialog"
      aria-label="Video mở đầu CourseJava"
      aria-modal="true"
    >
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-55 blur-md saturate-125"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="relative z-10 h-[100svh] w-screen bg-black object-cover object-center [@media_(orientation:portrait)]:h-auto [@media_(orientation:portrait)]:max-h-[100svh] [@media_(orientation:portrait)]:w-screen [@media_(orientation:portrait)]:object-contain"
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Brand mark */}
      <div className="pointer-events-none absolute left-1/2 top-8 z-20 flex -translate-x-1/2 items-center gap-3 sm:left-8 sm:translate-x-0">
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white/10 font-mono text-sm font-bold backdrop-blur">
          CJ
        </span>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
          CourseJava
        </span>
      </div>

      {/* Skip */}
      <button
        type="button"
        onClick={finishIntro}
        className="absolute right-4 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8 sm:top-8"
      >
        Bỏ qua
        <FiChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {needsTapToPlay ? (
        <button
          type="button"
          onClick={playIntro}
          className="absolute left-1/2 top-1/2 z-20 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 shadow-2xl shadow-black/40 transition hover:bg-cyan-100"
        >
          Phát video
        </button>
      ) : null}
    </div>
  );
}
