// /utils/errorLogger.ts

export class ErrorLogger {
  static readonly logFile = "./errors.log";

  static async log(error: string): Promise<void> {
    const encoder = new TextEncoder();
    const data = encoder.encode(`${new Date().toISOString()}: ${error}\n`);

    await Deno.writeFile(this.logFile, data, { append: true });
  }
}
