"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Marquee } from "@/components/animations/Marquee";
import { ParallaxText } from "@/components/animations/ParallaxText";
import { motion } from "framer-motion";

// ── Reusable primitive ──────────────────────────
function MonoLabel({ children, color = "#C0C0C0" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </span>
  );
}

// ── Audit card widget ───────────────────────────
function AuditScoreCard({
  index,
  title,
  score,
  total = 100,
  label,
}: {
  index: string;
  title: string;
  score: number;
  total?: number;
  label?: string;
}) {
  const pct = (score / total) * 100;

  return (
    <div
      className="bg-[#112240] border-[3px] border-[#0A192F] p-5 brut-card"
      style={{ boxShadow: "8px 8px 0 0 #0A192F" }}
    >
      <div className="flex items-start justify-between mb-3">
        <MonoLabel color="#708090">3P / Audit {index}</MonoLabel>
        {label && (
          <span className="font-mono text-[9px] px-2 py-0.5 border-[2px] border-[#708090] text-[#708090] tracking-widest uppercase">
            {label}
          </span>
        )}
      </div>
      <p className="font-bold text-[13px] tracking-widest uppercase text-[#F8F9FA] mb-4" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
        {title}
      </p>
      <div className="flex items-end gap-1 mb-3">
        <span className="font-bold text-[3.5rem] leading-none text-[#F8F9FA]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          <AnimatedCounter target={score} duration={2} />
        </span>
        <span className="font-mono text-[#708090] text-[1.1rem] mb-2">/{total}</span>
      </div>
      <div className="h-[3px] bg-[#1a3158]">
        <motion.div
          className="h-full bg-[#C0C0C0]"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-[92vh] pt-32 pb-20 border-b-[3px] border-[#0A192F] overflow-x-hidden">
        {/* Giant parallax bg number */}
        <ParallaxText speed={0.4} className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span
            className="font-bold text-[32vw] leading-none text-[#112240]"
            aria-hidden="true"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            3P
          </span>
        </ParallaxText>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8 border-[3px] border-[#C0C0C0] px-3 py-1.5"
                 style={{ boxShadow: "4px 4px 0 0 #0A192F" }}>
              <span className="w-2 h-2 rounded-full bg-[#C0C0C0] shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C0C0C0]">
                Taking new engagements for Q4 2026
              </span>
            </div>

            <h1
              className="font-extralight text-[clamp(2rem,4vw,4rem)] leading-[1.1] tracking-tight text-[#F8F9FA] mb-6 max-w-[20ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="From pilot launch to an investment-ready system." />
            </h1>

            <p className="text-[#C0C0C0] text-[clamp(0.95rem,1.1vw,1.1rem)] max-w-[55ch] leading-relaxed mb-10 font-extralight" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              Most projects do not fail on the idea. They fail on what sits underneath it — undocumented controls,
              single points of failure, governance that exists on paper, roadmaps that quietly slip.{" "}
              <strong className="text-[#F8F9FA] font-bold">The 3Ps Audit finds it first.</strong>
            </p>

            <motion.div
              className="flex flex-wrap gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                href="/product"
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[12px] tracking-[0.1em] uppercase
                  bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                style={{ boxShadow: "4px 4px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
              >
                See what the audit covers
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/lupinxbt-fw3/30min?month"
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[12px] tracking-[0.1em] uppercase
                  bg-transparent text-[#F8F9FA] border-[3px] border-[#112240] hover:border-[#F8F9FA] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Book a 30-minute call →
              </a>
            </motion.div>

            <p className="font-mono text-[10px] text-[#708090] mt-8 tracking-[0.1em] uppercase">
              Engineering background · 10+ years delivery · VC diligence experience
            </p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-0 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { num: "3", label: "Core Pillars" },
                { num: "1–2w", label: "Typical Turnaround" },
                { num: "NDA", label: "On Request" },
              ].map(({ num, label }) => (
                <div key={label} className="border-l-[3px] border-[#112240] pl-4 pr-8 py-1">
                  <p className="font-bold text-[1.75rem] leading-none text-[#F8F9FA] m-0"
                     style={{ fontFamily: "var(--font-sora), sans-serif" }}>{num}</p>
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#708090] mt-1 m-0">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Clean Logo */}
          <motion.div
            className="hidden lg:flex relative items-center justify-center h-full w-full"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-[340px] h-[340px] xl:w-[420px] xl:h-[420px] opacity-90">
              <img
                src="/3P-Strategy-Brand/svg/3p-mark-white.svg"
                alt="3P Strategy Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP (with counters) ──────────── */}
      <section className="border-b-[3px] border-[#0A192F] bg-[#112240]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4" stagger={0.1}>
            {[
              { num: 10, suffix: "+", unit: "years", label: "Project & Program Management" },
              { num: 6, suffix: "+", unit: "years", label: "Business Strategy & Development" },
              { num: 5, suffix: "+", unit: "years", label: "Ecosystem & Community Building" },
              { num: 20, suffix: "+", unit: "/ month", label: "Early-stage Projects Evaluated" },
            ].map(({ num, suffix, unit, label }, i) => (
              <StaggerItem
                key={label}
                className={`py-8 px-6 flex flex-col gap-1 ${i < 3 ? "border-r-[3px] border-[#0A192F]" : ""} ${i < 2 ? "border-b-[3px] md:border-b-0 border-[#0A192F]" : ""}`}
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-[2.5rem] leading-none text-[#F8F9FA]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    <AnimatedCounter target={num} suffix={suffix} duration={1.8} />
                  </span>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-[#C0C0C0]">
                    {unit}
                  </span>
                </div>
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#708090] m-0 leading-snug">
                  {label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────── */}
      <div className="border-b-[3px] border-[#0A192F] bg-[#0A192F] py-4 overflow-hidden">
        <Marquee
          text="PRODUCT · PROCESS · PEOPLE"
          speed={25}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#708090]"
        />
      </div>

      {/* ── 3Ps FRAMEWORK — BENTO GRID ─────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8 border-b-[3px] border-[#112240] pb-6">
              <div>
                <MonoLabel color="#C0C0C0">The 3Ps Framework</MonoLabel>
                <h2
                  className="font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight mt-2 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Three things decide whether<br />a project can hold capital.
                </h2>
                <p className="font-mono text-[13px] text-[#708090] leading-relaxed mt-4 max-w-[60ch]">
                  A good idea becomes a durable business only when the value you create, the system that delivers it,
                  and the people who carry it are aligned. Weakness in any one of the three shows up in diligence —
                  usually at the worst possible moment.
                </p>
              </div>
              <ParallaxText speed={0.2}>
                <span className="font-bold text-[6rem] leading-none text-[#112240] select-none hidden lg:block"
                      aria-hidden="true"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  3P
                </span>
              </ParallaxText>
            </div>
          </ScrollReveal>

          {/* Bento grid: Product large, Process medium, People full-width */}
          <StaggerContainer className="grid md:grid-cols-[1.4fr_1fr] gap-0" stagger={0.12}>
            {/* Product — large card */}
            <StaggerItem>
              <Link
                href="/product"
                className="block p-10 border-[3px] border-[#0A192F] bg-[#0A192F] hover:bg-[#112240] transition-colors group h-full brut-card"
                style={{ boxShadow: "8px 8px 0 0 #0A192F" }}
              >
                <span className="font-bold text-[5rem] leading-none block mb-4 text-[#C0C0C0]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}>01</span>
                <h3 className="font-bold text-[1.75rem] uppercase tracking-tight text-[#F8F9FA] mb-1"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>Product</h3>
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#708090] mb-4">Value that survives the market</p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6 max-w-[45ch]">
                  Is the value proposition, the technology behind it, product–market fit and the user feedback loop
                  actually sound — or does it only look sound in a pitch deck?
                </p>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                  The audit and services →
                </span>
              </Link>
            </StaggerItem>

            {/* Process — medium card */}
            <StaggerItem>
              <Link
                href="/process"
                className="block p-10 border-[3px] border-[#0A192F] bg-[#0A192F] hover:bg-[#112240] transition-colors group h-full brut-card"
                style={{ boxShadow: "8px 8px 0 0 #0A192F", marginLeft: "-3px" }}
              >
                <span className="font-bold text-[5rem] leading-none block mb-4 text-[#708090]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}>02</span>
                <h3 className="font-bold text-[1.75rem] uppercase tracking-tight text-[#F8F9FA] mb-1"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>Process</h3>
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#708090] mb-4">A system that runs without heroics</p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6">
                  Are financial controls, delivery workflow, data handling and security documented and repeatable —
                  or do they live in one person&apos;s head and one shared drive?
                </p>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                  How the audit works →
                </span>
              </Link>
            </StaggerItem>

            {/* People — full-width card */}
            <StaggerItem className="md:col-span-2">
              <Link
                href="/people"
                className="block p-10 border-[3px] border-[#0A192F] bg-[#0A192F] hover:bg-[#112240] transition-colors group brut-card"
                style={{ boxShadow: "8px 8px 0 0 #0A192F", marginTop: "-3px" }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <span className="font-bold text-[5rem] leading-none text-[#708090] shrink-0"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}>03</span>
                  <div>
                    <h3 className="font-bold text-[1.75rem] uppercase tracking-tight text-[#F8F9FA] mb-1"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}>People</h3>
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#708090] mb-4">Governance that is real, not paper</p>
                    <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4 max-w-[72ch]">
                      Does the private roadmap match what investors are told? Who is a single point of failure?
                      What does the community actually think beneath the surface metrics?
                    </p>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                      Who this is for →
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── WHY IT MATTERS ──────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F] bg-[#112240]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <ScrollReveal>
              <MonoLabel color="#C0C0C0">Why it matters</MonoLabel>
              <h2
                className="font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight mt-2 mb-6 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Founders rarely see it until it has cost them a deal.
              </h2>
              <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4">
                Investors and grant committees see the same pattern constantly: strong narrative, weak operating
                system underneath. By the time it surfaces in diligence, the leverage has moved to the other side
                of the table — and the terms move with it.
              </p>
              <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6">
                An audit before the raise costs a fraction of what one repriced round costs, and turns a defensive
                conversation into a prepared one.
              </p>
              <Link href="/process" className="font-mono text-[12px] tracking-widest uppercase text-[#F8F9FA] hover:text-[#C0C0C0] transition-colors">
                See how the audit runs →
              </Link>
            </ScrollReveal>

            {/* Right — deliverables card */}
            <ScrollReveal>
              <div
                className="border-[3px] border-[#0A192F] bg-[#0A192F] p-8 brut-card"
                style={{ boxShadow: "8px 8px 0 0 #0A192F" }}
              >
                <h3 className="font-bold text-[1.1rem] uppercase tracking-tight text-[#F8F9FA] mb-6"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  What you walk away with
                </h3>
                <ul className="space-y-4 m-0 p-0 list-none">
                  {[
                    "A boardroom-ready report with an investment-readiness score",
                    "A full risk register scored by severity",
                    "A 30/60/90-day execution roadmap",
                    "A live walkthrough with your team, investor or committee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#C0C0C0] mt-0.5 shrink-0 font-mono text-[16px] leading-none">✓</span>
                      <span className="font-mono text-[13px] text-[#C0C0C0] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 mt-8 px-5 py-3 font-bold text-[12px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press w-full justify-center"
                  style={{ boxShadow: "4px 4px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  See the full scope →
                </Link>
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
              className="border-[3px] border-[#0A192F] bg-[#112240] p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between brut-card"
              style={{ boxShadow: "10px 10px 0 0 #0A192F" }}
            >
              <div>
                <MonoLabel color="#C0C0C0">Get Started</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.75rem,3vw,3rem)] leading-tight tracking-tight mt-2 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Ready to become<br />investment-ready?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-0 shrink-0">
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min?month"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book a 30-minute call →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
