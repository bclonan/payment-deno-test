import { DefaultModel, FieldTypes } from "./defaultModel.ts";

type int32 = number;

export class RequestHeaderModel extends DefaultModel {
  constructor(rawData: any, options = {}) {
    const fields = {
      X_InstitutionNumber: "number",
      X_Token: "string",
      routingNumber: "string",
      clientType: "string",
    };
    super(rawData, fields, {}, options);
  }
}
