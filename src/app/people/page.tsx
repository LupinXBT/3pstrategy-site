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

const audiences = [
  {
    num: "01",
    title: "Investors & VCs",
    tag: "Pre-Investment",
    accent: "#C0C0C0",
    problems: [
      "Technical claims in the pitch deck are unverified",
      "Smart-contract risk is opaque without an internal engineering team",
      "Team backgrounds rely on self-reported information",
      "Governance and token vesting terms are complex to parse",
    ],
    outcome: "A structured report with severity-graded findings that lets the investment committee make a more informed decision — or price risk correctly if they proceed.",
  },
  {
    num: "02",
    title: "Founders & Operators",
    tag: "Investment Ready",
    accent: "#708090",
    problems: [
      "Investor due diligence is exposing weaknesses that slow the process",
      "The team knows there are technical issues but hasn't prioritised them",
      "Grant applications require evidence of operational maturity",
      "A recent incident has raised questions from existing stakeholders",
    ],
    outcome: "A clear view of where your project actually stands, and a remediation roadmap that lets you fix issues before they surface in someone else's report.",
  },
  {
    num: "03",
    title: "Grant & Incubator Programs",
    tag: "Milestone Compliance",
    accent: "#C0C0C0",
    problems: [
      "Funded projects need structured progress assessment against milestones",
      "Program managers lack the technical depth to evaluate deliverables",
      "Risk exposure from underperforming or misaligned projects is unclear",
    ],
    outcome: "A consistent, evidence-based assessment framework applied across portfolio projects — with findings calibrated to program milestones and reporting requirements.",
  },
];

const notForYou = [
  "You want legal or financial advice, not an operational assessment",
  "You need a formal security certification or compliance stamp",
  "You want someone to validate a decision that has already been made",
  "The project is pre-idea or has no artefacts to review",
];

export default function People() {
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
            03
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
              <MonoLabel>People / 03</MonoLabel>
            </div>
            <h1
              className="font-extralight text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-[#F8F9FA] mb-6 max-w-[18ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="Who the Audit" />
              <br />
              <TextReveal text="Is Built For." delay={0.3} />
            </h1>
            <p className="font-mono text-[#C0C0C0] text-[1rem] max-w-[60ch] leading-relaxed mb-8">
              Three different clients. The same problem — information asymmetry at the worst possible moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AUDIENCES ─────────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Client Types / 01—03</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Three Clients.<br />One Framework.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="flex flex-col gap-0" stagger={0.15}>
            {audiences.map(({ num, title, tag, accent, problems, outcome }) => (
              <StaggerItem key={num}>
                <div
                  className="grid md:grid-cols-[320px_1fr] border-[3px] border-[#0A192F] bg-[#112240] brut-card"
                  style={{ boxShadow: `8px 8px 0 0 ${accent}`, marginBottom: "-3px" }}
                >
                  {/* Left panel */}
                  <div className="p-8 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0A192F]">
                    <span
                      className="font-bold text-[4rem] leading-none block mb-2"
                      style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
                    >
                      {num}
                    </span>
                    <span
                      className="inline-block font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-1 border-[2px] mb-4"
                      style={{ borderColor: accent, color: accent }}
                    >
                      {tag}
                    </span>
                    <h3
                      className="font-bold text-[1.5rem] uppercase tracking-tight text-[#F8F9FA]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {title}
                    </h3>
                  </div>

                  {/* Right panel */}
                  <div className="p-8 flex flex-col justify-center">
                    <MonoLabel color="#708090">Common Problems</MonoLabel>
                    <ul className="space-y-3 list-none p-0 mt-4 mb-8">
                      {problems.map((p) => (
                        <li key={p} className="flex gap-3 font-mono text-[13px] text-[#C0C0C0]">
                          <span style={{ color: accent }} className="shrink-0">▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t-[3px] border-[#1a3158] pt-5">
                      <MonoLabel color="#708090">Outcome</MonoLabel>
                      <p className="font-mono text-[13px] text-[#F8F9FA] leading-relaxed mt-2 m-0 max-w-[65ch]">{outcome}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── NOT FOR YOU ───────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="p-10 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card hover:bg-[#1a3158]"
                   style={{ boxShadow: "8px 8px 0 0 #708090" }}>
                <MonoLabel color="#708090">Not a fit</MonoLabel>
                <h2
                  className="font-bold text-[1.75rem] uppercase leading-tight tracking-tight mt-3 mb-6 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  When Not to<br />Book This.
                </h2>
                <ul className="space-y-4 list-none p-0 m-0">
                  {notForYou.map((item) => (
                    <li key={item} className="flex gap-4 font-mono text-[13px] text-[#C0C0C0] leading-relaxed">
                      <span className="text-[#708090] shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[12px] text-[#708090] mt-8 m-0 max-w-[40ch]">
                  If it is not the right tool for the situation, I will say so on the discovery call rather than sell you one.
                </p>
              </div>
              
              <div className="border-[3px] border-[#0A192F] bg-[#0A192F] h-full flex flex-col justify-between overflow-hidden" style={{ marginLeft: "-3px" }}>
                <div className="relative w-full h-[220px] border-b-[3px] border-[#0A192F]">
                  <img
                    src="/lupin/lupin_3.jpg"
                    alt="Engr. Lester Jun Magboo (LupinXBT)"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0A192F] to-transparent">
                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C0C0C0] block">3P Strategist · LupinXBT</span>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <MonoLabel color="#C0C0C0">Questions?</MonoLabel>
                    <h2
                      className="font-bold text-[1.75rem] uppercase leading-tight tracking-tight mt-3 mb-6 text-[#F8F9FA]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Still unsure<br />if this is right?
                    </h2>
                    <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-8 max-w-[40ch]">
                      Book a 30-minute discovery call. We'll work out whether your problem is one an audit solves, what scope makes sense, and what it would cost to find out properly.
                    </p>
                  </div>
                  <a
                    href="https://calendly.com/lupinxbt-fw3/30min"
                    className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                      bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                    style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Book a Call <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── NEXT ──────────────────────────────────────── */}
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
                  Seen enough?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-0 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Contact & Start <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-transparent text-[#F8F9FA] border-[3px] border-[#708090] hover:border-[#F8F9FA] transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  ← See the Process
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
