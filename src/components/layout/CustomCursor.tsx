"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  const rippleIdRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], select, .brut-btn-press, [data-cursor="interactive"], summary'
      );
      const textInput = target.closest(
        'input[type="text"], input[type="email"], textarea, [contenteditable="true"]'
      );

      setIsHovered(!!interactive);
      setIsText(!!textInput);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      setRipples((prev) => [
        ...prev.slice(-3),
        { id: ++rippleIdRef.current, x: e.clientX, y: e.clientY },
      ]);
    };
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    if (ripples.length === 0) return;
    const t = setTimeout(() => setRipples((prev) => prev.slice(1)), 450);
    return () => clearTimeout(t);
  }, [ripples]);

  if (!isFinePointer || !isVisible) return null;

  /* Cursor sizing */
  const SIZE = isText ? 20 : isHovered ? 38 : 32;
  const scale = isClicking ? 0.82 : isHovered ? 1.15 : 1;

  /* Hotspot: top-left tip of the arrow */
  const offsetX = isText ? -SIZE / 2 : 0;
  const offsetY = isText ? -SIZE / 2 : 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">

      {/* ── Click Ripples ── */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ scale: 0.2, opacity: 0.7 }}
            animate={{ scale: 2.4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.4, 1] }}
            style={{
              position: "fixed",
              left: r.x - 14,
              top: r.y - 14,
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "2px solid #0EA5E9",
              backgroundColor: "rgba(14, 165, 233, 0.12)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* ── Cursor Element ── */}
      <div
        style={{
          position: "fixed",
          left: pos.x + offsetX,
          top: pos.y + offsetY,
          width: SIZE,
          height: SIZE,
          transformOrigin: isText ? "center center" : "top left",
          transform: `scale(${scale})`,
          transition: "transform 0.1s cubic-bezier(0.2, 0.8, 0.4, 1), width 0.1s, height 0.1s",
          filter: "drop-shadow(0px 2px 6px rgba(14,165,233,0.5))",
        }}
      >
        {isText ? (
          /* I-beam */
          <svg width={SIZE} height={SIZE} viewBox="0 0 20 20" fill="none">
            <path d="M5 2H15M10 2V18M5 18H15" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : isHovered ? (
          /* Flat hand pointer */
          <svg width={SIZE} height={SIZE} viewBox="0 0 28 32" fill="none">
            <path
              d="M8.5 2C7.4 2 6.5 2.9 6.5 4V14.5L5 13.5C4 12.8 2.6 13.1 2 14.1C1.4 15.1 1.7 16.4 2.7 17.1L8.5 24.5C9.8 26.2 11.8 27.2 14 27.2H19.5C22.8 27.2 25.5 24.5 25.5 21.2V15.5C25.5 14.4 24.6 13.5 23.5 13.5C23.2 13.5 22.9 13.6 22.6 13.7C22.2 12.8 21.3 12.2 20.2 12.2C19.8 12.2 19.4 12.3 19.1 12.5C18.6 11.6 17.6 11 16.5 11C16.1 11 15.7 11.1 15.4 11.3V4C15.4 2.9 14.5 2 13.4 2H8.5Z"
              fill="white"
              stroke="#0EA5E9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M15.4 15.5V19.5" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19.1 16V20" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22.6 16.5V20.5" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          /* ── Blue play-button arrow cursor (matches uploaded image) ── */
          <svg width={SIZE} height={SIZE} viewBox="0 0 32 36" fill="none">
            {/* Outer stroke/glow triangle */}
            <path
              d="M4 2L28 16L4 30V2Z"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Inner fill triangle — darker blue */}
            <path
              d="M6 5L25 16L6 27V5Z"
              fill="url(#cursorGrad)"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="cursorGrad" x1="6" y1="5" x2="26" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
}
