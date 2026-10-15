import ts from "typescript";
import { path } from "zx";
import { logMessage } from "#ics4u-assignment-scripts/utils";

export function createTSWatcher() {
  const tsWatchServer = ts.createWatchProgram(
    ts.createWatchCompilerHost(
      path.join(process.cwd(), "tsconfig.json"),
      { noEmit: true },
      ts.sys,
      ts.createSemanticDiagnosticsBuilderProgram,
      (diagnostic) => {
        const message = ts.formatDiagnostic(diagnostic, {
          getCanonicalFileName: (fileName) => fileName,
          getCurrentDirectory: () => process.cwd(),
          getNewLine: () => "\n",
        });

        logMessage("TSC", "blue", message, "red");
      },
      (diagnostic, newLine) => {
        logMessage("TSC", "blue", ts.flattenDiagnosticMessageText(diagnostic.messageText, newLine));
      },
    ),
  );

  logMessage("TSC", "blue", "TypeScript watch mode started.");

  return tsWatchServer;
}
