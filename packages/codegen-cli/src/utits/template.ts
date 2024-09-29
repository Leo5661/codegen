/**
 * Framework template definitions.
 *
 * This file defines a set of framework templates, each with a name, tag, color, and variants.
 * The templates are used to generate base framework-specific configurations and settings.
 *
 * @module template
 */

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
};

export type FrameworkVariant = {
  name: string;
  tag: string;
  color: ColorFunction;
};

export type FrameworkStyle = {
  name: string;
  tag: string;
  color: ColorFunction;
};

export const templates: Framework[] = [
  {
    name: "next",
    tag: "Next14",
    color: blueBright,
    type: "fullstack",
    variant: [
      {
        name: "ts",
        tag: "Default Next.js",
        color: blueBright,
      },
    ],
  },
  {
    name: "react",
    tag: "React",
    color: cyanBright,
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
        name: "css",
        tag: "CSS",
        color: blue,
      },
      {
        name: "scss",
        tag: "SCSS",
        color: yellow,
      },
      {
        name: "tailwind",
        tag: "TailwindCSS",
        color: blueBright,
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
  },
];
