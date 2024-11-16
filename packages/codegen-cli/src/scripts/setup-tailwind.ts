import fs from "fs-extra";
import { logger } from "../utils/logger";
import { execa } from "execa";
import { prependLine, writeFiles } from "../utils/io-util";
import * as styleTemplate from "../utils/style-template";

type FileDetails = {
  path?: string;
  fileName: string;
  content: string;
};

type TailwindConfigTemplates = {
  tailwindConfigTemplate: string;
  tailwindFileName: string;
  postcssConfigTemplate: string;
  postcssFileName: string;
};

type Variants = "ts" | "js";

const tailwindConfigMap: Record<Variants, TailwindConfigTemplates> = {
  js: {
    tailwindConfigTemplate: styleTemplate.TAILWIND_CONFIG_NEXT_JS,
    tailwindFileName: "tailwind.config.js",
    postcssConfigTemplate: styleTemplate.POSTCSS_CONFIG_NEXT_JS,
    postcssFileName: "postcss.config.js",
  },
  ts: {
    tailwindConfigTemplate: styleTemplate.TAILWIND_CONFIG_NEXT_TS,
    tailwindFileName: "tailwind.config.ts",
    postcssConfigTemplate: styleTemplate.POSTCSS_CONFIG_NEXT_MJS,
    postcssFileName: "postcss.config.mjs",
  },
};

const runFileOperationPipeLine = async (
  root: string,
  operations: FileDetails[],
  fileToRemoves: string[],
) => {
  // run all file operations
  for (const operation of operations) {
    await writeFiles({
      root: operation.path === undefined ? root : `${root}${operation.path}`,
      fileName: operation.fileName,
      content: operation.content,
    });
  }

  for (const fileToRemove of fileToRemoves) {
    await fs.remove(`${root}${fileToRemove}`);
  }
};

export async function setTailwindOnNextjs(rootDir: string, variant: string) {
  if (variant === "default") return;

  const {
    tailwindConfigTemplate,
    tailwindFileName,
    postcssConfigTemplate,
    postcssFileName,
  } = tailwindConfigMap[variant as Variants];

  const fileOperations: FileDetails[] = [
    {
      fileName: postcssFileName,
      content: postcssConfigTemplate,
    },
    {
      fileName: tailwindFileName,
      content: tailwindConfigTemplate,
    },
    {
      path: "/app",
      fileName: "globals.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    },
    {
      path: "/app",
      fileName: variant === "js" ? "page.jsx" : "page.tsx",
      content: styleTemplate.NEXT_PAGE_TAILWIND_CONTENT,
    },
  ];

  const fileToRemove = ["/app/page.module.css"];

  try {
    runFileOperationPipeLine(rootDir, fileOperations, fileToRemove);
  } catch (error) {
    logger.error(error);
  }
}

export async function setTailwindOnReact(rootDir: string, variant: string) {
  const { tailwindFileName, postcssConfigTemplate, postcssFileName } =
    tailwindConfigMap[variant as Variants];

  const fileOperations: FileDetails[] = [
    {
      fileName: postcssFileName,
      content: postcssConfigTemplate,
    },
    {
      fileName: tailwindFileName,
      content: styleTemplate.TAILWIND_CONFIG_REACT,
    },
    {
      path: "/src",
      fileName: "index.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    },
    {
      path: "/src",
      fileName: variant === "js" ? "App.jsx" : "App.tsx",
      content: styleTemplate.REACT_APP_PAGE,
    },
  ];

  const fileToRemove = ["/src/App.css"];
  try {
    runFileOperationPipeLine(rootDir, fileOperations, fileToRemove);
  } catch (error) {
    logger.error(error);
  }
}

export async function setTailwindOnVue(rootDir: string, variant?: string) {
  try {
    if (variant === "ts") {
      logger.info("Setting up tailwind on vue with typescript in ", rootDir);
      await execa("npx", ["tailwindcss", "init", "--ts", "-p"], {
        cwd: rootDir,
      });

      // await writeFiles({
      //   root: rootDir,
      //   fileName: "tailwind.config.ts",
      //   content: styleTemplate.TAILWIND_CONFIG_VUE_TS,
      // });
    } else {
      await execa("npx", ["tailwindcss", "init", "-p"], {
        cwd: rootDir,
      });

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
