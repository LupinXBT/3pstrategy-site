"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations/ScrollReveal";
import { ParallaxText } from "@/components/animations/ParallaxText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MonoLabel({ children, color = "#C0C0C0" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </span>
  );
}

/* ── DATA ─────────────────────────────────────────── */

const deliverables = [
  {
    num: "01",
    label: "The 3Ps Audit Report",
    desc: "Boardroom-ready, with an executive summary and an investment-readiness score. Written to be forwarded to an investor or committee without editing.",
  },
  {
    num: "02",
    label: "Full Risk Register",
    desc: "Every finding scored by severity, with the likely impact, an owner and an effort estimate against it — so the list can be worked, not just read.",
  },
  {
    num: "03",
    label: "30/60/90-Day Roadmap",
    desc: "What to fix first and why that order — sequenced by what a diligence process will look at soonest, not by what is easiest.",
  },
  {
    num: "04",
    label: "A Live Walkthrough",
    desc: "One review call to take your team, investor or committee through the findings and answer the questions the document raises.",
  },
];

const scopeDimensions = [
  {
    id: "01",
    title: "Product",
    accent: "#F8F9FA",
    items: [
      "Value proposition vs. evidence of demand",
      "Technical architecture and dependency risk",
      "Product–market fit signals",
      "Roadmap realism and delivery history",
      "Feedback loop and iteration discipline",
      "Scalability and expansion path",
    ],
  },
  {
    id: "02",
    title: "Process",
    accent: "#C0C0C0",
    items: [
      "Financial controls, treasury and spend authority",
      "Delivery workflow, QA and release discipline",
      "Data management, access control, security posture",
      "Automation and operational efficiency",
      "Documentation, standards and continuity",
      "Compliance and reporting readiness",
    ],
  },
  {
    id: "03",
    title: "People",
    accent: "#708090",
    items: [
      "Governance, decision rights and accountability",
      "Key-person risk and team capability",
      "Private roadmap vs. investor communications",
      "Community health beneath vanity metrics",
      "Stakeholder alignment and incentives",
      "Professionalism, ethics and crisis readiness",
    ],
  },
];

const engagements = [
  {
    title: "Focused Audit",
    desc: "One dimension, single product line. For a specific worry you already have.",
    timeline: "~1 week · scoped on the intro call",
  },
  {
    title: "Full 3Ps Audit",
    desc: "All three dimensions, report, risk register, roadmap and review call. The usual entry point.",
    timeline: "1–2 weeks · scoped on the intro call",
  },
  {
    title: "Portfolio Screening",
    desc: "Repeatable scoring across multiple projects, for funds and programs.",
    timeline: "Quoted per portfolio",
  },
  {
    title: "Implementation Sprint",
    desc: "4–8 weeks working alongside your team to close the highest-severity findings, then hand back with the documentation in place.",
    timeline: "Priced after the audit, against the actual roadmap",
  },
  {
    title: "Fractional Support",
    desc: "Ongoing operator support across strategy, delivery and governance on a monthly retainer — for teams that need the capability rather than the report.",
    timeline: "",
  },
];

const beyondAudit = [
  {
    title: "Project & Program Management",
    items: [
      "Lifecycle management",
      "Scope and business case",
      "Risk management",
      "Resource planning and budget",
      "Quality control and monitoring",
      "Completion and turnover",
    ],
  },
  {
    title: "Business & Investment Strategy",
    items: [
      "Product management",
      "Market research and analysis",
      "Go-to-market and partnerships",
      "Fundraising, grants and investment",
      "Business and revenue modeling",
      "Pitch deck and MVP development",
    ],
  },
  {
    title: "Ecosystem & Community Growth",
    items: [
      "Growth, retention and moderation",
      "Discord and Telegram operations",
      "Event and campaign planning",
      "Community security and crisis response",
      "Ambassador and contributor programs",
    ],
  },
  {
    title: "Enablement & AI Workflow Systems",
    items: [
      "Web3 education and capability building",
      "Design thinking and engineering design",
      "Game design and token economy review",
      "AI-assisted operating workflows",
      "Technical assistance and consultancy",
    ],
  },
];

