import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codegen Docs",
  description: "Documentation for Codegen",
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
          {children}
        </RootProvider>
        </body>
    </html>
  );
}
