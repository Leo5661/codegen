import {
  IconAdjustmentsBolt,
  IconBrandGit,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  CubeIcon,
  MagicWandIcon,
  LightningBoltIcon,
  CountdownTimerIcon,
  CodeIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/src/lib/utils";

export function Features() {
  const features = [
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-secondary to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-secondary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 hover:text-secondary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