export default function Product() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

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
            01
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
              <MonoLabel>Product / 01</MonoLabel>
            </div>
            <h1
              className="font-extralight text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] tracking-tight text-[#F8F9FA] mb-6 max-w-[22ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="Product —" />
              <br />
              <TextReveal text="the first P." delay={0.3} />
            </h1>
            <p className="font-mono text-[#C0C0C0] text-[1rem] max-w-[60ch] leading-relaxed mb-8">
              A fixed-scope operational and technical due-diligence review for tech projects before the funding.
              Every finding is scored, risk-flagged and translated into a prioritized fix — not a generic checklist.
            </p>
            <motion.div
              className="flex flex-wrap gap-0 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://calendly.com/lupinxbt-fw3/30min?month"
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                  bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
              >
                Book a 30-minute call <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                  bg-transparent text-[#F8F9FA] border-[3px] border-[#112240] hover:border-[#F8F9FA] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                See how it works →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DELIVERABLES — WHAT YOU GET ────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">What you get</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              What You Walk Away With.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-0" stagger={0.1}>
            {deliverables.map(({ num, label, desc }) => (
              <StaggerItem key={num}>
                <div
                  className="p-8 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card hover:bg-[#1a3158] transition-colors"
                  style={{ marginRight: "-3px" }}
                >
                  <span
                    className="font-bold text-[3.5rem] leading-none text-[#C0C0C0] block mb-4"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {num}
                  </span>
                  <h3
                    className="font-bold text-[1.125rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {label}
                  </h3>
                  <p className="font-mono text-[12px] text-[#C0C0C0] leading-relaxed m-0">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="font-mono text-[11px] text-[#708090] mt-6 tracking-wide text-center">
            Typical turnaround: 1–2 weeks from kickoff.
          </p>
        </div>
      </section>

      {/* ── SCOPE — 3 DIMENSIONS HORIZONTAL SCROLL ────── */}
      <section ref={targetRef} className="relative h-[250vh] bg-[#0A192F]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-b-[3px] border-[#0A192F]">
          <div className="w-full max-w-[1280px] mx-auto px-5 mb-12 shrink-0">
            <ScrollReveal>
              <MonoLabel color="#C0C0C0">Scope</MonoLabel>
              <h2
                className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What We Assess.
              </h2>
              <p className="font-mono text-[13px] text-[#708090] leading-relaxed mt-3 max-w-[64ch]">
                Each of the three dimensions is scored independently, then read together — most real risk sits in the seams between them.
              </p>
            </ScrollReveal>
          </div>

          <div className="pl-5 md:pl-[calc(50vw-620px)] pb-10">
            <motion.div style={{ x }} className="flex gap-8 w-max pr-[30vw]">
              {scopeDimensions.map(({ id, title, accent, items }) => (
                <div
                  key={id}
                  className="w-[85vw] max-w-[450px] shrink-0 p-8 border-[3px] border-[#0A192F] bg-[#112240] flex flex-col brut-card"
                  style={{ boxShadow: `8px 8px 0 0 ${accent}` }}
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span
                      className="font-bold text-[3rem] leading-none"
                      style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
                    >
                      {id}
                    </span>
                    <MonoLabel color="#708090">Dimension {id}</MonoLabel>
                  </div>
                  <h3
                    className="font-bold text-[1.5rem] uppercase tracking-tight text-[#F8F9FA] mb-6"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-3 list-none p-0 m-0 flex-1">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 font-mono text-[13px] text-[#C0C0C0] leading-relaxed">
                        <span className="shrink-0" style={{ color: accent }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ISO-ALIGNED NOTE ───────────────────────────── */}
      <section className="py-20 border-b-[3px] border-[#0A192F] bg-[#112240]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
              <div>
                <MonoLabel color="#C0C0C0">ISO-aligned framework</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight mt-2 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Alignment, not certification.
                </h2>
              </div>
              <div>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4">
                  The 3Ps map onto the international management-system standards that diligence teams, grant committees
                  and enterprise partners already use as their reference. Findings arrive in language a committee does
                  not have to translate.
                </p>
                <p className="font-mono text-[13px] text-[#708090] leading-relaxed m-0">
                  This is alignment, not certification. The audit tells you where you would stand against these standards
                  and what it would take to close the gap. It does not confer a certificate — only an accredited
                  certification body can do that — and it is not an audit performed on their behalf.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ─────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Engagement models</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 mb-4 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              How We Work Together.
            </h2>
            <p className="font-mono text-[13px] text-[#708090] leading-relaxed mb-12 max-w-[64ch]">
              Most clients start with an audit. Implementation support is optional and only worth buying where it earns its cost.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-0" stagger={0.08}>
            {engagements.map(({ title, desc, timeline }, i) => (
              <StaggerItem key={title}>
                <div
                  className="p-8 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card hover:bg-[#1a3158] transition-colors flex flex-col"
                  style={{ marginRight: "-3px", marginBottom: "-3px" }}
                >
                  <span
                    className="font-bold text-[2rem] leading-none text-[#C0C0C0] block mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-bold text-[1.1rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed flex-1">{desc}</p>
                  {timeline && (
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#708090] mt-4 pt-4 border-t-[2px] border-[#1a3158] m-0">
                      {timeline}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── BEYOND THE AUDIT ──────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Beyond the audit</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 mb-4 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Additional Services.
            </h2>
            <p className="font-mono text-[13px] text-[#708090] leading-relaxed mb-12 max-w-[64ch]">
              Everything below is scoped against the 3Ps, so findings and fixes stay comparable from audit through implementation.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-0" stagger={0.1}>
            {beyondAudit.map(({ title, items }) => (
              <StaggerItem key={title}>
                <div
                  className="p-8 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card"
                  style={{ marginRight: "-3px", marginBottom: "-3px" }}
                >
                  <h3
                    className="font-bold text-[1.1rem] uppercase tracking-tight text-[#F8F9FA] mb-5"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 font-mono text-[13px] text-[#C0C0C0] leading-relaxed">
                        <span className="text-[#708090] shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
              className="border-[3px] border-[#0A192F] bg-[#112240] p-12 brut-card"
              style={{ boxShadow: "10px 10px 0 0 #0A192F" }}
            >
              <MonoLabel color="#C0C0C0">Next step</MonoLabel>
              <h2
                className="font-bold text-[clamp(1.75rem,3vw,3rem)] leading-tight tracking-tight mt-2 mb-4 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Ready to see the scope against your project?
              </h2>
              <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-8 max-w-[60ch]">
                A 30-minute call is enough to size the audit, confirm what is in scope, and tell you whether it is worth doing at all.
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
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-transparent text-[#F8F9FA] border-[3px] border-[#112240] hover:border-[#F8F9FA] transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Send us a message →
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
