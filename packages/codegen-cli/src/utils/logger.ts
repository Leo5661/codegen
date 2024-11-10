import pc from "picocolors";

export const logger = {
  error(...args: unknown[]) {
    console.log(pc.red("✖ Error"), ...args);
  },
  warn(...args: unknown[]) {
    console.log(pc.yellow("⚠ Warning"), ...args);
  },
  info(...args: unknown[]) {
    console.log(pc.cyan("info"), ...args);
  },
  success(...args: unknown[]) {
    console.log(pc.green("✔ Success"), ...args);
  },
  lineBreak() {
    console.log("");
  },
};
