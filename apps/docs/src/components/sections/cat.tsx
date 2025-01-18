import { ArrowRight, Github, Lightbulb, MoveRight, Rocket } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ShineBorder } from "../ui/shine-border";
import { BorderBeam } from "../ui/border-beam";
import { CAT_LIST } from "@/src/lib/lists";

function CATSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 md:py-20 overflow-hidden">
      <div className="text-xl sm:text-3xl font-bold tracking-tighter text-center  md:text-4xl/tight">
        Be a Pioneer in the CodeGen Community
      </div>
      <div className="mt-4 text-sm sm:text-base max-w-[320px] text-muted-foreground font-light lg:text-lg sm:max-w-[600px] md:max-w-[800px] text-center mb-8 sm:mb-12 md:mb-24">
        Join us at the ground level and help shape the future of CodeGen. Your
        early contributions can make a significant impact.
      </div>

      <div className="flex flex-col md:flex-wrap lg:flex-row gap-4 items-center mt-8 justify-evenly w-full px-4 sm:px-20">
        {CAT_LIST.map((card, index) => (
          <Card
            key={index}
            className="relative rounded border px-4 py-8 sm:px-10 sm:py-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] min-w-[300px] min-h-[300px]"
          >
            <CardContent className="p-4 flex flex-col items-center text-center space-y-4">
              {card.icon}
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-muted-foreground text-sm max-w-80">
                {card.description}
              </p>
              <Button
                asChild
                variant={"outline"}
                className="inline-flex items-center justify-center"
              >
                <Link href={card.link}>
                  {card.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
            <BorderBeam />
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 sm:mt-20 z-10">
        <p className="text-muted-foreground mb-4 text-center">
          Join the growing CodeGen community and be part of something
          extraordinary from the start
        </p>

        <Button
          asChild
          size="lg"
          variant={"outline"}
          className="mt-6 sm:mt-8 ring-0 focus:ring-0 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#151225,45%,#23495f,55%,#151225)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <Link
            href="https://discord.gg/Ynct5xen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordLogoIcon className="mr-2 h-10 w-10 animate-pulse " />
            Join the CodeGen Movement
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CATSection;
