import path from "node:path";
import fs from "fs-extra";
import { PromtConfig } from "../commands/init";
import * as promt from "@clack/prompts";
import { fileURLToPath } from "node:url";
import { execa } from "execa";
import { writeFiles } from "../utits/io-util";
import { pkgFromUserAgent } from "../utits/get-package-info";
import { logger } from "../utits/logger";

const cwd = process.cwd();

export const generatePackage = async (results: PromtConfig) => {
  const { projectName, framework, variant, style, isORM, orm, onConfirm } =
    results;

  const root = path.join(cwd, projectName);

  // USER package manager

  const packageManagerInfo = pkgFromUserAgent(
    process.env.npm_config_user_agent,
  );
  const packageManager = packageManagerInfo?.name ?? "npm";

  // create project dir
  try {
    await fs.mkdirs(root);
  } catch (error) {
    logger.error(error);
  }

  // create base for framework or copy from preBuilt template for framework

  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../../src/templates",
    `template-${framework}-${variant}`,
  );

  // copy template
  const files = fs.readdirSync(templateDir);

  for (const file of files.filter((f) => f !== "package.json")) {
    writeFiles({
      src: templateDir,
      root,
      fileName: file,
    });
  }

  // update package.json
  // TODO add to include custom dependencies
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(templateDir, "package.json"), "utf-8"),
    );
    packageJson.name = projectName;

    writeFiles({
      root,
      fileName: "package.json",
      content: JSON.stringify(packageJson, null, 2) + "\n",
    });
  } catch (error) {
    logger.error(error);
  }

  // if onConfirm is true, install dependencies

  if (onConfirm) {
    const newDir = path.join(cwd, projectName);
    process.chdir(newDir);
    await execa`${packageManager} install`;
  }

  let nextSteps = `cd ${projectName}        \n${onConfirm ? "" : `${packageManager} install\n`}${packageManager} dev`;

  promt.note(nextSteps, "🎉 Next steps.");
};
