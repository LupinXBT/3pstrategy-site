"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations/ScrollReveal";
import { ParallaxText } from "@/components/animations/ParallaxText";
import { motion } from "framer-motion";

function MonoLabel({ children, color = "#C0C0C0" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </span>
  );
}

const phases = [
  {
    num: "01",
    title: "Scoping Call",
    duration: "Before Kick-off",
    desc: "Thirty minutes to understand the business, the decision the report will support, and who will read it. You leave with a fixed scope, timeline and price.",
    accent: "#C0C0C0",
  },
  {
    num: "02",
    title: "Information & Interviews",
    duration: "Week 1",
    desc: "You share the documents listed below. Short interviews with the owner and two or three key people fill in what the documents do not show. Where relevant, a few customers or suppliers are contacted with your permission.",
    accent: "#708090",
  },
  {
    num: "03",
    title: "Analysis & Scoring",
    duration: "Week 1–2",
    desc: "Each of the twelve criteria is scored 1 to 5 against the evidence. Market size, margins and customer concentration are checked against your figures and outside sources.",
    accent: "#C0C0C0",
  },
  {
    num: "04",
    title: "Report & Walkthrough",
    duration: "Week 1–2",
    desc: "You receive the report, then walk through it live with whoever needs to hear it: your team, your investor, your bank or your committee.",
    accent: "#F8F9FA",
  },
];

export default function Process() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative border-b-[3px] border-[#0A192F] min-h-[85vh] flex items-center overflow-hidden">
        <ParallaxText speed={0.4} className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span
            className="font-bold text-[35vw] leading-none text-[#112240]"
            aria-hidden="true"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            02
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
              <MonoLabel>Process / 02</MonoLabel>
            </div>
            <h1
              className="font-extralight text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-[#F8F9FA] mb-6 max-w-[18ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="How the Audit" />
              <br />
              <TextReveal text="Actually Works." delay={0.3} />
            </h1>
            <p className="font-mono text-[#C0C0C0] text-[1rem] max-w-[60ch] leading-relaxed mb-8">
              Four structured phases. Typically 1–2 weeks. Every step documented, every finding evidenced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PHASES STICKY REVEAL ──────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F] bg-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
            
            {/* Left: Sticky Info */}
            <div className="md:sticky md:top-32">
              <ScrollReveal>
                <MonoLabel color="#C0C0C0">Phases / 01—04</MonoLabel>
                <h2
                  className="font-bold text-[clamp(2rem,3.5vw,3.5rem)] uppercase leading-tight tracking-tight mt-2 mb-6 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Four Phases.<br />Zero Shortcuts.
                </h2>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed max-w-[40ch]">
                  The methodology is designed to be systematic and repeatable, ensuring that every claim is verified and every finding is supported by evidence.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: Scrolling Cards */}
            <div className="flex flex-col gap-8">
              {phases.map(({ num, title, duration, desc, accent }, i) => (
                <ScrollReveal key={num} delay={0.1} distance={30}>
                  <div
                    className="p-8 border-[3px] border-[#0A192F] bg-[#112240] brut-card"
                    style={{ boxShadow: `8px 8px 0 0 ${accent}` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                      <span
                        className="font-bold text-[3.5rem] leading-none"
                        style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
                      >
                        {num}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 border-[2px] mt-2 sm:mt-0"
                            style={{ borderColor: accent, color: accent }}>
                        {duration}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-[1.5rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {title}
                    </h3>
                    <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed m-0 max-w-[50ch]">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* ── WHAT YOU NEED TO PREPARE ───────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

            {/* Left — heading + note */}
            <ScrollReveal>
              <MonoLabel color="#C0C0C0">Preparation</MonoLabel>
              <h2
                className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-6 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What you need to prepare.
              </h2>
              <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed max-w-[48ch]">
                If something on this list does not exist yet, that is fine. It tells us something about the business, and it goes into the plan rather than delaying the start.
              </p>
            </ScrollReveal>

            {/* Right — checklist */}
            <ScrollReveal delay={0.15}>
              <div
                className="border-[3px] border-[#0A192F] bg-[#112240] p-8 md:p-10 brut-card"
                style={{ boxShadow: "8px 8px 0 0 #C0C0C0" }}
              >
                <ul className="space-y-0 list-none p-0 m-0">
                  {[
                    "Financial statements or sales and expense records for the last two years",
                    "Your main products or services, with current prices",
                    "A list of your largest customers and suppliers, with their share of sales or spend",
                    "Who does what: a simple team chart",
                    "Any business plan, pitch deck or loan application you have used",
                    "Time with the owner and two or three key people for interviews",
                  ].map((item, i, arr) => (
                    <li
                      key={item}
                      className={`flex items-start gap-4 py-5 ${i < arr.length - 1 ? "border-b-[2px] border-[#1a3158]" : ""}`}
                    >
                      <span
                        className="shrink-0 mt-0.5 font-bold text-[#F8F9FA] font-mono text-[15px] leading-none"
                      >
                        ✓
                      </span>
                      <span className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[11px] text-[#708090] mt-6 pt-6 border-t-[2px] border-[#1a3158] m-0 uppercase tracking-widest">
                  Confidential · NDA on request before anything substantive is exchanged
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div
              className="border-[3px] border-[#0A192F] bg-[#112240] p-12 brut-card"
              style={{ boxShadow: "10px 10px 0 0 #0A192F" }}
            >
              <MonoLabel color="#C0C0C0">Next step</MonoLabel>
              <h2
                className="font-bold text-[clamp(1.75rem,3vw,3rem)] leading-tight tracking-tight mt-2 mb-4 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Ready to see who this is for?
              </h2>
              <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-8 max-w-[60ch]">
                See which type of client gets the most from a 3P audit — founders, investors, or programme managers.
              </p>
              <div className="flex flex-wrap gap-0 items-start">
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min?month"
                  className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book a 30-minute call <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/people"
                  className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-transparent text-[#F8F9FA] border-[3px] border-[#112240] hover:border-[#F8F9FA] transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Who it&apos;s for →
                </Link>
              </div>
              <p className="font-mono text-[10px] text-[#708090] mt-6 tracking-widest uppercase m-0">
                Confidential · NDA on request · Typical turnaround 1–2 weeks
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
