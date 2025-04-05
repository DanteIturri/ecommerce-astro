import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
