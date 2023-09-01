import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [tailwind(), astroImageTools],
});
