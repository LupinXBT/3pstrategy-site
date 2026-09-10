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
      <section className="relative min-h-[92vh] flex items-center border-b-[3px] border-[#0A192F] overflow-hidden">
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

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 py-20 grid md:grid-cols-[1fr_480px] gap-16 items-center">
          {/* Left: headline — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6 border-[3px] border-[#C0C0C0] px-3 py-1.5"
                 style={{ boxShadow: "4px 4px 0 0 #0A192F" }}>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C0C0C0]">
                Technical Due Diligence
              </span>
            </div>

            <h1
              className="font-extralight text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-tight text-[#F8F9FA] mb-6 uppercase"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="Every Risk." />
              <br />
              <TextReveal text="Surfaced." delay={0.3} />
              <br />
              <TextReveal text="Before it Costs." delay={0.6} />
            </h1>

            <p className="text-[#C0C0C0] text-[clamp(1rem,1.5vw,1.2rem)] max-w-[52ch] leading-relaxed mb-8 font-mono">
              The 3Ps Audit is operational and technical due diligence for tech projects, funds and grant programmes — built on Product, Process and People.
            </p>

            <motion.div
              className="flex flex-wrap gap-0 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href="https://calendly.com/lupinxbt-fw3/30min?month"
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                  bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
              >
                Book a 30-min Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                  bg-transparent text-[#F8F9FA] border-[3px] border-[#112240] hover:border-[#F8F9FA] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                See the Audit →
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-0 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { num: "3", label: "Core Pillars" },
                { num: "72h", label: "Typical Turnaround" },
                { num: "NDA", label: "On Request" },
              ].map(({ num, label }) => (
                <div key={label} className="border-l-[3px] border-[#C0C0C0] pl-4 pr-8 py-2">
                  <p className="font-bold text-[2rem] leading-none text-[#F8F9FA] m-0"
                     style={{ fontFamily: "var(--font-sora), sans-serif" }}>{num}</p>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#708090] mt-1 m-0">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: audit cards — slide in from right */}
          <motion.div
            className="hidden md:flex flex-col gap-0 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AuditScoreCard index="01" title="Technical Due Diligence" score={87} label="High Risk" />
            <div className="ml-8 mt-[-8px]">
              <AuditScoreCard index="02" title="Architecture Review" score={92} label="Verified" />
            </div>
            <div className="ml-4 mt-[-8px]">
              <AuditScoreCard index="03" title="Operational Readiness" score={61} label="3 Findings" />
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
            <div className="flex items-end justify-between mb-12 border-b-[3px] border-[#112240] pb-6">
              <div>
                <MonoLabel color="#C0C0C0">The Framework</MonoLabel>
                <h2
                  className="font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[1] tracking-tight mt-2 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Three Pillars.<br />One Verdict.
                </h2>
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
                <h3 className="font-bold text-[1.75rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>Product</h3>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6 max-w-[45ch]">
                  Does the technology do what it claims? Smart-contract logic, architecture integrity and security surface evaluated against real attack vectors.
                </p>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                  Explore →
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
                <h3 className="font-bold text-[1.75rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>Process</h3>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6">
                  Are the delivery mechanics sound? Roadmap credibility, treasury controls, incident response and regulatory exposure examined step by step.
                </p>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                  Explore →
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
                    <h3 className="font-bold text-[1.75rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}>People</h3>
                    <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4 max-w-[72ch]">
                      Can the team execute? Founder track records, incentive alignment, key-person concentration and governance structure stress-tested.
                    </p>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── WHO IT'S FOR ───────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F] bg-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Clients / 04</MonoLabel>
            <h2
              className="font-bold text-[clamp(2rem,4vw,3.5rem)] uppercase leading-[1] tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Who Needs<br />An Audit?
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-0" stagger={0.1}>
            {[
              { title: "Investors & VCs", desc: "Validate technical claims before committing capital. Know exactly where execution risk sits.", tag: "Pre-Investment" },
              { title: "Founders", desc: "Identify weaknesses before an investor does. Enter due diligence with confidence.", tag: "Investment Ready" },
              { title: "Grant Programmes", desc: "Ensure funded projects deliver. Structured assessment aligned to programme milestones.", tag: "Compliance" },
            ].map(({ title, desc, tag }) => (
              <StaggerItem key={title}>
                <div
                  className="p-8 border-[3px] border-[#0A192F] bg-[#112240] brut-card h-full"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F" }}
                >
                  <span className="inline-block font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-1 border-[2px] border-[#C0C0C0] text-[#C0C0C0] mb-4">
                    {tag}
                  </span>
                  <h3 className="font-bold text-[1.25rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}>{title}</h3>
                  <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed m-0">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                <MonoLabel color="#C0C0C0">Get Started / 05</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.75rem,3vw,3rem)] uppercase leading-tight tracking-tight mt-2 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Ready to Surface<br />Your Risks?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-0 shrink-0">
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min?month"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book 30-min Call →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
