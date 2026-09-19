"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after the animation sequence completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A192F]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Main Logo Container */}
          <div className="relative w-[140px] h-[140px] flex items-center justify-center">
            
            {/* The 3 Combining Circles */}
            <motion.div 
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1.05, duration: 0.15 }}
            >
              {/* Top Circle */}
              <motion.div
                className="absolute w-[72px] h-[72px] border-[6px] border-[#F8F9FA] rounded-full"
                initial={{ top: "-40%", left: "50%", x: "-50%", opacity: 0, scale: 0.8 }}
                animate={{ top: "8%", left: "50%", x: "-50%", opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
              />
              {/* Bottom Left Circle */}
              <motion.div
                className="absolute w-[72px] h-[72px] border-[6px] border-[#F8F9FA] rounded-full"
                initial={{ bottom: "-40%", left: "-20%", opacity: 0, scale: 0.8 }}
                animate={{ bottom: "15%", left: "12%", opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.25 }}
              />
              {/* Bottom Right Circle */}
              <motion.div
                className="absolute w-[72px] h-[72px] border-[6px] border-[#F8F9FA] rounded-full"
                initial={{ bottom: "-40%", right: "-20%", opacity: 0, scale: 0.8 }}
                animate={{ bottom: "15%", right: "12%", opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.4 }}
              />
            </motion.div>

            {/* The Actual SVG Logo (Pops in after combining) */}
            <motion.div
              className="absolute w-[115px] h-[115px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [0.8, 1.15, 1] }}
              transition={{ delay: 1.05, duration: 0.5, ease: "backOut" }}
            >
              <img 
                src="/3P-Strategy-Brand/svg/3p-mark-white.svg" 
                alt="3P Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(248,249,250,0.5)]" 
              />
            </motion.div>

            {/* Shockwave / Flash Effect when they lock together */}
            <motion.div
              className="absolute inset-0 bg-[#F8F9FA] rounded-full mix-blend-overlay blur-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2.2] }}
              transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            />
          </div>

          {/* Text Reveal */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <span className="font-bold text-[18px] uppercase text-[#F8F9FA] tracking-[0.25em]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              3P Strategy
            </span>
            <span className="block font-mono text-[9px] tracking-[0.35em] uppercase text-[#708090] mt-3">
              Product · Process · People
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
