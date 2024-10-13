/**
 * Framework template definitions.
 *
 * This file defines a set of framework templates, each with a name, tag, and variants.
 * The templates are used to generate base framework-specific configurations and settings.
 *
 * @module template
 */

export type Framework = {
  name: string;
  tag: string;
  variant: FrameworkVariant[];
  style?: FrameworkStyle[];
  link?: string;
  database?: Database;
};

export type FrameworkVariant = {
  name: string;
  tag: string;
  info?: string;
};

// Style

export type StyleProps =
  | "Tailwind"
  | "NativewindCSS"
  | "Stylex"
  | "Tailwind-Shadcn-UI"
  | "Material-UI"
  | "Chakra-UI"
  | "Vanilla-CSS";

export type FrameworkStyle = {
  name: StyleProps;
  link?: string;
  info?: string;
};

export type DatabaseType =
  | "Postgres"
  | "SQLite"
  | "MySQL"
  | "MongoDB"
  | "Redis";
export type ORMType = "Prisma" | "Drizzle";
export type Database = {
  orm: ORMType[];
  database: DatabaseType[];
};

export const templates: Framework[] = [
  {
    name: "next",
    tag: "Next14",
    variant: [
      {
        name: "next-default",
        tag: "Default Next.js",
      },
      {
        name: "ts",
        tag: "TypeScript",
      },
      {
        name: "js",
        tag: "JavaScript",
      },
    ],
    style: [
      {
        name: "Tailwind",
      },
      // {
      //   name: "Stylex",
      // },
      // {
      //   name: "Tailwind-Shadcn-UI",
      // },
      // {
      //   name: "Material-UI",
      // },
    ],
    database: {
      orm: ["Prisma"],
      database: ["Postgres"],
    },
  },
  {
    name: "react",
    tag: "React",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
      },
      {
        name: "js",
        tag: "JavaScript",
      },
    ],
    style: [
      {
        name: "Tailwind",
      },
      // {
      //   name: "Stylex",
      // },
      // {
      //   name: "Tailwind-Shadcn-UI",
      // },
      // {
      //   name: "Material-UI",
      // },
    ],
  },
  {
    name: "vue",
    tag: "Vue",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
      },
      {
        name: "js",
        tag: "JavaScript",
      },
    ],
    style: [
      {
        name: "Tailwind",
      },
      // {
      //   name: "Stylex",
      // },
      // {
      //   name: "Tailwind-Shadcn-UI",
      // },
      // {
      //   name: "Material-UI",
      // },
      // {
      //   name: "Chakra-UI",
      // },
    ],
  },
  {
    name: "remix",
    tag: "Remix",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
      },
    ],
    style: [
      {
        name: "Tailwind",
      },
      // {
      //   name: "Stylex",
      // },
      // {
      //   name: "Tailwind-Shadcn-UI",
      // },
      // {
      //   name: "Material-UI",
      // },
      // {
      //   name: "Chakra-UI",
      // },
    ],
    database: {
      orm: ["Prisma"],
      database: ["Postgres"],
    },
  },
  {
    name: "rn",
    tag: "React-Native",
    variant: [
      {
        name: "expo",
        tag: "Expo + TypeScript",
      },
      // {
      //   name: "react-native",
      //   tag: "Create React Native + TypeScript",
      // },
    ],
    style: [
      {
        name: "NativewindCSS",
        info: "Tailwind for React Native",
      },
      // {
      //   name: "Stylex",
      // },
      // {
      //   name: "Vanilla-CSS",
      // },
    ],
  },
  {
    name: "node",
    tag: "Node",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
      },
      {
        name: "js",
        tag: "JavaScript",
      },
    ],
    database: {
      orm: ["Prisma"],
      database: ["Postgres"],
    },
  },
];
