import fs from "fs-extra";
import { logger } from "../utils/logger";
import { execa } from "execa";
import {
  addPackageToPackageJson,
  prependLine,
  writeFiles,
} from "../utils/io-util";
import * as styleTemplate from "../utils/style-template";

type FileDetails = {
  path?: string;
  fileName: string;
  content: string;
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
    if (fs.existsSync(`${root}${fileToRemove}`)) {
      await fs.remove(`${root}${fileToRemove}`);
    }
  }
};

export async function setTailwindOnNextjs(rootDir: string, variant: string) {
  if (variant === "default") return;

  const {
    tailwindConfigTemplate,
    tailwindFileName,
    postcssConfigTemplate,
    postcssFileName,
  } =
    styleTemplate.tailwindConfigMap["next"][variant as styleTemplate.Variants];

  const fileOperations: FileDetails[] = [
    {
      fileName: postcssFileName!,
      content: postcssConfigTemplate!,
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

  const fileToRemove = ["/app/page.module.css", "/app/page.js"];

  try {
    await runFileOperationPipeLine(rootDir, fileOperations, fileToRemove);
  } catch (error) {
    logger.error(error);
  }
}

export async function setTailwindOnReact(rootDir: string, variant: string) {
  logger.info(
    "Setting up tailwind on React. This may take a few minutes depending on your system.",
  );
  const { tailwindFileName, postcssConfigTemplate, postcssFileName } =
    styleTemplate.tailwindConfigMap["react"][variant as styleTemplate.Variants];

  const fileOperations: FileDetails[] = [
    {
      fileName: postcssFileName!,
      content: postcssConfigTemplate!,
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
    await runFileOperationPipeLine(rootDir, fileOperations, fileToRemove);
  } catch (error) {
    logger.error(error);
  }
}

export async function setTailwindOnVue(rootDir: string, variant?: string) {
  const {
    tailwindConfigTemplate,
    tailwindFileName,
    postcssConfigTemplate,
    postcssFileName,
  } = styleTemplate.tailwindConfigMap["vue"][variant as styleTemplate.Variants];

  const fileOperations: FileDetails[] = [
    {
      fileName: postcssFileName!,
      content: postcssConfigTemplate!,
    },
    {
      fileName: tailwindFileName,
      content: tailwindConfigTemplate,
    },
    {
      path: "/src",
      fileName: "style.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    },
    {
      path: "/src",
      fileName: "App.vue",
      content: styleTemplate.VUE_APP_PAGE,
    },
    {
      path: "/src/components",
      fileName: "HelloWorld.vue",
      content: styleTemplate.VUE_HELLOWORLD_PAGE,
    },
  ];

  try {
    await runFileOperationPipeLine(rootDir, fileOperations, []);
  } catch (error) {
    logger.error(error);
  }
}

export async function setNativewindOnExpo(rootDir: string) {
  try {
    /* TODO: Update Nativewind as of now using nativewind v2.x and tailwindcss v3.3.2
     *  as nativewind v4.x get into stable we will use tailwindcss@latest with expo.
     */

    await addPackageToPackageJson(rootDir, {
      devDependencies: ["nativewind", "tailwindcss"],
    });

    // if OS is mac run pod install
    if (process.platform === "darwin") {
      await execa("npx", ["pod-install"]);
    }

    await writeFiles({
      root: rootDir,
      fileName: "tailwind.config.js",
      content: styleTemplate.NATIVEWIND_TAILWIND_CONFIG,
    });

    await writeFiles({
      root: rootDir,
      fileName: "global.css",
      content: styleTemplate.TAILWIND_GLOBAL_CSS,
    });

    await writeFiles({
      root: rootDir,
      fileName: "babel.config.js",
      content: styleTemplate.NATIVEWIND_BABEL_CONFIG_jS,
    });

    await writeFiles({
      root: rootDir,
      fileName: "metro.config.js",
      content: styleTemplate.NATIVEWIND_METRO_CONFIG_JS,
    });

    await prependLine(`${rootDir}/app/_layout.tsx`, 'import "../global.css"');

    await writeFiles({
      root: rootDir,
      fileName: "nativewind-env.d.ts",
      content: styleTemplate.NATIVEWIND_ENV_D_TS,
    });
  } catch (error) {
    logger.error(error);
  }
}
