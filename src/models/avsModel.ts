import { DefaultModel, FieldTypes } from "./defaultModel";

class AVS extends DefaultModel implements FieldTypes {
  street1!: string;
  street2!: string;
  city!: string;
  state!: string;
  zip!: string;

  constructor(rawData: any, options = {}) {
    const fields = {
      street1: "string",
      street2: "string",
      city: "string",
      state: "string",
      zip: "string",
    };
    super(rawData, fields, {}, options);
  }
}

export { AVS };
