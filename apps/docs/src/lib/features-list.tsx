import {
  CubeIcon,
  MagicWandIcon,
  LightningBoltIcon,
  CountdownTimerIcon,
  CodeIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const features: Feature[] = [
  {
    title: "Universal Framework Wizard",
    description:
      "Support for multiple JavaScript and TypeScript frameworks, making cross-platform development a breeze",
    icon: <GlobeIcon className="h-6 w-6" />,
  },
  {
    title: "Seamless Style Integration",
    description:
      "Integration with various styling options like CSS, SASS, and CSS-in-JS",
    icon: <MagicWandIcon className="h-6 w-6" />,
  },
  {
    title: "Database & ORM Harmony",
    description:
      "Instantly set up your preferred database and ORM combinations. From SQL to NoSQL",
    icon: <CubeIcon className="h-6 w-6" />,
  },
  {
    title: "Rapid Project Generation",
    description:
      "Reduce development time drastically by automating repetitive tasks",
    icon: <LightningBoltIcon className="h-6 w-6" />,
  },
  {
    title: "Production-Level Best Practices",
    description:
      "Promote production-level architecture and best practices, ensuring your projects are built on solid, scalable foundations",
    icon: <CodeIcon className="h-6 w-6" />,
  },
  {
    title: "Continuous Innovation",
    description:
      "Regular improvements and community-driven enhancements, ensuring your tool evolves with the latest tech trends",
    icon: <CountdownTimerIcon className="h-6 w-6" />,
  },
];
