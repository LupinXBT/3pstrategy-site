import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lester - Contact Info | 3P Strategy",
  description: "Connect with Lester - Contact info, calendar, and channels.",
};

export default function ContactLesterPage() {
  return (
    <iframe
      src="https://lupinxiv.my.canva.site/contact-lester"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
        zIndex: 9999,
      }}
      title="Contact Lester"
      allowFullScreen
    />
  );
}
