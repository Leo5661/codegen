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
  },
];
