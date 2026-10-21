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
      <section className="relative min-h-[100vh] flex items-center pt-16 pb-16 overflow-x-hidden overflow-y-hidden">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#0275D8] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#0275D8] opacity-[0.05] blur-[100px]" />
          <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#C0C0C0] opacity-[0.03] blur-[80px]" />
        </div>

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]" 
          style={{ backgroundImage: "linear-gradient(#F8F9FA 1px, transparent 1px), linear-gradient(90deg, #F8F9FA 1px, transparent 1px)", backgroundSize: "60px 60px" }} 
        />

        {/* Giant parallax bg number */}
        <ParallaxText speed={0.4} className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span
            className="font-bold text-[30vw] leading-none text-[#112240]"
            aria-hidden="true"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            3P
          </span>
        </ParallaxText>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 flex flex-col justify-center h-full">
          {/* Top Half: Text and Logo */}
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center mb-14 mt-8">
            {/* Left: headline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >

              <h1
                className="font-bold text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[1.03] tracking-tight text-[#F8F9FA] mb-6 max-w-[22ch]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <TextReveal text="A clear answer on whether a business can grow and attract investment." />
              </h1>

              <p className="text-[#8892A4] text-[clamp(1rem,1.15vw,1.15rem)] max-w-[54ch] leading-relaxed mb-10 font-light" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                3P Strategy assesses startups and MSMEs on three things: whether the market wants what they sell, whether the business can deliver it at a profit, and whether the team can run and grow it.{" "}
                <span className="text-[#F8F9FA] font-medium">You get a score, a plain verdict and a list of what to fix first.</span>
              </p>

              <motion.div
                className="flex flex-wrap gap-3 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min?month"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[14px] 
                    bg-[#0275D8] text-white rounded-[6px] hover:bg-[#025aa5] transition-all duration-200 shadow-[0_0_20px_rgba(2,117,216,0.4)] hover:shadow-[0_0_30px_rgba(2,117,216,0.6)]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[14px] 
                    bg-transparent text-[#C0C0C0] rounded-[6px] border border-[#30363D] hover:border-[#C0C0C0] hover:text-[#F8F9FA] transition-all duration-200"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  See how businesses are scored
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Logo */}
            <motion.div
              className="hidden lg:flex relative items-center justify-center h-full w-full"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Glow ring behind logo */}
              <div className="absolute w-[360px] h-[360px] rounded-full bg-[#0275D8] opacity-[0.08] blur-[60px]" />
              <motion.div 
                className="w-[320px] h-[320px] xl:w-[400px] xl:h-[400px] relative z-10"
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/3P-Strategy-Brand/svg/3p-mark-white.svg"
                  alt="3P Strategy Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(248,249,250,0.2)]"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom: 3 Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="w-full"
          >
            <p className="text-[#8892A4] font-mono text-[10px] tracking-[0.2em] uppercase mb-4">Choose the one that describes you</p>
            <div className="grid md:grid-cols-3 gap-3">
               {/* Card 1 */}
               <Link href="/people#founders" className="block border border-[#1E2D45] hover:border-[#0275D8] rounded-[8px] p-6 bg-[#0D2137]/60 hover:bg-[#0D2137] backdrop-blur-sm transition-all duration-200 cursor-pointer group relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0275D8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0275D8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <h4 className="font-bold text-[#F8F9FA] text-[15px] mb-2 tracking-tight" style={{ fontFamily: "var(--font-sora), sans-serif" }}>I run or am building a business</h4>
                 <p className="text-[#8892A4] text-[13px] leading-relaxed m-0 font-light">Startup founders and MSME owners preparing to raise, borrow or apply</p>
               </Link>
               
               {/* Card 2 */}
               <Link href="/people#investors" className="block border border-[#1E2D45] hover:border-[#0275D8] rounded-[8px] p-6 bg-[#0D2137]/60 hover:bg-[#0D2137] backdrop-blur-sm transition-all duration-200 cursor-pointer group relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0275D8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0275D8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <h4 className="font-bold text-[#F8F9FA] text-[15px] mb-2 tracking-tight" style={{ fontFamily: "var(--font-sora), sans-serif" }}>I invest in or lend to businesses</h4>
                 <p className="text-[#8892A4] text-[13px] leading-relaxed m-0 font-light">VCs, angels, lenders and corporate partners</p>
               </Link>

               {/* Card 3 */}
               <Link href="/people#programmes" className="block border border-[#1E2D45] hover:border-[#0275D8] rounded-[8px] p-6 bg-[#0D2137]/60 hover:bg-[#0D2137] backdrop-blur-sm transition-all duration-200 cursor-pointer group relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0275D8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0275D8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <h4 className="font-bold text-[#F8F9FA] text-[15px] mb-2 tracking-tight" style={{ fontFamily: "var(--font-sora), sans-serif" }}>I run a programme</h4>
                 <p className="text-[#8892A4] text-[13px] leading-relaxed m-0 font-light">Grants, incubators, accelerators and MSME development programmes</p>
               </Link>
            </div>
          </motion.div>
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
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#708090] mb-4">Is there a market that will pay?</p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6 max-w-[45ch]">
                  Who buys, why they choose you over the alternatives, how the business makes money, and how much room it has to grow.
                </p>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                  What the assessment covers →
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
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#708090] mb-4">Can it deliver at a profit?</p>
                <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6">
                  Day-to-day operations, margins on each sale, how decisions are made, and how the business finds and keeps customers.
                </p>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                  How the assessment runs →
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
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#708090] mb-4">Can the team run and grow it?</p>
                    <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-4 max-w-[72ch]">
                      Leadership, the people around the owner, how the team works together, and the community of customers and partners around the business.
                    </p>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                      Who it is for →
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── BEFORE / AFTER ──────────────────────────────── */}
      <section className="relative py-28 border-b-[3px] border-[#0A192F] bg-[#0A192F] overflow-hidden">

        {/* Background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(#F8F9FA 1px, transparent 1px), linear-gradient(90deg, #F8F9FA 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow blob — right side */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(192,192,192,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full max-w-[1280px] mx-auto px-5">

          {/* Header */}
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Typical outcome</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 mb-3 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Scores before and after a Fix Sprint.
            </h2>
            <p className="font-mono text-[13px] text-[#708090] leading-relaxed mb-16 max-w-[56ch]">
              Illustrative. Based on a business that completed an Assessment and a Fix Sprint.
            </p>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-0">

            {/* ── BEFORE ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="relative p-8 md:p-12 border-[3px] border-[#1a3158] bg-[#0d1b2e] h-full"
                style={{ marginRight: "-3px" }}
              >
                {/* Dim overlay texture */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{ backgroundImage: "repeating-linear-gradient(45deg, #F8F9FA 0, #F8F9FA 1px, transparent 0, transparent 50%)", backgroundSize: "6px 6px" }}
                />

                <div className="relative">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border-[2px] border-[#1a3158]">
                    <span className="w-2 h-2 rounded-full bg-[#708090]" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#708090] font-bold">Before assessment</span>
                  </div>

                  {/* Main score */}
                  <div className="flex items-end gap-4 mb-8 pb-8 border-b-[2px] border-[#1a3158]">
                    <div>
                      <span className="font-mono text-[11px] tracking-widest uppercase text-[#708090] block mb-1">3P Index</span>
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-bold text-[5rem] leading-none text-[#708090]"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          5.3
                        </span>
                        <span className="font-mono text-[13px] text-[#708090] mb-2">/ 10</span>
                      </div>
                    </div>
                  </div>

                  {/* Pillar bars */}
                  <div className="space-y-6">
                    {[
                      { label: "Product", score: 4.2, color: "#708090" },
                      { label: "Process", score: 5.5, color: "#708090" },
                      { label: "People",  score: 6.2, color: "#708090" },
                    ].map(({ label, score, color }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-mono text-[11px] text-[#708090] uppercase tracking-widest">{label}</span>
                          <span className="font-mono text-[13px] font-bold" style={{ color }}>{score}</span>
                        </div>
                        <div className="relative h-[8px] bg-[#0A192F] border-[1px] border-[#1a3158] w-full overflow-hidden">
                          <motion.div
                            className="h-full"
                            style={{ backgroundColor: color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(score / 10) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="font-mono text-[9px] text-[#1a3158]">0</span>
                          <span className="font-mono text-[9px] text-[#1a3158]">10</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── AFTER ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="relative p-8 md:p-12 border-[3px] border-[#C0C0C0] bg-[#112240] h-full overflow-hidden"
                style={{ boxShadow: "10px 10px 0 0 #C0C0C0" }}
              >
                {/* Glow bloom top-right */}
                <div
                  className="absolute -top-16 -right-16 w-[280px] h-[280px] rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(192,192,192,0.15) 0%, transparent 65%)" }}
                />
                {/* Glow bloom bottom-left */}
                <div
                  className="absolute -bottom-12 -left-12 w-[200px] h-[200px] rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(192,192,192,0.08) 0%, transparent 65%)" }}
                />

                <div className="relative">
                  {/* Label */}
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border-[2px] border-[#C0C0C0]">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-[#F8F9FA]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F8F9FA] font-bold">After fix sprint</span>
                  </div>

                  {/* Main score + delta badge */}
                  <div className="flex items-end gap-4 mb-8 pb-8 border-b-[2px] border-[#1a3158]">
                    <div className="flex-1">
                      <span className="font-mono text-[11px] tracking-widest uppercase text-[#C0C0C0] block mb-1">3P Index</span>
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-bold text-[5rem] leading-none text-[#F8F9FA]"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          7.2
                        </span>
                        <span className="font-mono text-[13px] text-[#708090] mb-2">/ 10</span>
                      </div>
                    </div>
                    {/* Delta badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.5 }}
                      className="shrink-0 mb-2"
                    >
                      <div
                        className="px-4 py-2 border-[3px] border-[#F8F9FA] bg-[#0A192F] text-center"
                        style={{ boxShadow: "4px 4px 0 0 #C0C0C0" }}
                      >
                        <span
                          className="font-bold text-[1.4rem] leading-none text-[#F8F9FA] block"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          +1.9
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0C0C0]">uplift</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Pillar bars */}
                  <div className="space-y-6">
                    {[
                      { label: "Product", score: 6.5, prev: 4.2, color: "#F8F9FA" },
                      { label: "Process", score: 7.7, prev: 5.5, color: "#F8F9FA" },
                      { label: "People",  score: 7.4, prev: 6.2, color: "#F8F9FA" },
                    ].map(({ label, score, prev, color }, i) => {
                      const delta = (score - prev).toFixed(1);
                      return (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-[11px] text-[#C0C0C0] uppercase tracking-widest">{label}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] text-[#708090] px-1.5 py-0.5 border border-[#1a3158]">+{delta}</span>
                              <span className="font-mono text-[13px] font-bold text-[#F8F9FA]">{score}</span>
                            </div>
                          </div>
                          {/* Track */}
                          <div className="relative h-[8px] bg-[#0A192F] border-[1px] border-[#1a3158] w-full overflow-hidden">
                            {/* Previous score ghost bar */}
                            <div
                              className="absolute left-0 top-0 h-full bg-[#1a3158]"
                              style={{ width: `${(prev / 10) * 100}%` }}
                            />
                            {/* New score bar animates in */}
                            <motion.div
                              className="absolute left-0 top-0 h-full"
                              style={{ backgroundColor: color }}
                              initial={{ width: `${(prev / 10) * 100}%` }}
                              whileInView={{ width: `${(score / 10) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                            />
                            {/* Glow tip */}
                            <motion.div
                              className="absolute top-0 h-full w-[6px]"
                              style={{
                                background: "linear-gradient(90deg, transparent, rgba(248,249,250,0.8))",
                                boxShadow: "0 0 8px rgba(248,249,250,0.6)",
                              }}
                              initial={{ left: `calc(${(prev / 10) * 100}% - 6px)` }}
                              whileInView={{ left: `calc(${(score / 10) * 100}% - 6px)` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                            />
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="font-mono text-[9px] text-[#1a3158]">0</span>
                            <span className="font-mono text-[9px] text-[#1a3158]">10</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom note */}
          <ScrollReveal delay={0.4}>
            <p className="font-mono text-[10px] text-[#1a3158] uppercase tracking-widest text-center mt-8">
              Scores are illustrative · Individual results vary based on starting state and sprint scope
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* ── WHO IS THIS FOR ─────────────────────────────── */}
      <section className="py-24 border-b-[3px] border-[#0A192F] bg-[#112240]">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Who it&apos;s for</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Find your starting point.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-0" stagger={0.1}>
            {[
              {
                num: "01",
                title: "I run or am building a business",
                desc: "Startup founders and MSME owners preparing to raise, borrow or apply",
                href: "/people#founders",
                accent: "#F8F9FA",
              },
              {
                num: "02",
                title: "I invest in or lend to businesses",
                desc: "VCs, angels, lenders and corporate partners",
                href: "/people#investors",
                accent: "#C0C0C0",
              },
              {
                num: "03",
                title: "I run a programme",
                desc: "Grants, incubators, accelerators and MSME development programmes",
                href: "/people#programmes",
                accent: "#708090",
              },
            ].map(({ num, title, desc, href, accent }) => (
              <StaggerItem key={num}>
                <Link
                  href={href}
                  className="block p-8 border-[3px] border-[#0A192F] bg-[#0A192F] h-full brut-card hover:bg-[#1a3158] transition-colors group"
                  style={{ marginRight: "-3px", marginBottom: "-3px" }}
                >
                  <span
                    className="font-bold text-[3rem] leading-none block mb-4"
                    style={{ fontFamily: "var(--font-sora), sans-serif", color: accent }}
                  >
                    {num}
                  </span>
                  <h3
                    className="font-bold text-[1.1rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-6">{desc}</p>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#F8F9FA] group-hover:tracking-[0.2em] transition-all">
                    Learn more →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── WAYS TO GET STARTED ─────────────────────────── */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-5">
          <ScrollReveal>
            <MonoLabel color="#C0C0C0">Next step</MonoLabel>
            <h2
              className="font-bold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight mt-2 mb-12 text-[#F8F9FA]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Ways to get started.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-0" stagger={0.1}>
            {/* Ready to scope it */}
            <StaggerItem>
              <div
                className="p-8 md:p-10 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card flex flex-col justify-between"
                style={{ marginRight: "-3px", boxShadow: "8px 8px 0 0 #C0C0C0" }}
              >
                <div>
                  <h3
                    className="font-bold text-[1.25rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Ready to scope it
                  </h3>
                  <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-8">
                    A 30-minute call to agree scope, timing and price.
                  </p>
                </div>
                <a
                  href="https://calendly.com/lupinxbt-fw3/30min"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 font-bold text-[12px] tracking-[0.1em] uppercase
                    bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press w-full"
                  style={{ boxShadow: "4px 4px 0 0 #0A192F", fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Book a 30-minute call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </StaggerItem>

            {/* Check the services */}
            <StaggerItem>
              <div
                className="p-8 md:p-10 border-[3px] border-[#0A192F] bg-[#112240] h-full brut-card flex flex-col justify-between"
                style={{ marginRight: "-3px" }}
              >
                <div>
                  <h3
                    className="font-bold text-[1.25rem] uppercase tracking-tight text-[#F8F9FA] mb-3"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Check the services
                  </h3>
                  <p className="font-mono text-[13px] text-[#C0C0C0] leading-relaxed mb-8">
                    Explore what the 3Ps audit covers, fix sprints, fractional advisory and additional services.
                  </p>
                </div>
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 font-bold text-[12px] tracking-[0.1em] uppercase
                    bg-transparent text-[#F8F9FA] border-[3px] border-[#708090] hover:border-[#F8F9FA] hover:bg-[#1a3158] transition-colors w-full"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Check the services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-8 text-center">
            <p className="font-mono text-[12px] text-[#708090]">
              Have a question first?{" "}
              <Link href="/contact#message" className="text-[#F8F9FA] underline hover:text-[#C0C0C0] transition-colors">
                Send a brief →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
