import { remarkInstall } from "fumadocs-docgen";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

export default defineConfig({
  generateManifest: true,
  lastModifiedTime: "git",
  mdxOptions: {
    remarkPlugins: [[remarkInstall, { persist: { id: "package-manager" } }]],
  },
});
