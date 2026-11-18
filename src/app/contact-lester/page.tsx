import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lester - Contact Info | 3P Strategy",
  description: "Connect with Lester - Contact info, calendar, and channels.",
};

export default function ContactLesterPage() {
  redirect("https://lupinxiv.my.canva.site/contact-lester");
}
