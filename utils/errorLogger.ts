import {
  appendFileSync,
  ensureFileSync,
} from "https://deno.land/std/fs/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";

export class ErrorLogger {
  static errorLogPath: string = join(Deno.cwd(), "/logs/errors.txt");

  static logError(errorMessage: string, errorList: string[]): void {
    // Ensure that the log file exists
    ensureFileSync(this.errorLogPath);

    // Prepare the error message string
    let errorLogString: string = `----------\nTimestamp: ${
      new Date().toISOString()
    }\nError Message: ${errorMessage}\n`;

    // Append each error in the error list to the error message string
    errorList.forEach((error) => {
      errorLogString += `Error: ${error}\n`;
    });

    // Write the error message string to the log file
    appendFileSync(this.errorLogPath, errorLogString);
  }
}
