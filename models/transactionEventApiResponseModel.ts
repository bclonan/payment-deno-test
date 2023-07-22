import { DefaultModel, FieldTypes } from "./defaultModel.ts";
import { TransactionEvent } from "./transactionEvent.ts";
import { StatusCode } from "../enums/statusCode.ts";

class TransactionEventApiResponse extends DefaultModel implements FieldTypes {
  statusCode: StatusCode;
  message: string;
  value: TransactionEvent;

  constructor(rawData: any, options = {}) {
    const fields = {
      statusCode: "enum",
      message: "string",
      value: "object",
    };
    super(rawData, fields, {}, options);
  }
}

export { TransactionEventApiResponse };
