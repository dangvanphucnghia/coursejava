"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function FloatingMascot() {
  const elRef = useRef<HTMLDivElement | null>(null);

  // vị trí hiện tại (smooth)
  const pos = useRef({ x: 40, y: 40 });
  // vị trí mục tiêu (theo chuột)
  const target = useRef({ x: 40, y: 40 });

  const raf = useRef<number | null>(null);
  const [waving, setWaving] = useState(false);
  const waveTimer = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const OFFSET = { x: 28, y: 28 }; // icon chỉ bay "gần" chuột, không dính sát
    const EASE = reduceMotion ? 1 : 0.10; // càng nhỏ càng mượt

    const onMove = (e: PointerEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // kích thước icon để clamp trong màn hình
      const rect = elRef.current?.getBoundingClientRect();
      const w = rect?.width ?? 140;
      const h = rect?.height ?? 140;

      // mục tiêu = vị trí chuột + offset (gần chuột)
      const tx = e.clientX + OFFSET.x;
      const ty = e.clientY + OFFSET.y;

      target.current.x = clamp(tx, 12, vw - w - 12);
      target.current.y = clamp(ty, 12, vh - h - 12);

      // nếu chuột tới gần icon -> vẫy tay + hiện Xin chào
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist < 120) triggerWave();
    };

    const tick = () => {
      const { x, y } = pos.current;
      const tx = target.current.x;
      const ty = target.current.y;

      // lerp (bay mượt)
      pos.current.x = x + (tx - x) * EASE;
      pos.current.y = y + (ty - y) * EASE;

      if (elRef.current) {
        elRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      raf.current = window.requestAnimationFrame(tick);
    };

    const triggerWave = () => {
      setWaving(true);
      if (waveTimer.current) window.clearTimeout(waveTimer.current);
      waveTimer.current = window.setTimeout(() => setWaving(false), 900);
    };

    // expose triggerWave to closure
    (window as any).__triggerWave = triggerWave;

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) window.cancelAnimationFrame(raf.current);
      if (waveTimer.current) window.clearTimeout(waveTimer.current);
      delete (window as any).__triggerWave;
    };
  }, []);

  const onHover = () => {
    // hover vào icon cũng vẫy tay + xin chào
    setWaving(true);
    if (waveTimer.current) window.clearTimeout(waveTimer.current);
    waveTimer.current = window.setTimeout(() => setWaving(false), 900);
  };

  return (
    <div
      ref={elRef}
      onMouseEnter={onHover}
      className="floating-mascot pointer-events-auto"
      aria-label="Mascot"
    >
      {/* bubble */}
      <div className={`mascot-bubble ${waving ? "show" : ""}`}>Xin chào 👋</div>

      {/* icon */}
      <Image
        src="/images/mascot.gif"
        alt="Mascot"
        width={150}
        height={150}
        unoptimized
        priority
        className="select-none"
        draggable={false}
      />
    </div>
  );
}
