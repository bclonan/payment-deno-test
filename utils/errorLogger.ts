// /utils/errorLogger.ts

export class ErrorLogger {
  static logFile: string = "../protected/errors.log";

  static async log(error: string): Promise<void> {
    const encoder = new TextEncoder();
    const data = encoder.encode(`${new Date().toISOString()}: ${error}\n`);

    await Deno.writeFile(this.logFile, data, { append: true }).catch((err) => {
      console.error(`Error writing log: ${err}`);
    });
  }
}
