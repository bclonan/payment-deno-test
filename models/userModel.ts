import { DefaultModel } from "./defaultModel.ts";

export class UserModel extends DefaultModel {
  constructor(rawData: any, options = {}) {
    const fields = {
      id: "number",
      first_name: "string",
      last_name: "string",
      email: "string",
    };
    super(rawData, fields, {}, options);
  }
}
