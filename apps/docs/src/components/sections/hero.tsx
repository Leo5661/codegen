"use client";

import { CheckCheck, Copy, DollarSign, Terminal } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { SparklesCore } from "../ui/sparkles";
import TechStack from "../tech-stack";
import { GitHubStarButton } from "../github-star-button";
import Link from "next/link";

function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g codegen-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-x-5 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
        <div className="absolute inset-x-5 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
        <div className="absolute inset-x-10 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
        <div className="absolute inset-x-10 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(200px_100px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(300px_150px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] "></div>
      </div>

      <div className="flex flex-col items-center justify-center grow z-10 ">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-light">
          <Terminal className="mr-2 h-3.5 w-3.5" />
          <span>The Universal CLI for Modern Development</span>
        </div>
        <div className="text-3xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl lg:text-7xl sm:max-w-3xl max-w-xs  to-muted-foreground mt-4">
          Build Faster with Automated Workflows
        </div>
        <p className="sm:max-w-[700px] max-w-[300px] text-muted-foreground text-xs sm:text-base md:text-lg text-center mt-4">
          Generate tailored templates for TypeScript and JavaScript frameworks.
          Boost your productivity with customizable scaffolding.
        </p>

        <div className="flex flex-row items-center justify-evenly sm:space-x-4 space-x-1 border rounded-md sm:px-4 px-1 mt-8">
          <DollarSign size={15} strokeWidth={1.5} />
          <div className="sm:font-semibold font-light text-xs sm:text-sm text-muted-foreground">
            pnpm install -g @leocoder1/codegen-cli
          </div>
          <Button
            size="icon"
            className="bg-transparent hover:bg-foreground/10"
            onClick={handleCopy}
          >
            {copied ? (
              <CheckCheck className="w-2 h-2  sm:h-4 sm:w-4 text-green-500" />
            ) : (
              <Copy className="w-2 h-2  sm:h-4 sm:w-4" />
            )}
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button className="w-full sm:w-auto min-w-[200px]" asChild>
            <Link href="/docs/introduction">Get Started</Link>
          </Button>
          <GitHubStarButton repo="leocoder1/codegen-cli" />
        </div>

        <TechStack
          className="mt-8"
          technologies={[
            "nextjs",
            "typescript",
            "node",
            "tailwindcss",
            "framermotion",
            "shadcn",
          ]}
        />
      </div>
    </div>
  );
}

export default HeroSection;
