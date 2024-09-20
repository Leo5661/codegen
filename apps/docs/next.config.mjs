import { createMDX } from 'fumadocs-mdx/next';
 
const withMDX = createMDX();
 
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@codegen/ui"],
  reactStrictMode: true,
};
 
export default withMDX(config);