import { isCancel, text } from "@clack/prompts";
import chalk from "chalk";

type StopFunction = () => void | Promise<void>;
type StartFunction = () => Promise<StopFunction>;

export async function stopService(startFn: StartFunction): Promise<void> {
  const stopProcess: StopFunction = await startFn();

  const action = await text({
    message: chalk.red("Press Ctrl-C or Enter to stop."),
  });

  if (action === "" || isCancel(action)) {
    await stopProcess();
  }

  process.stdout.write("\u001b[2J\u001b[H");
}
