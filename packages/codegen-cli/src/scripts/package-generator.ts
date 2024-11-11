import path from "node:path";
import fs from "fs-extra";
import { PromtConfig } from "../commands/init";
import { fileURLToPath } from "node:url";
import { writeFiles } from "../utils/io-util";
import { pkgFromUserAgent } from "../utils/get-package-info";
import { logger } from "../utils/logger";
import { setupStyle } from "./setup-style";
import { setupDatabase } from "./setup-database";

const cwd = process.cwd();

export const generatePackage = async (results: PromtConfig) => {
  const {
    projectName,
    framework,
    variant,
    style,
    isORM,
    orm,
    database,
    onConfirm,
  } = results;

  const root = path.join(cwd, projectName);

  //TODO add option to ask package manager

  try {
    await fs.mkdirs(root);
  } catch (error) {
    logger.error(error);
  }

  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../../templates/",
    `template-${framework}-${variant}`,
  );

  console.log("template dir:- ", templateDir);

  const files = fs.readdirSync(templateDir);

  for (const file of files.filter((f) => f !== "package.json")) {
    writeFiles({
      src: templateDir,
      root,
      fileName: file,
    });
  }

  // TODO add to include custom dependencies
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(templateDir, "package.json"), "utf-8"),
    );
    packageJson.name = projectName;

    await writeFiles({
      root,
      fileName: "package.json",
      content: JSON.stringify(packageJson, null, 2) + "\n",
    });
  } catch (error) {
    logger.error(error);
  }

  if (style) {
    await setupStyle(root, framework, variant, style);
  }

  if (isORM) {
    await setupDatabase(root, framework, variant, orm, database);
  }
};
