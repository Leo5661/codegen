#!/usr/bin/env node

import { Command } from "commander"
import {Header} from "@/src/header"
import {getPackageInfo} from "@/src/utits/get-package-info"


process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
    Header();

    const packageInfo = await getPackageInfo()

    const program = new Command()
    .name("codegen")
    .description("Node CLI to create base structure with all configurations for fast development")
    .version(
        packageInfo.version || "0.0.1",
        "-v, --version",
        "Display the current version",
    )

    program.parse()
}

main()
