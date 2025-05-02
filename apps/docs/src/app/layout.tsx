import { Banner } from "fumadocs-ui/components/banner";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codegen | The Universal CLI for Modern Development",
  description:
    "Generate tailored templates for TypeScript and JavaScript frameworks. Boost your productivity with customizable scaffolding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <RootProvider
          theme={{
            enabled: true,
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          <Banner id="banner" variant="rainbow" changeLayout={true}>
            CodeGen is under development and will be available soon
          </Banner>
          {children}
          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
}
