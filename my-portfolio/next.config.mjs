import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { dev }) {
    // Optionnel: évite certains warnings liés au cache webpack en dev
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
