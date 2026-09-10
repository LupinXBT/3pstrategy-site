"use client";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export function Marquee({
  text,
  speed = 30,
  className = "",
  separator = " · ",
}: MarqueeProps) {
  const content = `${text}${separator}`.repeat(12);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{content}</span>
      </div>
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{content}</span>
      </div>
    </div>
  );
}
