import { DefaultModel } from "./defaultModel.ts";

export class LoanModel extends DefaultModel {
  constructor(rawData: any, options = {}) {
    const fields = {
      name: "string",
      maintenanceFee: "number",
    };
    super(rawData, fields, {}, options);
  }
}
