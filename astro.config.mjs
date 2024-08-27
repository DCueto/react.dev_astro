import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        "./src/components/Intro.astro",
        "./src/components/Note.astro",

        // import { YouTube } from 'astro-embed'
        { "astro-embed": ["YouTube"] },
      ],
    }),
    react(),
    mdx(),
    tailwind()
  ]
});