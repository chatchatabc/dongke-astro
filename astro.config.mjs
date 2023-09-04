import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://dongke.pages.dev",
  server: {
    port: 3000,
  },
  integrations: [tailwind(), astroI18next(), astroImageTools, mdx()],
});
