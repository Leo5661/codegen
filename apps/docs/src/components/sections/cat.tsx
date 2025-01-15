import { ArrowRight, Github, Lightbulb, MoveRight, Rocket } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ShineBorder } from "../ui/shine-border";
import { BorderBeam } from "../ui/border-beam";

function CATSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 md:py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="text-xl sm:text-3xl font-bold tracking-tighter text-center  md:text-4xl/tight">
        Be a Pioneer in the CodeGen Community
      </div>
      <div className="mt-4 text-sm sm:text-base max-w-[320px] text-muted-foreground md:text-lg lg:text-xl sm:max-w-[600px] text-center mb-8 sm:mb-12 md:mb-24">
        Join us at the ground level and help shape the future of CodeGen. Your
        early contributions can make a significant impact.
      </div>

      <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 items-center mt-8 justify-evenly w-full px-20">
        <Card className="relative rounded border sm:px-10 sm:py-8 p-4 min-w-[300px] min-h-[300px]">
          <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Rocket className="h-8 w-8 text-primary" />
            <h3 className="text-lg font-semibold">Early Adopter</h3>
            <p className="text-muted-foreground text-sm max-w-80">
              Be among the first to use and provide feedback on CodeGen. Your
              input will directly influence its development.
            </p>
            <Button
              asChild
              variant={"outline"}
              className="inline-flex items-center justify-center"
            >
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
          <BorderBeam />
        </Card>

        <Card className="relative rounded border sm:px-10 sm:py-8 p-4 min-w-[300px] min-h-[300px]">
          <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <GitHubLogoIcon className="h-8 w-8 text-primary" />
            <div className="text-lg font-semibold">Contribute on GitHub</div>
            <p className="text-muted-foreground text-sm max-w-80">
              Help build CodeGen from the ground up. Your contributions, big or
              small, will be foundational to the project.
            </p>
            <Button
              asChild
              variant={"outline"}
              className="inline-flex items-center justify-center"
            >
              <Link href="https://github.com/Leo5661/codegen">
                View Repository
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
          <BorderBeam />
        </Card>

        <Card className="relative rounded border sm:px-10 sm:py-8 p-4 min-w-[300px] min-h-[300px]">
          <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
            <Lightbulb className="h-8 w-8 text-primary" />
            <div className="text-lg font-semibold">Shape the Future</div>
            <p className="text-muted-foreground text-sm max-w-80">
              Share your ideas and help define the roadmap for CodeGen. Your
              vision can become a core feature.
            </p>
            <Button
              asChild
              variant={"outline"}
              className="inline-flex items-center justify-center"
            >
              <Link href="https://github.com/Leo5661/codegen">
                View Roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
          <BorderBeam />
        </Card>
      </div>

      {/* <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 my-10" /> */}

      <div className="flex flex-col items-center mt-10 sm:mt-20 z-10">
        <p className="text-muted-foreground mb-4 text-center">
          Join the growing CodeGen community and be part of something
          extraordinary from the start
        </p>
        <Button
          asChild
          size="lg"
          variant={"outline"}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <Link href="/join">
            <DiscordLogoIcon className="mr-2 h-10 w-10 animate-pulse " />
            Join the CodeGen Movement
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CATSection;

// // Button code
// <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//   Shimmer
// </button>
