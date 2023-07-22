import { DefaultModel, FieldTypes } from "./defaultModel.ts";
import { WebIdentifier } from "./webIdentifier.ts";
import { MiscellaneousFee } from "./miscellaneousFee.ts";
import { Fee } from "./fee.ts";
import { RequestIdType } from "../enums/requestIdType.ts";
import { PaymentApplication } from "../enums/paymentApplication.ts";
import { ContactMethod } from "../enums/contactMethod.ts";

type int64 = number;

class TokenPayment extends DefaultModel implements FieldTypes {
  ivrIdentifier: string;
  cimIdentifier: string;
  webIdentifier: WebIdentifier;
  requestId: string;
  requestIdType: RequestIdType;
  loanAccount: string;
  amount: number;
  fees: MiscellaneousFee[];
  thirdPartyFee: Fee;
  processingFee: Fee;
  paymentApplication: PaymentApplication;
  contactMethod: ContactMethod;
  cardProfileId: int64;

  constructor(rawData: any, options = {}) {
    const fields = {
      ivrIdentifier: "string",
      cimIdentifier: "string",
      webIdentifier: "object",
      requestId: "string",
      requestIdType: "enum",
      loanAccount: "string",
      amount: "number",
      fees: "object",
      thirdPartyFee: "object",
      processingFee: "object",
      paymentApplication: "enum",
      contactMethod: "enum",
      cardProfileId: "number",
    };
    super(rawData, fields, {}, options);
  }
}

export { TokenPayment };
