import path from "node:path";
import fs from "fs-extra";
import { packageList } from "./packageList";

export const renameFiles: Record<string, string | undefined> = {
  _gitignore: ".gitignore",
};

export type WriteFilesOptions = {
  src?: string;
  root: string;
  fileName: string;
  content?: string;
};

/**
 * Write a file to the given root directory.
 * If `content` is provided, writes that content to the file.
 * If `src` is provided, copies the file from `src` to `root`.
 * If `src` is not provided, does nothing if `content` is not provided.
 *
 * @param {string} options.src The source path to copy the file from
 * @param {string} options.root The root directory to write the file to
 * @param {string} options.fileName The name of the file to write
 * @param {string} [options.content] The content to write to the file
 */
export const writeFiles = async ({
  src,
  root,
  fileName,
  content,
}: WriteFilesOptions) => {
  const targetPath = path.join(root, renameFiles[fileName] ?? fileName);
  try {
    if (content) {
      const dirExists = await fs.pathExists(path.dirname(targetPath));
      if (!dirExists) {
        await fs.ensureDir(path.dirname(targetPath));
      }
      await fs.writeFile(targetPath, content);
    } else {
      if (!src) {
        return;
      }
      await fs.copy(path.join(src, fileName), targetPath);
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Prepend a line to a file.
 * @param {string} filePath The path to the file to modify
 * @param {string} newLine The line to prepend to the file
 */
export const prependLine = async (filePath: string, newLine: string) => {
  try {
    const existingContent = await fs.readFile(filePath, "utf8");
    const updatedContent = `${newLine}\n${existingContent}`;

    await fs.writeFile(filePath, updatedContent, "utf8");
  } catch (err) {
    console.error("Error:", err);
  }
};

/**
 * Adds the given packages to the package.json of the given root directory.
 * Will add or update the dependencies and/or devDependencies fields.
 * @param {string} rootDir The root directory of the project
 * @param {{ dependencies: string[] | undefined, devDependencies: string[] | undefined }} packages
 * The packages to add.
 */
export const addPackageToPackageJson = async (
  rootDir: string,
  packages: {
    dependencies?: string[];
    devDependencies?: string[];
  },
) => {
  const packageJsonPath = path.join(rootDir, "package.json");
  const packageJson = await fs.readJson(packageJsonPath);

  if (packages.dependencies) {
    packages.dependencies.forEach((dependency) => {
      if (packageList[dependency] && !packageJson.dependencies[dependency]) {
        packageJson.dependencies = {
          ...packageJson.dependencies,
          [dependency]: packageList[dependency],
        };
      }
    });
  }

  if (packages.devDependencies) {
    packages.devDependencies.forEach((devDependency) => {
      if (
        packageList[devDependency] &&
        !packageJson.devDependencies[devDependency]
      ) {
        packageJson.devDependencies = {
          ...packageJson.devDependencies,
          [devDependency]: packageList[devDependency],
        };
      }
    });
  }

  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
};
