import { DefaultModel, FieldTypes } from "./defaultModel.ts";

type int32 = number;

class ProblemDetail extends DefaultModel implements FieldTypes {
  errors: object;
  type: string;
  title: string;
  status: int32;
  detail: string;
  instance: string;

  constructor(rawData: any, options = {}) {
    const fields = {
      errors: "object",
      type: "string",
      title: "string",
      status: "number",
      detail: "string",
      instance: "string",
    };
    super(rawData, fields, {}, options);
  }
}

export { ProblemDetail };
