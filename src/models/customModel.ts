import { DefaultModel } from "./defaultModel";

export class CustomModel extends DefaultModel {
  constructor(rawData: any, options = {}) {
    const fields = {/* ... */};
    super(rawData, fields, {}, options);
  }
}
