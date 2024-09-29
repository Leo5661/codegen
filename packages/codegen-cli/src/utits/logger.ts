import pc from "picocolors";

export const logger = {
  error(...args: unknown[]) {
    console.log(pc.red("✖"), ...args);
  },
  warn(...args: unknown[]) {
    console.log(pc.yellow("⚠"), ...args)
  },
  info(...args: unknown[]) {
    console.log(pc.cyan("i"), ...args)
  },
  success(...args: unknown[]) {
    console.log(pc.green("✔"), ...args)
  },
  lineBreak() {
    console.log("")
  },
}