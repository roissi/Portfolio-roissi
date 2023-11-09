const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n: {
    ...i18n,
    locales: ["en", "fr"],
    defaultLocale: "fr",
    localeDetection: false,
  },
  // ...autres configurations
};

module.exports = nextConfig;
