import { DefaultModel, FieldTypes } from "./defaultModel.ts";

type int64 = number;

class TransactionEvent extends DefaultModel implements FieldTypes {
  gpsTransactionId: int64;

  constructor(rawData: any, options = {}) {
    const fields = {
      gpsTransactionId: "number",
    };
    super(rawData, fields, {}, options);
  }
}

export { TransactionEvent };
