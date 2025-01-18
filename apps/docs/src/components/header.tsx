import Link from "next/link";
import DocNavLogo from "./doc-nav-logo";
import { Button } from "./ui/button";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Binoculars, Book, BookOpen, FlaskConical, icons } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <Link className="flex items-center justify-center" href="/">
        <DocNavLogo />
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 items-center md:visible ">
        <Link
          className="text-sm text-muted-foreground hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r  from-indigo-500 to-cyan-300 transition-colors flex items-center"
          href="/docs/introduction"
        >
          Documentation
        </Link>
        {/* <Link
          className="text-sm text-muted-foreground hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r  from-indigo-500 to-cyan-300 transition-colors flex items-center"
          href="/roadmap"
        >
          Roadmap
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r  from-indigo-500 to-cyan-300 transition-colors flex items-center"
          href="/"
        >
          Lab
        </Link> */}
        <div className="flex flex-row items-center">
          <Button
            asChild
            size={"icon"}
            className="bg-transparent text-muted-foreground hover:bg-foreground/10"
          >
            <Link
              href="https://discord.gg/Ynct5xen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogoIcon />
            </Link>
          </Button>
          <Button
            asChild
            size={"icon"}
            className="bg-transparent text-muted-foreground hover:bg-foreground/10"
          >
            <Link
              href="https://github.com/Leo5661/codegen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon />
            </Link>
          </Button>
        </div>
      </nav>
      <ThemeSwitch />
    </header>
  );
}
