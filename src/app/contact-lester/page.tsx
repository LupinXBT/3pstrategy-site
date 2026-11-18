import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lester Jun Magbo-o | 3P Strategy",
  description: "Connect with Lester — 3P Strategist, Investment Analyst, Engineer.",
};

const socials = [
  {
    label: "Telegram",
    href: "https://t.me/Lupin_XBT",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.67l-2.94-.92c-.64-.203-.658-.64.135-.954l11.57-4.461c.537-.194 1.006.131.959.886z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com/users/798003322644594699",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "@Lupin_XIV",
    href: "https://x.com/intent/follow?screen_name=Lupin_XIV&tw_p=followbutton",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "@LupinXBT",
    href: "https://x.com/intent/follow?screen_name=LupinXBT&tw_p=followbutton",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ljmagboo/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactLesterPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#0a192f", fontFamily: "'Proxima Nova', 'Sora', sans-serif" }}
    >
      {/* Profile */}
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/lester-profile.png"
            alt="Lester Jun Magbo-o"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1
            className="text-white font-bold text-3xl md:text-4xl tracking-tight"
          >
            LESTER JUN L. MAGBO-O, EcE
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-1">
            3P Strategist • Investment Analyst • Engineer
          </p>
        </div>
      </div>

      {/* Contact details */}
      <div className="flex flex-col items-center gap-3 mb-10 text-center">
        <a
          href="tel:+639207514386"
          className="text-white/80 hover:text-white transition-colors text-lg tracking-wide"
        >
          +63 920 751 4386
        </a>
        <a
          href="mailto:magboo.lesterjun@gmail.com"
          className="text-white/80 hover:text-white transition-colors text-lg tracking-wide"
        >
          lupinxbt@gmail.com
        </a>
        <a
          href="https://www.3pstrategy.io"
          className="text-white/80 hover:text-white transition-colors text-lg tracking-wide"
        >
          www.3pstrategy.io
        </a>
      </div>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all text-sm font-medium"
          >
            {s.icon}
            {s.label}
          </a>
        ))}
      </div>
    </main>
  );
}
