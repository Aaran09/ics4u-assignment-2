import { log } from "@clack/prompts";
import { chalk } from "zx";

export function showBanner(title: string, message?: string) {
  console.clear();
  log.info(chalk.bgGreen.white.bold(` >> ${title.toUpperCase()} << `));
  log.info(chalk.bgBlue.white(message || "Press Ctrl+C to go back"));
  console.log("");
}
