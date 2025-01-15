import { Terminal } from "lucide-react";
import { Card } from "../ui/card";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function InstallationSection() {
  const steps = [
    {
      title: "Install CodeGen CLI",
      command: "pnpm add @leocoder1/codegen-cli -g",
      description: "Install the CodeGen CLI globally on your system",
    },
    {
      title: "Create a New Project",
      command: "cgen init",
      description: "Generate a new project using one of our templates",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 md:py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Get Started in Minutes
      </div>
      <div className="mt-4 text-sm sm:text-base max-w-[320px] text-muted-foreground md:text-lg lg:text-xl sm:max-w-[600px] text-center mb-8 sm:mb-12 md:mb-24">
        Quick installation process with npm or yarn. Start code instantly.
      </div>
      <div className="flex flex-col items-center gap-8 max-w-3xl">
        {steps.map((step, index) => (
          <HoverBorderGradient
            className="p-6 bg-background"
            key={index}
            containerClassName="rounded-lg"
          >
            <div className="flex items-start gap-4 w-full">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                <Terminal className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <div className="font-semibold text-foreground">
                  {step.title}
                </div>
                <p className="sm:text-sm text-xs text-muted-foreground text-start">
                  {step.description}
                </p>
                <pre className="mt-2 sm:px-4 sm:py-2 px-2 py-1 rounded-lg bg-muted/50 font-light text-sm text-muted-foreground">
                  {step.command}
                </pre>
              </div>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
}

export default InstallationSection;
