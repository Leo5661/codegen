/**
 * Framework template definitions.
 *
 * This file defines a set of framework templates, each with a name, tag, color, and variants.
 * The templates are used to generate base framework-specific configurations and settings.
 *
 * @module template
 */

import exp from "node:constants";
import colors from "picocolors";

const {
  blue,
  blueBright,
  cyan,
  green,
  greenBright,
  magenta,
  red,
  redBright,
  reset,
  yellow,
  cyanBright,
  yellowBright,
  magentaBright,
} = colors;

export type ColorFunction = (str: string | number) => string;
export type Framework = {
  name: string;
  tag: string;
  color: ColorFunction;
  type: "frontend" | "backend" | "fullstack";
  variant: FrameworkVariant[];
  style?: FrameworkStyle[];
  database?: Database;
};

export type FrameworkVariant = {
  name: string;
  tag: string;
  color: ColorFunction;
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
  color: ColorFunction;
  info?: string;
};

export type DatabaseType =
  | "Postgres"
  | "SQLite"
  | "Turso"
  | "MySQL2"
  | "MongoDB"
  | "Redis"
  | "PlanetScale";
export type ORMType = "Prisma" | "Drizzle";
export type Database = {
  orm: ORMType[];
  database: DatabaseType[];
};

export const templates: Framework[] = [
  {
    name: "next",
    tag: "Next14",
    color: cyanBright,
    type: "fullstack",
    variant: [
      {
        name: "next-default",
        tag: "Default Next.js",
        color: cyan,
      },
      {
        name: "ts",
        tag: "TypeScript",
        color: blueBright,
      },
      {
        name: "js",
        tag: "JavaScript",
        color: yellowBright,
      },
    ],
    style: [
      {
        name: "Tailwind",
        color: blue,
      },
      {
        name: "Stylex",
        color: magenta,
      },
      {
        name: "Tailwind-Shadcn-UI",
        color: reset,
      },
      {
        name: "Material-UI",
        color: cyan,
      },
    ],
    database: {
      orm: ["Prisma", "Drizzle"],
      database: ["Postgres"],
    },
  },
  {
    name: "react",
    tag: "React",
    color: blue,
    type: "frontend",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
        color: blueBright,
      },
      {
        name: "js",
        tag: "JavaScript",
        color: yellowBright,
      },
    ],
    style: [
      {
        name: "Tailwind",
        color: blue,
      },
      {
        name: "Stylex",
        color: magenta,
      },
      {
        name: "Tailwind-Shadcn-UI",
        color: reset,
      },
      {
        name: "Material-UI",
        color: cyan,
      },
    ],
  },
  {
    name: "vue",
    tag: "Vue",
    color: greenBright,
    type: "frontend",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
        color: blueBright,
      },
      {
        name: "js",
        tag: "JavaScript",
        color: yellowBright,
      },
    ],
    style: [
      {
        name: "Tailwind",
        color: blue,
      },
      {
        name: "Stylex",
        color: magenta,
      },
      {
        name: "Tailwind-Shadcn-UI",
        color: reset,
      },
      {
        name: "Material-UI",
        color: cyan,
      },
      {
        name: "Chakra-UI",
        color: green,
      },
    ],
  },
  {
    name: "remix",
    tag: "Remix",
    color: magenta,
    type: "fullstack",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
        color: blueBright,
      },
    ],
    style: [
      {
        name: "Tailwind",
        color: blue,
      },
      {
        name: "Stylex",
        color: magenta,
      },
      {
        name: "Tailwind-Shadcn-UI",
        color: reset,
      },
      {
        name: "Material-UI",
        color: cyan,
      },
      {
        name: "Chakra-UI",
        color: green,
      },
    ],
    database: {
      orm: ["Prisma", "Drizzle"],
      database: ["Postgres"],
    },
  },
  {
    name: "rn",
    tag: "React-Native",
    color: blue,
    type: "frontend",
    variant: [
      {
        name: "expo",
        tag: "Expo + TypeScript",
        color: blueBright,
      },
      // {
      //   name: "react-native",
      //   tag: "Create React Native + TypeScript",
      //   color: cyan,
      // },
    ],
    style: [
      {
        name: "NativewindCSS",
        color: blue,
        info: "Tailwind for React Native",
      },
      {
        name: "Stylex",
        color: magenta,
      },
      {
        name: "Vanilla-CSS",
        color: yellowBright,
      },
    ],
  },
  {
    name: "node",
    tag: "Node",
    color: green,
    type: "backend",
    variant: [
      {
        name: "ts",
        tag: "TypeScript",
        color: blueBright,
      },
      {
        name: "js",
        tag: "JavaScript",
        color: yellowBright,
      },
    ],
    database: {
      orm: ["Prisma", "Drizzle"],
      database: ["Postgres"],
    },
  },
];

/**
 * Returns a list of frameworks, each with a value and a label.
 * The label is colored with the color specified in the framework.
 * @returns {Array<{value: string, label: string}>}
 */
export const frameworkList = () => {
  return templates.map((framework) => {
    const colorFn = framework.color;
    return {
      value: framework.name,
      label: colorFn(framework.tag),
    };
  });
};

/**
 * Returns a list of variants for a given framework, each with a value and a label.
 * The label is colored with the color specified in the variant.
 * @param {string} framework - The name of the framework.
 * @returns {Array<{value: string, label: string}>}
 */
export const variantList = (framework: string) => {
  return (
    templates
      .find((f) => f.name === framework)
      ?.variant.map((variant) => ({
        value: variant.name,
        label: variant.color(variant.tag),
      })) || []
  );
};

/**
 * Returns a list of styles for a given framework, each with a value and a label.
 * The label is colored with the color specified in the style.
 * @param {string} framework - The name of the framework.
 * @returns {Array<{value: string, label: string}>}
 */
export const styleList = (framework: string) => {
  return (
    templates
      .find((f) => f.name === framework)
      ?.style?.map((style) => ({
        value: style.name,
        label: style.color(style.name),
      })) || []
  );
};

/**
 * Returns the type of the given framework.
 * The type is either "js" for JavaScript or "ts" for TypeScript.
 * @param {string} framework - The name of the framework.
 * @returns {string | undefined} The type of the framework, or undefined if the framework is not found.
 */
export const typeOfFramework = (framework: string) => {
  return templates.find((f) => f.name === framework)?.type;
};

/**
 * Returns a list of ORMs for a given framework, each with a value and a label.
 * @param {string} framework - The name of the framework.
 * @returns {Array<{value: string, label: string}>}
 */
export const ormList = (framework: string) => {
  return (
    templates
      .find((f) => f.name === framework)
      ?.database?.orm.map((orm) => ({
        value: orm,
        label: orm,
      })) || []
  );
};

/**
 * Returns a list of databases for a given framework, each with a value and a label.
 * @param {string} framework - The name of the framework.
 * @returns {Array<{value: string, label: string}>}
 */
export const databaseList = (framework: string) => {
  return (
    templates
      .find((f) => f.name === framework)
      ?.database?.database.map((db) => ({
        value: db,
        label: db,
      })) || []
  );
};
