const theme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

module.exports = {
  important: true,
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./hugo_stats.json"],
    mode: "all",
    options: {
      whitelist: [],
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes, els.ids);
        return els;
      },
    },
  },
  plugins: [typography],
};
