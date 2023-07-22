// /src/utils/modelFactory.ts

import { exists, readDir } from "https://deno.land/std/fs/mod.ts";
import path from "https://deno.land/std/path/mod.ts";
import { ModelNames } from "../enums/modelNames.ts";
import { ModelOptions } from "../enums/modelOptions.ts";

export class ModelFactory {
  private static modelDictionary: Record<string, any> = {};

  public static async loadModels() {
    if (await exists("./models")) {
      for await (const dirEntry of readDir("./models")) {
        if (dirEntry.isFile) {
          const modelName = dirEntry.name.split(".")[0];
          const modelPath = path.resolve("./models", dirEntry.name);

          // Convert Windows-style paths to URL paths
          const modulePath = "file:///" + modelPath.replace(/\\/g, "/");

          const model = await import(modulePath);
          this.modelDictionary[modelName] = model.default;
        }
      }
    } else {
      throw new Error("Models directory not found.");
    }
  }

  public static createModel(
    modelName: ModelNames,
    data: any,
    options?: ModelOptions,
  ): any {
    const modelClass = this.modelDictionary[modelName];
    if (!modelClass) {
      throw new Error(`Model ${modelName} not found.`);
    }
    return new modelClass(data, options);
  }
}
