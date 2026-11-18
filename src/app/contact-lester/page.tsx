import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lester Jun Magbo-o | 3P Strategy",
  description: "Connect with Lester — 3P Strategist, Investment Analyst, Engineer.",
};

const socials = [
  {
    label: "Website",
    href: "https://www.3pstrategy.io",
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
        <circle cx="20" cy="20" r="20" fill="#ffffff" />
        <g stroke="#071224" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="20" cy="20" r="14.5" />
          <line x1="5.5" y1="20" x2="34.5" y2="20" />
          <path d="M 8.8 13.2 C 14.2 16.5 25.8 16.5 31.2 13.2" />
          <path d="M 8.8 26.8 C 14.2 23.5 25.8 23.5 31.2 26.8" />
          <line x1="20" y1="5.5" x2="20" y2="34.5" />
          <ellipse cx="20" cy="20" rx="7.5" ry="14.5" />
        </g>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/Lupin_XBT",
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
        <circle cx="20" cy="20" r="20" fill="#24A1DE" />
        <path
          d="M 29.5 11.2 L 25.4 28.5 C 25.1 29.8 24.3 30.1 23.2 29.5 L 17.5 25.3 L 14.8 27.9 C 14.5 28.2 14.2 28.5 13.6 28.5 L 14.0 22.8 L 24.4 13.4 C 24.8 13.0 24.3 12.8 23.7 13.2 L 10.8 21.3 L 5.3 19.6 C 4.1 19.2 4.1 18.4 5.6 17.8 L 27.0 9.5 C 28.0 9.1 28.9 9.8 28.5 11.2 Z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com/users/798003322644594699",
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
        <rect width="40" height="40" rx="9" fill="#000000" />
        <path
          d="M31.4 11.4c-2.2-1-4.5-1.7-6.9-2.1-.3.5-.7 1.2-.9 1.8-2.6-.4-5.2-.4-7.7 0-.3-.6-.6-1.3-.9-1.8-2.4.4-4.7 1.1-6.9 2.1-4.4 6.5-5.5 12.9-4.9 19.1 2.9 2.1 5.7 3.4 8.4 4.3.7-.9 1.3-1.9 1.8-3-1-.4-2-.9-2.9-1.4.2-.2.5-.3.7-.5 5.5 2.5 11.5 2.5 16.9 0 .2.2.5.3.7.5-.9.6-1.9 1-2.9 1.4.5 1.1 1.2 2 1.8 3 2.8-.8 5.6-2.2 8.4-4.3.7-7.3-1.2-13.6-4.9-19.1zM13.9 25.6c-1.7 0-3-1.5-3-3.4s1.3-3.4 3-3.4c1.7 0 3.1 1.5 3 3.4 0 1.9-1.3 3.4-3 3.4zm12.2 0c-1.7 0-3-1.5-3-3.4s1.3-3.4 3-3.4c1.7 0 3.1 1.5 3 3.4 0 1.9-1.3 3.4-3 3.4z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/intent/follow?screen_name=LupinXBT&tw_p=followbutton",
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
        <circle cx="20" cy="20" r="20" fill="#ffffff" />
        <g transform="translate(8, 8) scale(1)">
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            fill="#000000"
          />
        </g>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ljmagboo/",
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
        <rect width="40" height="40" rx="9" fill="#0077B5" />
        <path
          d="M12.3 10.2a2.7 2.7 0 1 1-5.3 0 2.7 2.7 0 0 1 5.3 0zM7.3 14.5h4.7v15.3H7.3V14.5zm7.5 0h4.5v2.2h.1c.6-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.2 5.7 7.3v8.4H24.9v-7.4c0-1.8 0-4-2.5-4-2.5 0-2.8 1.9-2.8 3.9v7.6h-4.7V14.5z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
];

export default function ContactLesterPage() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 sm:py-14 selection:bg-[#24A1DE] selection:text-white"
      style={{
        backgroundColor: "#071224",
        backgroundImage: "linear-gradient(180deg, #050d1a 0%, #0a192f 30%, #0a192f 70%, #050d1a 100%)",
        fontFamily: "'Proxima Nova', var(--font-sora), sans-serif",
      }}
    >
      <div className="w-full max-w-[360px] sm:max-w-[420px] flex flex-col items-center text-center my-auto">
        {/* Profile photo with circular white border */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-[3.5px] border-white shadow-2xl mb-6 sm:mb-8">
          <Image
            src="/lester-profile.png"
            alt="Lester Jun Magbo-o"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name + Title */}
        <div className="mb-6 sm:mb-8 px-2">
          <h1
            className="text-white font-bold text-[18px] sm:text-[21px] md:text-[24px] tracking-tight leading-snug uppercase"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            LESTER JUN L. MAGBO-O, EcE
          </h1>
          <p className="text-white/80 text-[11.5px] sm:text-[13px] md:text-[14px] font-medium tracking-tight mt-1.5">
            3P Strategist • Investment Analyst • Engineer
          </p>
        </div>

        {/* Contact details */}
        <div className="flex flex-col items-center gap-2 text-[14px] sm:text-[16px] md:text-[17px] text-white font-normal mb-8 sm:mb-10">
          <a
            href="tel:+639207514386"
            className="hover:text-[#24A1DE] transition-colors"
          >
            +63 920 751 4386
          </a>
          <a
            href="mailto:lupinxbt@gmail.com"
            className="hover:text-[#24A1DE] transition-colors"
          >
            lupinxbt@gmail.com
          </a>
          <a
            href="https://www.3pstrategy.io"
            className="hover:text-[#24A1DE] transition-colors"
          >
            www.3pstrategy.io
          </a>
        </div>

        {/* 5 Exact Social Icons row */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 w-full">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 hover:scale-110 active:scale-95 transition-transform duration-150 flex-shrink-0"
            >
              {s.svg}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
