import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact-lester",
        destination: "https://lupinxiv.my.canva.site/contact-lester",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

