import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Lightbulb, Rocket } from "lucide-react";
import { syncBuiltinESMExports } from "node:module";
import { ReactElement } from "react";

export interface CAT_ITEM {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export const CAT_LIST: CAT_ITEM[] = [
  {
    icon: (
      <Rocket className="h-8 w-8 text-muted-foreground" strokeWidth="1.5" />
    ),
    title: "Early Adopter",
    description:
      "Be among the first to use and provide feedback on CodeGen. Your input will directly influence its development.",
    link: "/docs/introduction",
    linkText: "Get Started",
  },
  {
    icon: (
      <GitHubLogoIcon
        className="h-8 w-8 text-muted-foreground"
        strokeWidth="1.5"
      />
    ),
    title: "Contribute on GitHub",
    description:
      "Help build CodeGen from the ground up. Your contributions, big or small, will be foundational to the project.",
    link: "https://github.com/Leo5661/codegen",
    linkText: "View Repository",
  },
  {
    icon: (
      <Lightbulb className="h-8 w-8 text-muted-foreground" strokeWidth="1.5" />
    ),
    title: "Shape the Future",
    description:
      "Share your ideas and help define the roadmap for CodeGen. Your vision can become a core feature.",
    link: "https://github.com/Leo5661/codegen",
    linkText: "View Roadmap",
  },
];

export interface FAQ_Item {
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQ_Item[] = [
  {
    question: "How many frameworks does CodeGen support?",
    answer:
      "CodeGen currently supports major JavaScript frameworks including React, Vue, Angular, and Node.js. We're continuously working on expanding our framework support based on community feedback and needs.",
  },
  // {
  //   question: "Will it auto-generate components?",
  //   answer:
  //     "Yes, CodeGen can auto-generate components based on your specifications. This includes both basic structure and styling, saving you time in the initial setup phase of your projects.",
  // },
  {
    question: "Is CodeGen an AI?",
    answer:
      "Currently, CodeGen is not an AI. It uses predefined templates and user inputs to generate code. However, we are exploring AI integration for future versions to provide more intelligent and context-aware code generation.",
  },
  {
    question: "Is CodeGen free to use?",
    answer:
      "CodeGen is free to use without AI features. In the future, if AI capabilities are introduced, there may be paid tiers for those advanced features. We're committed to maintaining a free tier for basic functionality.",
  },
  {
    question: "Is CodeGen only available as a CLI?",
    answer:
      "No, CodeGen is not limited to CLI. We are actively developing a browser-based lab that will allow you to generate packages directly in your browser with all CLI features and more. This will provide a more interactive and visual experience for package generation.",
  },
  {
    question: "Can I contribute to CodeGen's development?",
    answer:
      "We welcome contributions from the community. You can contribute by submitting pull requests, reporting bugs, or suggesting new features on our GitHub repository.",
  },
  {
    question: "How often is CodeGen updated?",
    answer:
      "We strive to keep CodeGen up-to-date with the latest web development trends and framework updates. Major updates are typically released quarterly, with minor updates and bug fixes rolled out more frequently.",
  },
];

//Roadmap

export type Priority = "all" | "high" | "medium";

export interface RoadmapItemType {
  title: string;
  description: string;
  priority: "high" | "medium";
  date: {
    type: "expected" | "completed";
    value: string;
  };
  status: "planned" | "in-progress" | "complete";
}

export const RoadmapItemsList: RoadmapItemType[] = [
  {
    title: "Lemonsqueezy Integration",
    description:
      "Seamless payment processing and subscription management system.",
    priority: "high",
    date: {
      type: "expected",
      value: "Q1 2025",
    },
    status: "planned",
  },
  {
    title: "Teams Integration",
    description: "Multi-user workspaces with role-based access control.",
    priority: "high",
    date: {
      type: "expected",
      value: "Q1 2025",
    },
    status: "planned",
  },
  {
    title: "Magic Link Login",
    description: "Passwordless authentication with secure magic links.",
    priority: "high",
    date: {
      type: "expected",
      value: "Q1 2025",
    },
    status: "planned",
  },
  {
    title: "Full Email Support",
    description:
      "Comprehensive email system with templates, notifications, and transactional emails.",
    priority: "high",
    date: {
      type: "expected",
      value: "January 2025",
    },
    status: "in-progress",
  },
  {
    title: "Security Notifications",
    description:
      "Real-time security alerts and comprehensive notification system.",
    priority: "high",
    date: {
      type: "expected",
      value: "February 2025",
    },
    status: "in-progress",
  },
  {
    title: "Initial Launch",
    description: "First release of CodeGen with core functionality.",
    priority: "high",
    date: {
      type: "completed",
      value: "December 2024",
    },
    status: "complete",
  },
  {
    title: "Dark Mode",
    description: "System-wide dark mode support.",
    priority: "medium",
    date: {
      type: "completed",
      value: "December 2024",
    },
    status: "complete",
  },
];
