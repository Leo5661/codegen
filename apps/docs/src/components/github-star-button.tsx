import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface GitHubStarButtonProps {
  repo: string;
}

export function GitHubStarButton({ repo }: GitHubStarButtonProps) {
  return (
    <Button asChild size="lg" variant={"outline"} className="font-semibold">
      <Link
        href={process.env.NEXT_PUBLIC_GITHUB_URL as string}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Star className="mr-2 h-5 w-5 fill:bg-primary" />
        {"Star on GitHub"}
      </Link>
    </Button>
  );
}
