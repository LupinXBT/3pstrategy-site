"use client";

import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations/ScrollReveal";
import { ParallaxText } from "@/components/animations/ParallaxText";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function MonoLabel({ children, color = "#C0C0C0" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </span>
  );
}

const faqs = [
  {
    q: "Is this confidential?",
    a: "Yes. All findings, documents and communications stay strictly between you and me unless you choose to share the report with investors or a committee yourself. NDA on request before anything substantive is exchanged.",
    accent: "#C0C0C0",
  },
  {
    q: "Do you need admin access to our systems?",
    a: "Only what the agreed scope requires. Most audits run from documentation, repositories and interviews rather than production access.",
    accent: "#708090",
  },
  {
    q: "Can this be used for a live raise or grant application?",
    a: "Yes. Many clients commission the audit specifically to get ahead of investor or committee diligence, and use the report as a supporting document.",
    accent: "#C0C0C0",
  },
  {
    q: "What if the audit finds serious problems?",
    a: "That is the point of doing it before capital moves. Every finding comes with a specific, prioritized fix and actionable recommendations — the report is a work plan, not a verdict.",
    accent: "#F8F9FA",
  },
  {
    q: "How long does it take, and what do you need from us?",
    a: "One to two weeks from kickoff for a full audit. From your side: access to existing documentation, a repository walkthrough where relevant, and 30–60 minutes each with two or three key people.",
    accent: "#C0C0C0",
  },
  {
    q: "Can you run the audit while we are mid-raise?",
    a: "Yes, and it is a common reason to commission one. The scope can be narrowed to the areas a specific investor or committee is most likely to probe, so the timeline fits inside your process.",
    accent: "#708090",
  },
];

function FAQItem({ q, a, accent, index }: { q: string; a: string; accent: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        className="border-[3px] border-[#0A192F] bg-[#112240] mb-[-3px] overflow-hidden"
        style={{ boxShadow: open ? `6px 6px 0 0 ${accent}` : "none", transition: "box-shadow 0.3s ease" }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-6 p-8 text-left group"
          aria-expanded={open}
        >
          <div className="flex items-start gap-5">
            <span
              className="font-bold text-[1.25rem] leading-none shrink-0 mt-1 tabular-nums"
              style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="font-bold text-[1.1rem] uppercase tracking-tight text-[#F8F9FA] leading-snug group-hover:text-[#C0C0C0] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {q}
            </span>
          </div>
          <span
            className="shrink-0 mt-1 w-7 h-7 border-[2px] flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: accent,
              color: accent,
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <Plus className="w-4 h-4" />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-8 pl-[4.75rem]">
                <div className="w-12 h-[3px] mb-5" style={{ backgroundColor: accent }} />
                <p className="font-mono text-[14px] text-[#C0C0C0] leading-relaxed m-0 max-w-[70ch]">
                  {a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative border-b-[3px] border-[#0A192F] min-h-[70vh] flex items-center overflow-hidden">
        <ParallaxText speed={0.4} className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span
            className="font-bold text-[35vw] leading-none text-[#112240]"
            aria-hidden="true"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            ?
          </span>
        </ParallaxText>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 py-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6 border-[3px] border-[#C0C0C0] px-3 py-1.5"
                 style={{ boxShadow: "4px 4px 0 0 #C0C0C0" }}>
              <MonoLabel>FAQ</MonoLabel>
            </div>
            <h1
              className="font-extralight text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-[#F8F9FA] mb-6 max-w-[18ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="Before" />
              <br />
              <TextReveal text="You Book." delay={0.3} />
            </h1>
            <p className="font-mono text-[#C0C0C0] text-[1rem] max-w-[60ch] leading-relaxed">
              Common questions answered plainly. If yours isn't here, the 30-minute call is the right place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ITEMS ─────────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">

            {/* Left sticky label */}
            <div className="md:sticky md:top-32">
              <ScrollReveal>
                <MonoLabel color="#C0C0C0">Before You Book</MonoLabel>
                <h2
                  className="font-bold text-[clamp(2rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-6 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Six<br />Questions.
                </h2>
                <p className="font-mono text-[13px] text-[#708090] leading-relaxed max-w-[32ch]">
                  Click any question to expand the answer.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  {[
                    { label: "Confidential" },
                    { label: "NDA on request" },
                    { label: "1–2 weeks turnaround" },
                  ].map(({ label }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 border-[2px] border-[#C0C0C0] px-3 py-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C0C0C0] shrink-0" />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#F8F9FA]">{label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: FAQ accordion */}
            <div>
              {faqs.map((item, i) => (
                <FAQItem key={i} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT STEP CTA ─────────────────────────────── */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div
              className="border-[3px] border-[#0A192F] bg-[#112240] p-12 brut-card"
              style={{ boxShadow: "10px 10px 0 0 #0A192F" }}
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
                <div>
                  <MonoLabel color="#C0C0C0">Next Step</MonoLabel>
                  <h2
                    className="font-bold text-[clamp(1.75rem,3vw,2.75rem)] uppercase leading-tight tracking-tight mt-3 mb-4 text-[#F8F9FA]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Start with the intro call.
                  </h2>
                  <p className="font-mono text-[14px] text-[#C0C0C0] leading-relaxed max-w-[60ch]">
                    Thirty minutes to confirm scope and access. No preparation needed — the current state of your documentation is the useful input.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t-[3px] border-[#1a3158]">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#708090]">Confidential</span>
                    <span className="text-[#1a3158] font-mono">·</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#708090]">NDA on request</span>
                    <span className="text-[#1a3158] font-mono">·</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#708090]">Typical turnaround 1–2 weeks</span>
                  </div>
                </div>
                <div className="flex flex-col gap-0 shrink-0">
                  <a
                    href="https://calendly.com/lupinxbt-fw3/30min"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                      bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                    style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Book a 30-min call <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/contact#message"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                      bg-transparent text-[#F8F9FA] border-[3px] border-[#708090] hover:border-[#F8F9FA] transition-colors"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Send us a message
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
