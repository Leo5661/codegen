import fs from "fs-extra";
import { logger } from "../utils/logger";
import { execa } from "execa";
import { prependLine, writeFiles } from "../utils/io-util";
import * as styleTemplate from "../utils/style-template";

export async function setTailwindOnNextjs(rootDir: string, variant?: string) {
  let tailwindConfigTemplate: string;
  let tailwindFileName: string;
  let postcssFileName: string;
  let postcssConfigTemplate: string;
  if (variant === "js") {
    tailwindConfigTemplate = styleTemplate.TAILWIND_CONFIG_NEXT_JS;
    tailwindFileName = "tailwind.config.js";
    postcssConfigTemplate = styleTemplate.POSTCSS_CONFIG_NEXT_JS;
    postcssFileName = "postcss.config.js";
  } else {
    tailwindConfigTemplate = styleTemplate.TAILWIND_CONFIG_NEXT_TS;
    tailwindFileName = "tailwind.config.ts";
    postcssConfigTemplate = styleTemplate.POSTCSS_CONFIG_NEXT_MJS;
    postcssFileName = "postcss.config.mjs";
  }

  try {
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

    await fs.remove(`${rootDir}/app/page.module.css`);
  } catch (error) {
    logger.error(error);
  }
}

export async function setTailwindOnReact(rootDir: string, variant?: string) {
  try {
    await execa("npx", ["tailwindcss", "init", "-p"]);

    await writeFiles({
      root: rootDir,
      fileName: "tailwind.config.js",
      content: styleTemplate.TAILWIND_CONFIG_REACT,
    });

    await writeFiles({
      root: `${rootDir}/src`,
      fileName: "index.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    });

    if (variant === "js") {
      await writeFiles({
        root: `${rootDir}/src`,
        fileName: "App.jsx",
        content: styleTemplate.REACT_APP_PAGE,
      });
    } else {
      await writeFiles({
        root: `${rootDir}/src`,
        fileName: "App.tsx",
        content: styleTemplate.REACT_APP_PAGE,
      });
    }

    await fs.remove(`${rootDir}/src/App.css`);
  } catch (error) {
    logger.error(error);
  }
}

export async function setTailwindOnVue(rootDir: string, variant?: string) {
  try {
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

    await writeFiles({
      root: `${rootDir}/src`,
      fileName: "style.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    });

    await writeFiles({
      root: `${rootDir}/src`,
      fileName: "App.vue",
      content: styleTemplate.VUE_APP_PAGE,
    });

    await writeFiles({
      root: `${rootDir}/src/components`,
      fileName: "HelloWorld.vue",
      content: styleTemplate.VUE_HELLOWORLD_PAGE,
    });
  } catch (error) {
    logger.error(error);
  }
}

export async function setNativewindOnExpo(rootDir: string) {
  try {
    /* TODO: Update Nativewind as of now using nativewind v2.x and tailwindcss v3.3.2
     *  as nativewind v4.x get into stable we will use tailwindcss@latest with expo.
     */

    // if OS is mac run pod install
    if (process.platform === "darwin") {
      await execa("npx", ["pod-install"]);
    }

    await writeFiles({
      root: rootDir,
      fileName: "tailwind.config.js",
      content: styleTemplate.NATIVEWIND_TAILWIND_CONFIG,
    });

    await prependLine(`${rootDir}/global.css`, 'import "../global.css"');

    await writeFiles({
      root: rootDir,
      fileName: "nativewind-env.d.ts",
      content: styleTemplate.NATIVEWIND_ENV_D_TS,
    });
  } catch (error) {
    logger.error(error);
  }
}
