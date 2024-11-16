import { debug } from "node:console";
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

  d(...args: unknown[]) {
    if (process.env.NODE_ENV === "production") return;
    console.log(pc.bgMagenta("debug: "), ...args);
  },
};
