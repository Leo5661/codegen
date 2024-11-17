import { addPackageToPackageJson } from "../utils/io-util";
import { StyleProps } from "../utils/template";
import {
  setNativewindOnExpo,
  setTailwindOnNextjs,
  setTailwindOnReact,
  setTailwindOnVue,
} from "./setup-tailwind";
import { logger } from "../utils/logger";

const cwd = process.cwd();

type FrameworkStyleMap = {
  [framework: string]: {
    [style: string]: (rootDir: string, variant: string) => Promise<void>;
  };
};

export const setupStyle = async (
  rootDir: string,
  framework: string,
  variant: string,
  style: StyleProps,
) => {
  try {
    await addPackageToPackageJson(rootDir, {
      devDependencies: ["tailwindcss", "postcss", "autoprefixer"],
    });

    const frameworkStyleMap: FrameworkStyleMap = {
      next: {
        Tailwind: setTailwindOnNextjs,
      },
      react: {
        Tailwind: setTailwindOnReact,
      },
      vue: {
        Tailwind: setTailwindOnVue,
      },
      rn: {
        NativewindCSS: setNativewindOnExpo,
      },
    };

    const setStyle = frameworkStyleMap[framework]?.[style];

    if (!setStyle) {
      throw new Error(`Invalid style: ${style}`);
    }

    await setStyle(rootDir, variant);
  } catch (error) {
    logger.error("error in setting style: ", error);
  }
};
