const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    ...i18n,
    locales: ["en", "fr"],
    defaultLocale: "fr",
    localeDetection: false,
  },
};

module.exports = nextConfig;
