"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/process", label: "Process" },
    { href: "/people", label: "People" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A192F] border-b-[3px] border-[#0A192F]">
      <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="w-9 h-9 border-[3px] border-[#C0C0C0] flex items-center justify-center"
               style={{ boxShadow: "3px 3px 0 0 #C0C0C0" }}>
            <Image src="/3P-Strategy-Brand/svg/3p-mark-white.svg" alt="3P Strategy" width={22} height={22} />
          </div>
          <div>
            <span className="block font-bold text-[15px] tracking-tight text-[#F8F9FA] uppercase" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              3P Strategy
            </span>
            <span className="block font-mono text-[9px] tracking-[0.15em] uppercase text-[#C0C0C0]">
              Due Diligence
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-mono text-[12px] tracking-[0.12em] uppercase border-[3px] border-transparent transition-none
                  ${active
                    ? "bg-[#F8F9FA] text-[#0A192F] border-[#0A192F]"
                    : "text-[#C0C0C0] hover:text-[#F8F9FA] hover:bg-[#112240] hover:border-[#0A192F]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/lupinxbt-fw3/30min?month"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 font-mono text-[12px] tracking-[0.1em] uppercase font-bold
              bg-[#F8F9FA] text-[#0A192F] border-[3px] border-[#0A192F] brut-btn-press"
            style={{ boxShadow: "4px 4px 0 0 #0A192F" }}
          >
            Book a Call
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-[3px] border-[#0A192F] bg-[#112240] text-[#F8F9FA]"
            style={{ boxShadow: "3px 3px 0 0 #0A192F" }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-[3px] border-[#0A192F] bg-[#0A192F]">
          <nav className="flex flex-col">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-5 py-4 font-mono text-[12px] tracking-[0.12em] uppercase border-b-[3px] border-[#0A192F]
                    ${active ? "bg-[#F8F9FA] text-[#0A192F]" : "text-[#C0C0C0] hover:bg-[#112240]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://calendly.com/lupinxbt-fw3/30min?month"
              className="px-5 py-4 font-mono text-[12px] tracking-[0.1em] uppercase font-bold bg-[#F8F9FA] text-[#0A192F]"
            >
              Book a Call →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
