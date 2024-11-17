import fs from "fs-extra";
import { DatabaseType, ORMType, StyleProps } from "../utils/template";
import { logger } from "../utils/logger";
import { execa } from "execa";
import {
  addPackageToPackageJson,
  prependLine,
  writeFiles,
} from "../utils/io-util";
import * as databaseTemplate from "../utils/database-template";

const cwd = process.cwd();

type FrameworkDatabaseMap = {
  [framework: string]: {
    [orm: string]: (
      rootDir: string,
      framework: string,
      database: DatabaseType,
      variant: string,
    ) => Promise<void>;
  };
};

export const setupDatabase = async (
  rootDir: string,
  framework: string,
  variant: string,
  orm: ORMType,
  database: DatabaseType,
) => {
  try {
    const frameworkDatabaseMap: FrameworkDatabaseMap = {
      next: {
        Prisma: setupWithPrisma,
        Drizzle: setupWithDrizzle,
      },
      node: {
        Prisma: setupWithPrisma,
        Drizzle: setupWithDrizzle,
      },
      remix: {
        Prisma: setupWithPrisma,
        Drizzle: setupWithDrizzle,
      },
    };

    const setupDatabase = frameworkDatabaseMap[framework]?.[orm];

    if (!setupDatabase) {
      throw new Error("Invalid ORM or database");
    }

    await setupDatabase(rootDir, framework, database, variant);
  } catch (error) {
    logger.error("Error in setting database", error);
  }

  // if (orm === "Prisma") {
  //   await execa("npm", ["install", "-D", "prisma"], {
  //     cwd: rootDir,
  //   });
  //   await setupWithPrisma(rootDir, framework, database, variant);
  // } else if (orm === "Drizzle") {
  //   await setupWithDrizzle(rootDir, framework, database);
  // }
};

async function setupWithPrisma(
  rootDir: string,
  framework: string,
  database: DatabaseType,
  variant: string,
) {
  try {
    await addPackageToPackageJson(rootDir, {
      devDependencies: ["prisma"],
    });

    if (database === "Postgres") {
      await execa(
        "npx",
        ["prisma", "init", "--datasource-provider", "mongodb"],
        {
          cwd: rootDir,
        },
      );

      if (variant !== "js") {
        await writeFiles({
          root: `${rootDir}/lib`,
          fileName: "utils.ts",
          content: databaseTemplate.PRISMA_DB_UTIL_TS,
        });
      } else {
        await writeFiles({
          root: `${rootDir}/lib`,
          fileName: "utils.js",
          content: databaseTemplate.PRISMA_DB_UTIL_JS,
        });
      }

      const packageJson = JSON.parse(
        fs.readFileSync(`${rootDir}/package.json`, "utf8"),
      );

      packageJson.scripts["db:migrate"] =
        "npx prisma migrate dev --name '${npm_config_name}";
      packageJson.scripts["db:push"] = "npx prisma db push";
      packageJson.scripts["db:gen"] = "npx prisma generate";
      packageJson.scripts["db:ui"] = "npx prisma studio";

      await writeFiles({
        root: rootDir,
        fileName: "package.json",
        content: JSON.stringify(packageJson, null, 2),
      });

      // await execa("npx", ["prisma", "generate"]);
    }
  } catch (error) {
    logger.error(error);
  }
}

async function setupWithDrizzle(
  rootDir: string,
  framework: string,
  database: DatabaseType,
) {
  try {
  } catch (error) {
    logger.error(error);
  }
}
