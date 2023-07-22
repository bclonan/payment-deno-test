import { DefaultModel } from "./defaultModel.ts";

export class UserModel extends DefaultModel {
  static namespaces = ["payment", "shared"];

  constructor(
    rawData: any,
    fields: any,
    defaultValues: any = {},
    options: ModelOptions = {},
  ) {
    super(rawData, fields, defaultValues, options);
  }
}
