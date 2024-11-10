#!/usr/bin/env node

import { Command } from "commander";
import { getPackageInfo } from "@/src/utils/get-package-info";
import { init } from "./commands/init";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  process.title = "codegen";
  // console.log("process id is " + process.pid);
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("codegen")
    .description(
      "Node CLI to create base structure with all configurations for fast development",
    )
    .version(
      packageInfo.version || "0.0.1",
      "-v, --version",
      "Display the current version",
    );

  program.addCommand(init);

  program.parse();
}

main();
