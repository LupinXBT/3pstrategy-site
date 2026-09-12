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

const services = [
  {
    id: "01",
    title: "The 3Ps Audit",
    tagline: "Full-Spectrum Due Diligence",
    desc: "A systematic review across product, process and people. Findings delivered in a structured report with severity ratings, supporting evidence and recommended remediation steps. Typical turnaround 1–2 weeks.",
    tags: ["Product", "Process", "People"],
    accent: "#C0C0C0",
  },
  {
    id: "02",
    title: "Product-Market Fit Audit",
    tagline: "Positioning & Traction Review",
    desc: "An assessment of how well the product addresses a real, sizable market need. Covers user adoption signals, competitive differentiation, go-to-market clarity and evidence of traction — graded with actionable guidance.",
    tags: ["Positioning", "Traction", "GTM"],
    accent: "#708090",
  },
  {
    id: "03",
    title: "Operational Audit",
    tagline: "Process & Governance Review",
    desc: "Roadmap delivery, treasury management, incident response, compliance exposure and governance structures evaluated. High-risk areas flagged with clear mitigation steps.",
    tags: ["Governance", "Compliance", "Risk"],
    accent: "#C0C0C0",
  },
  {
    id: "04",
    title: "People Audit",
    tagline: "Team & Incentive Assessment",
    desc: "Founder backgrounds, advisor credibility, key-person risk, token vesting schedules and incentive alignment tested for execution risk and governance concentration.",
    tags: ["Team", "Incentives", "Governance"],
    accent: "#F8F9FA",
  },
];

const deliverables = [
  { num: "01", label: "Executive Summary", desc: "Plain-English verdict for non-technical stakeholders." },
  { num: "02", label: "Technical Findings", desc: "Severity-graded, annotated findings with evidence." },
  { num: "03", label: "Remediation Steps", desc: "Concrete, prioritised actions for each finding." },
  { num: "04", label: "Risk Register", desc: "Ongoing risk tracker aligned to the audit scope." },
];

export default function Product() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Moves the track to the left as user scrolls down the 300vh section
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

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
              className="font-extralight text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-[#F8F9FA] mb-6 max-w-[18ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="The Audit" />
              <br />
              <TextReveal text="& Services." delay={0.3} />
            </h1>
            <p className="font-mono text-[#C0C0C0] text-[1rem] max-w-[60ch] leading-relaxed mb-8">
              Everything offered by 3P Strategy — from the flagship full-spectrum audit to targeted technical, operational and people reviews.
            </p>
            <motion.div
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
                Book a 30-min Call <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES HORIZONTAL SCROLL ────────────────── */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#0A192F]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-b-[3px] border-[#0A192F]">
          <div className="w-full max-w-[1280px] mx-auto px-5 mb-12 shrink-0">
            <ScrollReveal>
              <MonoLabel color="#C0C0C0">Services / 01—04</MonoLabel>
              <h2
                className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What We Assess.
              </h2>
            </ScrollReveal>
          </div>
          
          <div className="pl-5 md:pl-[calc(50vw-620px)] pb-10">
            <motion.div style={{ x }} className="flex gap-8 w-max pr-[30vw]">
              {services.map(({ id, title, tagline, desc, tags, accent }) => (
                <div
                  key={id}
                  className="w-[85vw] max-w-[450px] shrink-0 p-8 border-[3px] border-[#0A192F] bg-[#112240] h-[480px] flex flex-col brut-card"
                  style={{ boxShadow: `8px 8px 0 0 ${accent}` }}
                >
                  <span
                    className="font-bold text-[3rem] leading-none block mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
                  >
                    {id}
                  </span>
                  <MonoLabel color="#708090">{tagline}</MonoLabel>
                  <h3
                    className="font-bold text-[1.5rem] uppercase tracking-tight text-[#F8F9FA] mt-2 mb-4"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-8 flex-1">{desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t-[3px] border-[#1a3158]">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] tracking-[0.14em] uppercase px-2 py-1 border-[2px]"
                        style={{ borderColor: accent, color: accent }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ──────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Deliverables</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              What You Get.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-0" stagger={0.1}>
            {deliverables.map(({ num, label, desc }) => (
              <StaggerItem key={num}>
                <div
                  className="p-8 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card hover:bg-[#1a3158]"
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
        </div>
      </section>

      {/* ── WHAT'S NOT INCLUDED ───────────────────────── */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="p-10 border-[3px] border-[#0A192F] bg-[#112240] brut-card h-full" style={{ boxShadow: "8px 8px 0 0 #F8F9FA" }}>
                <MonoLabel color="#F8F9FA">Included</MonoLabel>
                <h3 className="font-bold text-[1.5rem] uppercase mt-3 mb-6 text-[#F8F9FA]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  What Is Covered
                </h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {[
                    "Architecture and smart-contract review",
                    "Operational process and governance assessment",
                    "Team background and incentive evaluation",
                    "Severity-graded findings with supporting evidence",
                    "Concrete remediation steps for each finding",
                    "One follow-up call to walk through findings",
                    "NDA on request before anything substantive is shared",
                  ].map((item) => (
                    <li key={item} className="flex gap-4 font-mono text-[13px] text-[#C0C0C0] leading-relaxed">
                      <span className="text-[#F8F9FA] shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 border-[3px] border-[#0A192F] bg-[#112240] brut-card h-full" style={{ boxShadow: "8px 8px 0 0 #708090", marginLeft: "-3px" }}>
                <MonoLabel color="#708090">Not Included</MonoLabel>
                <h3 className="font-bold text-[1.5rem] uppercase mt-3 mb-6 text-[#F8F9FA]"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  What Is Not Covered
                </h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {[
                    "Investment advice or financial recommendations",
                    "Legal or regulatory compliance certification",
                    "Tax guidance of any kind",
                    "Ongoing monitoring or retainer services (by default)",
                    "Guarantees of outcome or future performance",
                  ].map((item) => (
                    <li key={item} className="flex gap-4 font-mono text-[13px] text-[#C0C0C0] leading-relaxed">
                      <span className="text-[#708090] shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
