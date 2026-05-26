"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_DURATION_SECONDS = 10;
const FALLBACK_AFTER_PLAY_MS = INTRO_DURATION_SECONDS * 1000 + 1200;
const VIDEO_SRC = "/images/video-banner/7866909641592.mp4";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [needsTapToPlay, setNeedsTapToPlay] = useState(false);
  const [progress, setProgress] = useState(0);

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
    closeTimerRef.current = window.setTimeout(() => setIsVisible(false), 300);
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

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", finishIntro);
    video.addEventListener("error", finishIntro);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", finishIntro);
      video.removeEventListener("error", finishIntro);
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
        "fixed inset-0 z-[9999] bg-black text-white transition-opacity duration-300",
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-white/10">
        <div
          className="h-full bg-cyan-300 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {needsTapToPlay ? (
        <button
          type="button"
          onClick={playIntro}
          className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 shadow-2xl shadow-black/40 transition hover:bg-cyan-100"
        >
          Phát video
        </button>
      ) : null}
    </div>
  );
}
