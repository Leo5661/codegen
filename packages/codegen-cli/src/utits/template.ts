/**
 * Framework template definitions.
 *
 * This file defines a set of framework templates, each with a name, tag, color, and variants.
 * The templates are used to generate base framework-specific configurations and settings.
 *
 * @module template
 */

import colors from "picocolors"

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
  magentaBright
} = colors

export type ColorFunction = (str: string | number) => string
export type Framework = {
    name: string
    tag: string
    color: ColorFunction
    isBackend?: true | false 
    variant: FrameworkVarient[]
}

export type FrameworkVarient = {
    name: string
    tag: string
    color: ColorFunction
}

export const templates: Framework[] = [
    {
        name: 'next',
        tag: 'Next14',
        color: blueBright,
        isBackend: false,
        variant: [
            {
                name: 'default-next',
                tag: 'Default Next.js',
                color: blueBright
            }
        ]
    },
    {
        name: 'react',
        tag: 'React',
        color: cyanBright,
        isBackend: false,
        variant: [
            {
                name: 'react-ts',
                tag: 'TypeScript',
                color: blueBright
            },
            {
                name: 'react-js',
                tag: 'JavaScript',
                color: yellowBright
            }
        ]
    },
    {
        name: "node",
        tag: "Node",
        color: green,
        isBackend: true,
        variant: [
            {
                name: "node-ts",
                tag: "TypeScript",
                color: blueBright
            },
            {
                name: "node-js",
                tag: "JavaScript",
                color: yellowBright
            }
        ]
    }
]