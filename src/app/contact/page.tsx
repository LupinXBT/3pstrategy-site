"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations/ScrollReveal";
import { ParallaxText } from "@/components/animations/ParallaxText";
import { TiltCard } from "@/components/animations/TiltCard";
import { motion } from "framer-motion";
import { useState } from "react";

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
  "Head of Business Development and Strategic Partnerships",
  "Senior Investment Analyst",
  "Business development manager and executive roles",
  "Core member, contributor and moderator across protocols",
  "Project Technical Assistant",
  "Instrumentation technician — large-scale manufacturing",
];

const testimonials = [
  {
    quote: "Lester is a proactive individual who excels at the challenges of everyday work. He is skilled at identifying and capitalizing on new business opportunities, and his dedication to achieving success is commendable. He is an excellent time manager and consistently delivers.",
    name: "Ferdie James Nervida",
    role: "Strategic Advisor on AI, Blockchain, Cybersecurity and Digital Trust",
  },
  {
    quote: "His knowledge, ability to build and use frameworks or workbooks was lifesaving in the fast paced Web3 space where you constantly have to shift and adapt. He doesn’t gamble, but use pure brain power and thorough work to accomplish the mission he’s assigned for.",
    name: "Andrew Bukauskas",
    role: "Marketing and Growth Strategist",
  },
  {
    quote: "He has shown strong critical and dynamic thinking, which is very much needed in the Web3 ecosystem. His strong academic background and exposure to different business ecosystems add real value to his skills.",
    name: "Joseph Corpuz",
    role: "Founder, Filipino Web3",
  },
];

