#!/usr/bin/env zx

import { outro, select, text } from "@clack/prompts";
import { $, chalk } from "zx";
import { launchViteDevServer, showBanner, stopService } from "#ics4u-assignment-scripts/utils";

(async () => {
  while (true) {
    showBanner(`WELCOME ${process.env.GITHUB_USER || "Student"}!`, "MAIN MENU");

    const choice = await select({
      message: "Select an option:",
      options: [
        { label: "📝 Run Assignment", value: "run" },
        { label: "🔎 Type Check Code", value: "type" },
        { label: "🧹 Format Code", value: "format" },
        { label: "🔤 Spell Check Code", value: "spell-check" },
        { label: "🗑️  Delete Dependencies", value: "delete" },
        { label: "📦 Install Dependencies", value: "install" },
        { label: "🚪 Exit", value: "exit" },
      ],
    });

    switch (choice) {
      case "run":
        await stopService(() => launchViteDevServer(process.cwd()));
        break;
      case "type":
        await $({ stdio: "inherit" })`npm run type-check`;
        await text({ message: chalk.green("Type check complete. Press Enter to return to the menu...") });
        break;
      case "format":
        await $({ stdio: "inherit" })`npm run format`;
        await text({ message: chalk.green("Code formatted. Press Enter to return to the menu...") });
        break;
      case "spell-check":
        await $({ stdio: "inherit", nothrow: true })`npm run spell-check`;
        await text({ message: chalk.green("Spell check complete. Press Enter to return to the menu...") });
        break;
      case "delete": {
        await $({ stdio: "inherit" })`npm run delete`;
        await text({ message: chalk.green("Dependencies deleted. Press Enter to return to the menu...") });
        break;
      }
      case "install": {
        await $({ stdio: "inherit" })`npm install`;
        await text({ message: chalk.green("Dependencies installed. Press Enter to return to the menu...") });
        break;
      }
      default:
        outro(`GOODBYE, ${process.env.GITHUB_USER || "Student"}!`);
        return;
    }
  }
})();
