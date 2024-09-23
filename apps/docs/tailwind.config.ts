// tailwind config is required for editor support
import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import type { Config } from "tailwindcss";
import sharedConfig from "@codegen/ui/tailwind-config";

const config: Pick<Config, "content" | "presets" > = {
  content: [ 
    './node_modules/fumadocs-ui/dist/**/*.js',
    './components/**/*.{ts,tsx}',
    './mdx-components.tsx', 
    './content/**/*.mdx',
    './src/app/**/*.tsx', 
  ],
  presets: [createPreset()],
};

export default config;
