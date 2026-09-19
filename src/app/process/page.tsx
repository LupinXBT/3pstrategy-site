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
    title: "Kickoff & Access",
    duration: "Days 1–2",
    desc: "Scope confirmed, NDA signed, and a secure shared folder created for documents. No production access unless required.",
    accent: "#C0C0C0",
  },
  {
    num: "02",
    title: "Technical Deep-Dive",
    duration: "Days 2–5",
    desc: "Business model review, financial or runway assessment, and workflow evaluation. Each finding is assigned a risk and severity level from supporting evidence and context.",
    accent: "#708090",
  },
  {
    num: "03",
    title: "Stakeholder Interviews",
    duration: "Days 4–8",
    desc: "Targeted interviews with key personnel and community stakeholders to separate paper governance from reality.",
    accent: "#C0C0C0",
  },
  {
    num: "04",
    title: "Scoring & Drafting",
    duration: "Days 8–10",
    desc: "Dimensions scored and findings documented by severity and impact. A preliminary draft is shared for factual corrections.",
    accent: "#F8F9FA",
  },
  {
    num: "05",
    title: "Delivery & Walkthrough",
    duration: "Days 10–14",
    desc: "Final report, risk register, and execution roadmap delivered, followed by a live review call with your stakeholders.",
    accent: "#C0C0C0",
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
              Five structured phases. Typically 1–2 weeks. Every step documented, every finding evidenced.
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
                <MonoLabel color="#C0C0C0">Phases / 01—05</MonoLabel>
                <h2
                  className="font-bold text-[clamp(2rem,3.5vw,3.5rem)] uppercase leading-tight tracking-tight mt-2 mb-6 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Five Phases.<br />Zero Shortcuts.
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

      {/* ── TIMELINE SNAPSHOT ─────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Timeline</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Typical Turnaround.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div
              className="border-[3px] border-[#0A192F] bg-[#112240] p-10 brut-card"
              style={{ boxShadow: "10px 10px 0 0 #C0C0C0" }}
            >
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-x-6 gap-y-0">
                {[
                  { day: "Days 1–2", event: "Kickoff, scope confirmed, and access granted" },
                  { day: "Days 2–5", event: "Technical deep-dive (architecture, financial, workflow)" },
                  { day: "Days 4–8", event: "Stakeholder interviews" },
                  { day: "Days 8–10", event: "Scoring and drafting" },
                  { day: "Days 10–14", event: "Delivery and walkthrough" },
                ].map(({ day, event }, i, arr) => (
                  <div key={day} className="contents group">
                    <div className={`py-5 border-r-[3px] border-[#C0C0C0] pr-4 ${i === arr.length - 1 ? "" : "border-b-[3px] border-b-[#112240]"}`}>
                      <MonoLabel color="#C0C0C0">{day}</MonoLabel>
                    </div>
                    <div className={`py-5 pl-4 ${i === arr.length - 1 ? "" : "border-b-[3px] border-[#1a3158]"}`}>
                      <p className="font-mono text-[13px] text-[#C0C0C0] m-0 group-hover:text-[#F8F9FA] transition-colors">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div
              className="border-[3px] border-[#0A192F] bg-[#112240] p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between brut-card"
              style={{ boxShadow: "10px 10px 0 0 #0A192F" }}
            >
              <div>
                <MonoLabel color="#C0C0C0">Next Step</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] uppercase leading-tight tracking-tight mt-2 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Ready to start?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-0 shrink-0">
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min?month"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book 30-min Call <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/people"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-transparent text-[#F8F9FA] border-[3px] border-[#708090] hover:border-[#F8F9FA] transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Who It's For →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
