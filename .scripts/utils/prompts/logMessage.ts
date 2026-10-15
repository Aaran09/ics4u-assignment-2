import { log } from "@clack/prompts";
import chalk, { type ChalkInstance } from "chalk";

export const logMessage = (
  prefix: string,
  prefixColor: keyof ChalkInstance = "white",
  msg: string,
  fgColor: keyof ChalkInstance = "white",
  bgColor?: keyof ChalkInstance,
) => {
  const styledPrefix = (chalk[prefixColor] as ChalkInstance).bold(`[${prefix}]`);
  const styledMsg = (chalk[fgColor] as ChalkInstance)(msg);

  const finalMsg = bgColor ? (chalk[bgColor] as ChalkInstance)(styledMsg) : styledMsg;

  log.info(`${styledPrefix} ${finalMsg}`);
};
