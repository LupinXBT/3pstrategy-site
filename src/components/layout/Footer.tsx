import Link from "next/link";
import Image from "next/image";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L5.9 22H2.8l7.5-8.6L2.4 2h6.6l4.5 6.7L18.9 2Zm-1.1 18.1h1.7L7.3 3.8H5.5l12.3 16.3Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.1-1.95-3.1-1.95 0-2.25 1.47-2.25 3v5.8h-4V9Z" />
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.9 4.3 18.9 19c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.25.25-.45.45-.9.45l.3-4.6 8.4-7.6c.36-.32-.08-.5-.57-.18L7.3 12.9l-4.5-1.4c-.98-.3-1-.98.2-1.45l17.6-6.8c.8-.3 1.5.2 1.3 1.05Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-[#112240] bg-[#0A192F] pt-16 pb-8">
      <div className="w-full max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12 pb-12 border-b-[3px] border-[#112240]">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 no-underline">
              <div className="w-9 h-9 border-[3px] border-[#C0C0C0] flex items-center justify-center"
                   style={{ boxShadow: "3px 3px 0 0 #C0C0C0" }}>
                <Image src="/3P-Strategy-Brand/svg/3p-mark-white.svg" alt="3P Strategy" width={22} height={22} />
              </div>
              <div>
                <span className="block font-bold text-[15px] tracking-tight text-[#F8F9FA] uppercase" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  3P Strategy
                </span>
                <span className="block font-mono text-[9px] tracking-[0.15em] uppercase text-[#C0C0C0]">
                  Product · Process · People
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-[#C0C0C0] max-w-[42ch] leading-relaxed mb-4 font-mono">
              The 3Ps Audit — operational and technical due diligence for tech projects, funds and grant programs.
            </p>
            <p className="text-[12px] text-[#708090] font-mono tracking-wider mb-6 leading-relaxed">
              Led by Engr. Lester Jun Magboo (LupinXBT)<br />
              Philippines · working across APAC and EMEA.
            </p>

            {/* Social links */}
            <div className="flex gap-2 mt-4">
              {[
                { href: "https://x.com/lupinxbt", label: "3P on X", Icon: TwitterIcon },
                { href: "https://www.linkedin.com/in/ljmagboo/", label: "LinkedIn", Icon: LinkedinIcon },
                { href: "https://t.me/lupinxbt", label: "Telegram", Icon: TelegramIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border-[3px] border-[#112240] flex items-center justify-center text-[#708090] hover:text-[#C0C0C0] hover:border-[#C0C0C0] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* The 3Ps column */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C0C0C0] mb-5 pb-2 border-b-[3px] border-[#112240]">
              The 3Ps
            </h3>
            <ul className="space-y-1 list-none p-0">
              {[
                { href: "/product", label: "Product — the audit and services" },
                { href: "/process", label: "Process — how it works" },
                { href: "/people", label: "People — who it is for" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="block py-2 font-mono text-[12px] text-[#708090] hover:text-[#C0C0C0] transition-colors uppercase tracking-wider">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started column */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C0C0C0] mb-5 pb-2 border-b-[3px] border-[#112240]">
              Get Started
            </h3>
            <ul className="space-y-1 list-none p-0">
              <li>
                <Link href="/contact" className="block py-2 font-mono text-[12px] text-[#708090] hover:text-[#C0C0C0] transition-colors uppercase tracking-wider">
                  Why work with me
                </Link>
              </li>
              <li>
                <Link href="/faq" className="block py-2 font-mono text-[12px] text-[#708090] hover:text-[#C0C0C0] transition-colors uppercase tracking-wider">
                  FAQ — Before you book
                </Link>
              </li>
              <li>
                <a href="https://calendly.com/lupinxbt-fw3/30min" target="_blank" rel="noopener noreferrer"
                   className="block py-2 font-mono text-[12px] text-[#708090] hover:text-[#C0C0C0] transition-colors uppercase tracking-wider">
                  Book a 30-minute call
                </a>
              </li>
              <li>
                <Link href="/contact#message" className="block py-2 font-mono text-[12px] text-[#708090] hover:text-[#C0C0C0] transition-colors uppercase tracking-wider">
                  Send us a message
                </Link>
              </li>
              <li>
                <a href="mailto:3pstrategy@gmail.com"
                   className="block py-2 font-mono text-[12px] text-[#708090] hover:text-[#C0C0C0] transition-colors uppercase tracking-wider">
                  3pstrategy@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap gap-4 justify-between items-center pt-6 font-mono text-[11px] text-[#708090] uppercase tracking-wider">
          <p className="m-0">© {currentYear} 3P Strategy · LupinXBT Tech Solutions.</p>
          <p className="m-0">Independent advisory. Not investment, legal or tax advice.</p>
        </div>
      </div>
    </footer>
  );
}
