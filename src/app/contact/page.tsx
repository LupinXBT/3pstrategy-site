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

const whyWork = [
  {
    num: "01",
    title: "Investment-Side Experience",
    desc: "Background preparing large-scale strategic investment proposals and evaluating dozens of early-stage businesses every month — so findings are framed the way an investment committee reads them.",
    accent: "#C0C0C0",
  },
  {
    num: "02",
    title: "Engineering Foundation",
    desc: "Electronics and environmental engineering, paired with emerging-tech ecosystem and community-scaling experience. Technical claims get tested, not taken on trust.",
    accent: "#708090",
  },
  {
    num: "03",
    title: "Grant & Public Funding",
    desc: "Hands-on management of government and tech grant funding — which is where execution bottlenecks and high-level risk actually hide.",
    accent: "#C0C0C0",
  },
  {
    num: "04",
    title: "The Full 3Ps",
    desc: "A holistic review across product, process and people — not just code, not just spreadsheets. Most real risk sits in the seams between the three.",
    accent: "#F8F9FA",
  },
];

const roles = [
  "Co-founder — Web3 Bacolod",
  "Senior investment analyst — digital asset research",
  "Business development manager and executive roles",
  "Core member, contributor and moderator across protocols",
  "Project technical assistant — DOST Region VI",
  "Instrumentation technician — large-scale manufacturing",
];

export default function Contact() {
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
            04
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
              <MonoLabel>Contact / 04</MonoLabel>
            </div>
            <h1
              className="font-extralight text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-[#F8F9FA] mb-6 max-w-[18ch]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <TextReveal text="Why Work With Me —" />
              <br />
              <TextReveal text="and How to Start." delay={0.3} />
            </h1>
            <p className="font-mono text-[#C0C0C0] text-[1rem] max-w-[60ch] leading-relaxed mb-8">
              Book a 30-minute discovery call, or send the brief first. If an audit is not the right instrument, I'll say so on the call.
            </p>
            <motion.div
              className="flex flex-wrap gap-0"
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
                Book a 30-min Call <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ──────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Why Work With Me</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Diligence From Someone<br />Who's Sat Both Sides.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-0" stagger={0.1}>
            {whyWork.map(({ num, title, desc, accent }) => (
              <StaggerItem key={num}>
                <div
                  className="p-6 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card"
                  style={{ boxShadow: `6px 6px 0 0 ${accent}`, marginRight: "-3px" }}
                >
                  <span
                    className="font-bold text-[3rem] leading-none block mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
                  >
                    {num}
                  </span>
                  <h3
                    className="font-bold text-[1rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="font-mono text-[12px] text-[#C0C0C0] leading-relaxed m-0">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-0 items-start">
              <div className="p-8 border-[3px] border-[#0A192F] bg-[#0A192F] h-full">
                <MonoLabel color="#C0C0C0">About</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.75rem,3vw,2.5rem)] uppercase leading-tight tracking-tight mt-3 mb-4 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Lester "Lupin" Magboo
                </h2>
                <p className="font-mono text-[13px] text-[#C0C0C0] mb-4 uppercase tracking-wider">
                  3P Strategist · Engineering-Based Problem Solving
                </p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4">
                  I work at the intersection of blockchain, AI and fintech, turning complex data and market trends into scalable systems and defensible investment theses.
                </p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4">
                  The background is unusual on purpose: electronics and environmental engineering, then plant-floor instrumentation, then government-funded technology programmes, then Web3 operations, community scaling and investment analysis.
                </p>
                <p className="font-mono text-[12px] text-[#708090] m-0 mt-8">
                  Based in Bacolod, Philippines · Working across APAC and EMEA hours.
                </p>
              </div>

              <div className="border-[3px] border-[#0A192F] bg-[#112240] h-full" style={{ marginLeft: "-3px" }}>
                <div className="p-8 border-b-[3px] border-[#0A192F]">
                  <MonoLabel color="#708090">Selected Roles</MonoLabel>
                  <ul className="mt-4 space-y-3 list-none p-0 m-0">
                    {roles.map((r) => (
                      <li key={r} className="flex gap-3 font-mono text-[12px] text-[#C0C0C0] leading-relaxed">
                        <span className="text-[#C0C0C0] shrink-0">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <MonoLabel color="#708090">Credentials</MonoLabel>
                  <ul className="mt-4 space-y-3 list-none p-0 mb-6">
                    {[
                      "Engineering background — Electronics & Environmental",
                      "Project management and business strategy certifications",
                      "Blockchain, AI and fintech specialisations",
                    ].map((c) => (
                      <li key={c} className="flex gap-3 font-mono text-[12px] text-[#C0C0C0] leading-relaxed">
                        <span className="text-[#C0C0C0] shrink-0">▸</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://www.linkedin.com/in/ljmagboo/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-[#F8F9FA] uppercase tracking-wider hover:text-[#C0C0C0] transition-colors"
                  >
                    Full certification list on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOOK INFO ─────────────────────────────────── */}
      <section className="py-24" id="book">
        <div className="w-full max-w-[800px] mx-auto px-5">
          <ScrollReveal>
            <div className="p-10 border-[3px] border-[#0A192F] bg-[#112240] brut-card" style={{ boxShadow: "10px 10px 0 0 #0A192F" }}>
              <MonoLabel color="#C0C0C0">Book a Call</MonoLabel>
              <h2
                className="font-bold text-[clamp(1.75rem,3vw,2.5rem)] uppercase leading-tight tracking-tight mt-3 mb-4 text-[#F8F9FA]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Tell Me What's<br />Keeping You Up.
              </h2>
              <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-10 max-w-[50ch]">
                Thirty minutes, no deck. We work out whether the problem you have is the one an audit solves.
              </p>
              
              <div className="flex flex-wrap gap-0 mb-12">
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min?month"
                  className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                  style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book a 30-min Call <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@3pstrategy.io"
                  className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                    bg-transparent text-[#F8F9FA] border-[3px] border-[#708090] hover:border-[#F8F9FA] transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Email Directly
                </a>
              </div>
              
              <dl className="border-t-[3px] border-[#1a3158] pt-4">
                {[
                  { dt: "Email", dd: <a href="mailto:hello@3pstrategy.io" className="text-[#C0C0C0] hover:underline">hello@3pstrategy.io</a> },
                  { dt: "Based In", dd: "Bacolod, Philippines · APAC & EMEA hours" },
                  { dt: "Turnaround", dd: "1–2 weeks from kickoff" },
                  { dt: "Confidentiality", dd: "NDA on request before substantive exchange" },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="grid grid-cols-[8rem_1fr] gap-4 py-3 border-b-[3px] border-[#1a3158] last:border-b-0">
                    <dt className="font-bold text-[11px] uppercase tracking-widest text-[#708090] self-center"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                      {dt}
                    </dt>
                    <dd className="m-0 font-mono text-[13px] text-[#C0C0C0]">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
