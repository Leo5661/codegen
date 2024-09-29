#!/usr/bin/env node

import { Command } from "commander";
import { getPackageInfo } from "@/src/utits/get-package-info";
import { init } from "./commands/init";

async function main() {
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
