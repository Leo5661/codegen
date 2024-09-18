import path from "path";
import fs from "fs-extra"
import { fileURLToPath } from 'url';
import { type PackageJson } from "type-fest";
import { logger } from "./logger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export async function getPackageInfo() {
    // logger.info("Script is running... with dir: ", path.join(rootDir, "package.json"));
    const packageJsonPath = path.join(rootDir, "package.json")
    
    return fs.readJSONSync(packageJsonPath) as PackageJson
}