"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PixelParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [particles, setParticles] = useState<PixelParticle[]>([]);

  const particleIdRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });
      if (!isVisible) setIsVisible(true);

      // Check distance moved to spawn pixel particles
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 18) {
        lastPosRef.current = { x, y };

        const colors = ["#FFFFFF", "#C0C0C0", "#708090", "#38BDF8"];
        const newParticle: PixelParticle = {
          id: ++particleIdRef.current,
          x: x + (Math.random() * 8 - 4),
          y: y + (Math.random() * 8 - 4) + 12,
          size: Math.random() > 0.5 ? 4 : 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setParticles((prev) => [...prev.slice(-6), newParticle]);
      }

      // Check interactive targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], select, .brut-btn-press, [data-cursor="interactive"]'
      );
      const textInput = target.closest(
        'input[type="text"], input[type="email"], textarea, [contenteditable="true"]'
      );

      setIsHovered(!!interactive);
      setIsText(!!textInput);
    };

    const handleMouseDown = () => setIsClicking(true);
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

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 280);
    return () => clearTimeout(timer);
  }, [particles]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* ── Pixel Particle Dust Trail ── */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 0, scale: 0.4, y: p.y + 14 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "linear" }}
            style={{
              position: "fixed",
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: "1px 1px 0px #0A192F",
            }}
          />
        ))}
      </AnimatePresence>

      {/* ── Pixel Cursor Graphic ── */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: `translate(${isText ? "-50%" : "0"}, ${isText ? "-50%" : "0"}) scale(${
            isClicking ? 0.88 : isHovered ? 1.12 : 1
          })`,
          transition: "transform 0.08s ease-out",
          filter: "drop-shadow(2px 3px 0px rgba(10, 25, 47, 0.8))",
        }}
      >
        {isText ? (
          /* ── Pixel Text I-Beam ── */
          <svg
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            style={{ shapeRendering: "crispEdges" }}
          >
            {/* Top bar */}
            <rect x="1" y="0" width="10" height="2" fill="#0A192F" />
            <rect x="2" y="1" width="8" height="2" fill="#FFFFFF" />
            {/* Middle vertical */}
            <rect x="4" y="2" width="4" height="18" fill="#0A192F" />
            <rect x="5" y="2" width="2" height="18" fill="#FFFFFF" />
            {/* Bottom bar */}
            <rect x="1" y="20" width="10" height="2" fill="#0A192F" />
            <rect x="2" y="19" width="8" height="2" fill="#FFFFFF" />
          </svg>
        ) : isHovered ? (
          /* ── Pixel Pointing Hand (Hover / Interactive) ── */
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            style={{ shapeRendering: "crispEdges" }}
          >
            {/* Black Pixel Outline */}
            {/* Index finger */}
            <rect x="8" y="0" width="4" height="16" fill="#0A192F" />
            <rect x="6" y="2" width="2" height="14" fill="#0A192F" />
            <rect x="12" y="2" width="2" height="16" fill="#0A192F" />
            {/* Middle finger */}
            <rect x="14" y="6" width="4" height="12" fill="#0A192F" />
            {/* Ring finger */}
            <rect x="18" y="8" width="4" height="10" fill="#0A192F" />
            {/* Pinky */}
            <rect x="22" y="10" width="4" height="8" fill="#0A192F" />
            {/* Palm & thumb */}
            <rect x="2" y="12" width="6" height="10" fill="#0A192F" />
            <rect x="0" y="14" width="4" height="6" fill="#0A192F" />
            <rect x="4" y="20" width="22" height="8" fill="#0A192F" />

            {/* White Pixel Fill */}
            {/* Index finger fill */}
            <rect x="8" y="2" width="4" height="14" fill="#FFFFFF" />
            {/* Middle finger fill */}
            <rect x="14" y="8" width="2" height="10" fill="#FFFFFF" />
            {/* Ring finger fill */}
            <rect x="18" y="10" width="2" height="8" fill="#FFFFFF" />
            {/* Pinky fill */}
            <rect x="22" y="12" width="2" height="6" fill="#FFFFFF" />
            {/* Palm & thumb fill */}
            <rect x="2" y="14" width="4" height="4" fill="#FFFFFF" />
            <rect x="6" y="14" width="18" height="12" fill="#FFFFFF" />

            {/* Accent Pixel Shade (Silver/Bone detail) */}
            <rect x="10" y="4" width="2" height="10" fill="#F8F9FA" />
            <rect x="18" y="22" width="6" height="4" fill="#C0C0C0" />
            <rect x="6" y="24" width="18" height="2" fill="#708090" />
          </svg>
        ) : (
          /* ── Pixel Arrow Pointer (Default) ── */
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            style={{ shapeRendering: "crispEdges" }}
          >
            {/* Outer Dark Pixel Outline */}
            <rect x="0" y="0" width="2" height="18" fill="#0A192F" />
            <rect x="2" y="0" width="2" height="2" fill="#0A192F" />
            <rect x="2" y="2" width="2" height="2" fill="#0A192F" />
            <rect x="4" y="4" width="2" height="2" fill="#0A192F" />
            <rect x="6" y="6" width="2" height="2" fill="#0A192F" />
            <rect x="8" y="8" width="2" height="2" fill="#0A192F" />
            <rect x="10" y="10" width="2" height="2" fill="#0A192F" />
            <rect x="12" y="12" width="2" height="2" fill="#0A192F" />
            <rect x="14" y="14" width="2" height="2" fill="#0A192F" />
            <rect x="16" y="16" width="2" height="2" fill="#0A192F" />
            {/* Horizontal crossbar */}
            <rect x="2" y="16" width="14" height="2" fill="#0A192F" />
            {/* Diagonal stem outline */}
            <rect x="8" y="16" width="4" height="2" fill="#0A192F" />
            <rect x="10" y="18" width="4" height="2" fill="#0A192F" />
            <rect x="12" y="20" width="4" height="2" fill="#0A192F" />
            <rect x="14" y="22" width="4" height="2" fill="#0A192F" />
            <rect x="14" y="24" width="2" height="2" fill="#0A192F" />
            <rect x="12" y="24" width="2" height="2" fill="#0A192F" />
            <rect x="10" y="22" width="2" height="2" fill="#0A192F" />
            <rect x="8" y="20" width="2" height="2" fill="#0A192F" />
            <rect x="6" y="18" width="2" height="2" fill="#0A192F" />

            {/* Inner White Pixel Fill */}
            <rect x="2" y="2" width="2" height="14" fill="#FFFFFF" />
            <rect x="4" y="6" width="2" height="10" fill="#FFFFFF" />
            <rect x="6" y="8" width="2" height="8" fill="#FFFFFF" />
            <rect x="8" y="10" width="2" height="6" fill="#FFFFFF" />
            <rect x="10" y="12" width="2" height="4" fill="#FFFFFF" />
            <rect x="12" y="14" width="2" height="2" fill="#FFFFFF" />
            {/* Stem Fill */}
            <rect x="8" y="18" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="20" width="2" height="2" fill="#FFFFFF" />
            <rect x="12" y="22" width="2" height="2" fill="#FFFFFF" />

            {/* Subtle silver highlight pixel */}
            <rect x="2" y="4" width="2" height="2" fill="#F8F9FA" />
            <rect x="4" y="8" width="2" height="2" fill="#C0C0C0" />
            <rect x="6" y="12" width="2" height="2" fill="#C0C0C0" />
          </svg>
        )}
      </div>
    </div>
  );
}
