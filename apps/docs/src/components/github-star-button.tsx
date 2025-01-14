"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

interface GitHubStarButtonProps {
  repo: string;
}

export function GitHubStarButton({ repo }: GitHubStarButtonProps) {
  const [starred, setStarred] = useState(false);

  const handleStar = async () => {
    try {
      // This is a mock API call. In a real application, you would call the GitHub API to star the repository.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStarred(true);
      console.log(`Starred repository: ${repo}`);
    } catch (error) {
      console.error("Error starring repository:", error);
    }
  };

  return (
    <Button
      onClick={handleStar}
      disabled={starred}
      size="lg"
      variant={"outline"}
      className="font-semibold"
    >
      <Star className="mr-2 h-5 w-5 fill:bg-primary" />
      {starred ? "Starred" : "Star on GitHub"}
    </Button>
  );
}
