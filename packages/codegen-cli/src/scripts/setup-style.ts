import fs from "fs-extra";
import { StyleProps } from "../utits/template";
import { logger } from "../utits/logger";
import { execa } from "execa";
import { prependLine, writeFiles } from "../utits/io-util";
import * as styleTemplate from "../utits/style-template";

// const explorer = cosmiconfigSync("tailwind.config.js");

const cwd = process.cwd();

export const setupStyle = async (
  rootDir: string,
  framework: string,
  variant: string,
  style: StyleProps,
) => {
  if (framework === "next" && style === "Tailwind") {
    setTailwindOnNextjs(rootDir, variant);
  } else if (framework === "react" && style === "Tailwind") {
    setTailwindOnReact(rootDir, variant);
  } else if (framework === "vue" && style === "Tailwind") {
    setTailwindOnVue(rootDir, variant);
  } else if (framework === "rn" && style === "NativewindCSS") {
    setNativewindOnExpo(rootDir);
  }
};

async function setTailwindOnNextjs(rootDir: string, variant: string) {
  let tailwindConfigTemplate: string;
  let tailwindFileName: string;
  let postcssFileName: string;
  let postcssConfigTemplate: string;
  if (variant === "js") {
    // tailwind
    tailwindConfigTemplate = styleTemplate.TAILWIND_CONFIG_NEXT_JS;
    tailwindFileName = "tailwind.config.js";

    // postcss
    postcssConfigTemplate = styleTemplate.POSTCSS_CONFIG_NEXT_JS;
    postcssFileName = "postcss.config.js";
  } else {
    // tailwind
    tailwindConfigTemplate = styleTemplate.TAILWIND_CONFIG_NEXT_TS;
    tailwindFileName = "tailwind.config.ts";

    // postcss
    postcssConfigTemplate = styleTemplate.POSTCSS_CONFIG_NEXT_MJS;
    postcssFileName = "postcss.config.mjs";
  }

  try {
    process.chdir(rootDir);
    await execa("npm", [
      "install",
      "-D",
      "tailwindcss",
      "postcss",
      "autoprefixer",
    ]);

    await execa("npx", ["tailwindcss", "init", "-p"]);

    // update postcss and tailwind
    await writeFiles({
      root: rootDir,
      fileName: postcssFileName,
      content: postcssConfigTemplate,
    });

    await writeFiles({
      root: rootDir,
      fileName: tailwindFileName,
      content: tailwindConfigTemplate,
    });

    // update global css

    await writeFiles({
      root: `${rootDir}/app`,
      fileName: "globals.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    });

    if (variant === "js") {
      await writeFiles({
        root: `${rootDir}/app`,
        fileName: "page.js",
        content: styleTemplate.NEXT_PAGE_TAILWIND_CONTENT,
      });
    } else {
      await writeFiles({
        root: `${rootDir}/app`,
        fileName: "page.tsx",
        content: styleTemplate.NEXT_PAGE_TAILWIND_CONTENT,
      });
    }

    // remove unneeded files

    await fs.remove(`${rootDir}/app/page.module.css`);
  } catch (error) {
    logger.error(error);
  }
}

async function setTailwindOnReact(rootDir: string, variant: string) {
  try {
    process.chdir(rootDir);
    await execa("npm", [
      "install",
      "-D",
      "tailwindcss",
      "postcss",
      "autoprefixer",
    ]);

    await execa("npx", ["tailwindcss", "init", "-p"]);

    // update tailwind

    await writeFiles({
      root: rootDir,
      fileName: "tailwind.config.js",
      content: styleTemplate.TAILWIND_CONFIG_REACT,
    });

    // update index css

    await writeFiles({
      root: `${rootDir}/src`,
      fileName: "index.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    });

    // update react components

    if (variant === "js") {
      await writeFiles({
        root: `${rootDir}/src`,
        fileName: "main.jsx",
        content: styleTemplate.REACT_MAIN_PAGE,
      });

      await writeFiles({
        root: `${rootDir}/src`,
        fileName: "page.jsx",
        content: styleTemplate.REACT_APP_PAGE,
      });
    } else {
      await writeFiles({
        root: `${rootDir}/app`,
        fileName: "main.tsx",
        content: styleTemplate.REACT_MAIN_PAGE,
      });

      await writeFiles({
        root: `${rootDir}/src`,
        fileName: "page.tsx",
        content: styleTemplate.REACT_APP_PAGE,
      });
    }

    // remove unneeded files

    await fs.remove(`${rootDir}/src/App.css`);
  } catch (error) {
    logger.error(error);
  }
}

async function setTailwindOnVue(rootDir: string, variant: string) {
  try {
    process.chdir(rootDir);

    await execa("npm", [
      "install",
      "-D",
      "tailwindcss",
      "postcss",
      "autoprefixer",
    ]);

    if (variant === "ts") {
      await execa("npx", ["tailwindcss", "init", "--ts", "-p"]);

      await writeFiles({
        root: rootDir,
        fileName: "tailwind.config.ts",
        content: styleTemplate.TAILWIND_CONFIG_VUE_TS,
      });
    } else {
      await execa("npx", ["tailwindcss", "init", "-p"]);

      await writeFiles({
        root: rootDir,
        fileName: "tailwind.config.js",
        content: styleTemplate.TAILWIND_CONFIG_VUE_JS,
      });
    }

    // update index css

    await writeFiles({
      root: `${rootDir}/src`,
      fileName: "style.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    });

    // update vue components

    await writeFiles({
      root: `${rootDir}/src`,
      fileName: "App.vue",
      content: styleTemplate.VUE_APP_PAGE,
    });
  } catch (error) {
    logger.error(error);
  }
}

async function setNativewindOnExpo(rootDir: string) {
  try {
    process.chdir(rootDir);

    /* TODO: Update Nativewind as of now using nativewind v2.x and tailwindcss v3.3.2
     *  as nativewind v4.x get into stable we will use tailwindcss@latest with expo.
     */

    // install dependencies
    await execa("npm", [
      "nativewind@^4.0.1",
      "react-native-reanimated",
      "tailwindcss",
    ]);

    // if OS is mac run pod install
    if (process.platform === "darwin") {
      await execa("npx", ["pod-install"]);
    }

    // update tailwind
    await writeFiles({
      root: rootDir,
      fileName: "tailwind.config.js",
      content: styleTemplate.NATIVEWIND_TAILWIND_CONFIG,
    });

    // update global css
    await prependLine(`${rootDir}/global.css`, 'import "../global.css"');

    // for typeScript support
    await writeFiles({
      root: rootDir,
      fileName: "nativewind-env.d.ts",
      content: styleTemplate.NATIVEWIND_ENV_D_TS,
    });
  } catch (error) {
    logger.error(error);
  }
}
