import Link from "next/link";
import DocNavLogo from "./doc-nav-logo";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Binoculars, Book, BookOpen, FlaskConical } from "lucide-react";
export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <Link className="flex items-center justify-center" href="/">
        <DocNavLogo />
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 items-center md:visible ">
        <Link
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
          href="/docs/introduction"
        >
          <BookOpen size={16} className="mr-2" strokeWidth={1.5} />
          Documentation
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
          href="/roadmap"
        >
          <Binoculars size={16} className="mr-2" strokeWidth={1.5} />
          Roadmap
        </Link>
        <Link
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
          href="/lab"
        >
          <FlaskConical size={16} className="mr-2" strokeWidth={1.5} />
          Lab
        </Link>
        <Button asChild className="bg-transparent hover:bg-foreground/10">
          <Link
            className="text-sm text-muted-foreground"
            href="https://github.com/Leo5661/codegen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
