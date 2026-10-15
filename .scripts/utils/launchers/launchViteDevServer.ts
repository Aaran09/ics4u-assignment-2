import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import open from "open";
import { createServer } from "vite";
import { path } from "zx";
import { createTSWatcher, logMessage } from "#ics4u-assignment-scripts/utils";

export async function launchViteDevServer(root: string) {
  const viteDevServer = await createServer({
    clearScreen: false,
    envDir: process.cwd(),
    plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
    resolve: {
      alias: {
        "@ics4u-assignment-02": path.join(process.cwd(), "src"),
        "@ics4u-assignment-03": path.join(process.cwd(), "src"),
        "@ics4u-assignment-04": path.join(process.cwd(), "src"),
        "@ics4u-assignment-05": path.join(process.cwd(), "src"),
        "@ics4u-summative": path.join(process.cwd(), "src"),
      },
    },
    root,
    server: {
      host: "0.0.0.0",
      port: 5500,
    },
  });

  await viteDevServer.listen();
  await open("http://localhost:5500");

  logMessage("VITE", "magenta", "Vite server running.");
  viteDevServer.printUrls();

  const tsWatchServer = createTSWatcher();

  process.stdin.setRawMode(true);
  process.stdin.resume();

  return () => {
    process.stdin.setRawMode(false);
    process.stdin.pause();
    viteDevServer.close();
    tsWatchServer.close();
  };
}