export default function Contact() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">References</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              What Colleagues<br />& Clients Say.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-0" stagger={0.15}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i} className="h-full" style={{ perspective: "1000px" }}>
                <TiltCard 
                  className="p-8 border-[3px] border-[#0A192F] bg-[#112240] flex flex-col m-0 brut-card" 
                  accentColor="#708090"
                >
                  <span className="font-bold text-[4rem] leading-none text-[#C0C0C0] select-none block mb-4" aria-hidden="true"
                        style={{ fontFamily: "var(--font-sora), sans-serif", transform: "translateZ(30px)" }}>"</span>
                  <blockquote className="m-0 mb-8 font-mono text-[13px] text-[#C0C0C0] leading-relaxed flex-1" style={{ transform: "translateZ(20px)" }}>
                    {t.quote}
                  </blockquote>
                  <div className="border-t-[3px] border-[#1a3158] pt-5 mt-auto" style={{ transform: "translateZ(30px)" }}>
                    <cite className="not-italic font-bold text-[#F8F9FA] block text-[14px] uppercase mb-1"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                      {t.name}
                    </cite>
                    <span className="font-mono text-[11px] text-[#708090] uppercase tracking-wider block leading-relaxed">{t.role}</span>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <div className="grid md:grid-cols-[340px_1fr_1fr] gap-0 items-stretch">

              {/* Photo column — single big portrait */}
              <div
                className="border-[3px] border-[#0A192F] bg-[#112240] flex flex-col overflow-hidden relative group cursor-pointer"
                style={{ minHeight: "520px" }}
                onClick={() => setLightbox("/lupin/lupin_3.jpg")}
                title="Click to expand portrait"
              >
                <img
                  src="/lupin/lupin_3.jpg"
                  alt="Engr. Lester Jun Magboo (LupinXBT)"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 block"
                  style={{ minHeight: "520px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent">
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C0C0C0] block mb-1">Lead 3P Strategist</span>
                  <span className="font-bold text-[14px] uppercase text-[#F8F9FA] block leading-tight" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    Engr. Lester Jun Magboo
                  </span>
                  <span className="font-mono text-[11px] text-[#708090] block mt-0.5">LupinXBT</span>
                </div>
              </div>

              {/* Bio column */}
              <div className="p-8 border-[3px] border-[#0A192F] bg-[#0A192F] h-full" style={{ marginLeft: "-3px" }}>
                <MonoLabel color="#C0C0C0">About</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.25rem,2vw,1.75rem)] uppercase leading-tight tracking-tight mt-3 mb-4 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Engr. Lester Jun Magboo
                </h2>
                <p className="font-mono text-[12px] text-[#C0C0C0] mb-5 uppercase tracking-wider leading-relaxed">
                  3P Strategist and Consultant — engineering-based problem solving applied to digital assets, operations and investment readiness.
                </p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-5">
                  I work at the intersection of blockchain, AI and Fintech, turning complex data and market trends into sustainable and scalable systems.
                </p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed">
                  The background is unusual on purpose: electronics and environmental engineering, then plant-floor instrumentation, then government-funded technology programs, then Web3 operations, community scaling and investment analysis. My focus is to help startups and organizations optimize their product, process, and people to build resilient enterprise and be investment ready.
                </p>
                <p className="font-mono text-[11px] text-[#708090] m-0 mt-8 border-t-[2px] border-[#112240] pt-4">
                  Working across APAC and EMEA hours.
                </p>
              </div>

              {/* Roles & Credentials column */}
              <div className="border-[3px] border-[#0A192F] bg-[#112240] h-full" style={{ marginLeft: "-3px" }}>
                <div className="p-8 border-b-[3px] border-[#0A192F]">
                  <MonoLabel color="#708090">Experiences</MonoLabel>
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

      {/* ── PHOTO COLLAGE SHOWCASE ─────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Media & Profile</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] uppercase leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Gallery & Spotlight.
            </h2>

            <div className="grid md:grid-cols-2 gap-0 border-[3px] border-[#0A192F] bg-[#112240] brut-card" style={{ boxShadow: "10px 10px 0 0 #0A192F" }}>
              {/* Image 1 in Collage */}
              <div
                className="relative h-[380px] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#0A192F] overflow-hidden group cursor-pointer"
                onClick={() => setLightbox("/lupin/lupin_3.jpg")}
              >
                <img
                  src="/lupin/lupin_3.jpg"
                  alt="Engr. Lester Jun Magboo (LupinXBT)"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 block"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent">
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C0C0C0] block mb-1">01 / Full Profile</span>
                  <span className="font-bold text-[14px] uppercase text-[#F8F9FA] block" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    3P Strategist & Consultant
                  </span>
                </div>
              </div>

              {/* Image 2 in Collage — Cropped to cover Binance logo on shirt */}
              <div
                className="relative h-[380px] overflow-hidden group cursor-pointer"
                onClick={() => setLightbox("/lupin/lupin_1.jpg")}
              >
                <img
                  src="/lupin/lupin_1.jpg"
                  alt="LupinXBT Portrait"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 block scale-110"
                  style={{ objectPosition: "center 5%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent">
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#C0C0C0] block mb-1">02 / Executive Headshot</span>
                  <span className="font-bold text-[14px] uppercase text-[#F8F9FA] block" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    Engr. Lester Jun Magboo (LupinXBT)
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOOK INFO + FORM ──────────────────────────── */}
      <section className="py-24" id="book">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-0 items-start">
            
            {/* Left Column: Book a Call */}
            <div className="p-8 md:p-10 border-[3px] border-[#0A192F] bg-[#0A192F]">
              <ScrollReveal>
                <MonoLabel color="#C0C0C0">Book a Call</MonoLabel>
                <h2
                  className="font-bold text-[clamp(1.75rem,3vw,2.5rem)] uppercase leading-tight tracking-tight mt-3 mb-4 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Tell me what is<br />keeping you up<br />at night.
                </h2>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-10 max-w-[50ch]">
                  Thirty minutes, no deck. We work out whether the problem you have is the one an audit solves, and what it would cost to find out properly.
                </p>
                
                <div className="flex flex-wrap gap-0 mb-12">
                  <a
                    href="https://calendly.com/lupinxbt-fw3/30min"
                    className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                      bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
                    style={{ boxShadow: "6px 6px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Book a 30-min call <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#message"
                    className="inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                      bg-transparent text-[#F8F9FA] border-[3px] border-[#708090] hover:border-[#F8F9FA] transition-colors"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Send us a message
                  </a>
                </div>
                
                <dl className="border-t-[3px] border-[#112240] pt-4">
                  {[
                    { dt: "Messages", dd: "Through the form — replies come from 3pstrategy@gmail.com, so it is worth allowing that address." },
                    { dt: "Based In", dd: "Bacolod, Philippines · APAC and EMEA hours" },
                    { dt: "Turnaround", dd: "1–2 weeks from kickoff" },
                    { dt: "Confidentiality", dd: "NDA on request before anything substantive is exchanged" },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="grid grid-cols-[8rem_1fr] gap-4 py-3 border-b-[3px] border-[#112240] last:border-b-0">
                      <dt className="font-bold text-[11px] uppercase tracking-widest text-[#708090] self-center"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                        {dt}
                      </dt>
                      <dd className="m-0 font-mono text-[13px] text-[#C0C0C0] leading-relaxed">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="border-[3px] border-[#0A192F] bg-[#112240] p-8 md:p-10 brut-card h-full" id="message" style={{ boxShadow: "8px 8px 0 0 #C0C0C0", marginLeft: "-3px" }}>
              <ScrollReveal>
                <MonoLabel color="#C0C0C0">Contact Form</MonoLabel>
                <h3
                  className="font-bold text-[clamp(1.5rem,2vw,2rem)] uppercase tracking-tight mt-3 mb-4 text-[#F8F9FA]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Send us a message
                </h3>
                <p className="font-mono text-[13px] text-[#C0C0C0] mb-8 leading-relaxed">
                  Tell me what you are trying to find out. Replies come from 3pstrategy@gmail.com, usually within one working day.
                </p>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  {[
                    { id: "f-name", label: "Name", type: "text" },
                    { id: "f-email", label: "Work email", type: "email" },
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-mono text-[11px] tracking-[0.14em] uppercase text-[#708090] mb-2">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        className="w-full px-4 py-3 bg-[#0A192F] text-[#F8F9FA] border-[3px] border-[#0A192F] font-mono text-[14px] focus:outline-none focus:border-[#C0C0C0] transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="f-role" className="block font-mono text-[11px] tracking-[0.14em] uppercase text-[#708090] mb-2">
                      I am a…
                    </label>
                    <div className="relative">
                      <select
                        id="f-role"
                        className="w-full px-4 py-3 bg-[#0A192F] text-[#F8F9FA] border-[3px] border-[#0A192F] font-mono text-[14px] focus:outline-none focus:border-[#C0C0C0] appearance-none transition-colors"
                      >
                        <option value="founder">Founder / operator</option>
                        <option value="investor">VC or angel investor</option>
                        <option value="program">Grant, incubator or accelerator</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#708090]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="f-project" className="block font-mono text-[11px] tracking-[0.14em] uppercase text-[#708090] mb-2">
                      Project name or URL
                    </label>
                    <input
                      id="f-project"
                      type="text"
                      className="w-full px-4 py-3 bg-[#0A192F] text-[#F8F9FA] border-[3px] border-[#0A192F] font-mono text-[14px] focus:outline-none focus:border-[#C0C0C0] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="f-msg" className="block font-mono text-[11px] tracking-[0.14em] uppercase text-[#708090] mb-2">
                      Context
                    </label>
                    <textarea
                      id="f-msg"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0A192F] text-[#F8F9FA] border-[3px] border-[#0A192F] font-mono text-[14px] focus:outline-none focus:border-[#C0C0C0] resize-y transition-colors"
                    />
                    <p className="font-mono text-[11px] text-[#708090] mt-2 m-0">The more specific the context, the more useful the first call.</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-[13px] tracking-[0.1em] uppercase
                      bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press mt-4"
                    style={{ boxShadow: "4px 4px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Send message
                  </button>
                  <p className="font-mono text-[11px] text-[#708090] text-center mt-4 m-0">
                    Used only to reply to your message. No list, no newsletter.
                  </p>
                </form>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full Image Maximization */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0A192F]/95 backdrop-blur-md flex items-center justify-center p-5 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-[92vw] max-h-[92vh] border-[3px] border-[#C0C0C0] bg-[#112240] p-3 shadow-[12px_12px_0px_0px_#0A192F]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] flex items-center justify-center font-bold brut-btn-press z-30"
              title="Close Full View"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightbox}
              alt="Full maximized view"
              className="max-w-full max-h-[85vh] object-contain block mx-auto"
            />
            <div className="mt-2 text-center font-mono text-[11px] uppercase tracking-widest text-[#C0C0C0]">
              Full Resolution View — Click anywhere or ✕ to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
