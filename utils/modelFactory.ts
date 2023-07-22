import { DefaultModel } from "../models/defaultModel.ts";
import { UserModel } from "../models/userModel.ts";
import { LoanModel } from "../models/loanModel.ts";
import { UserLoanModel } from "../models/userLoanModel.ts";
import { RequestHeaderModel } from "../models/requestHeaderModel.ts";

export class ModelFactory {
  static modelDictionary: {
    [key: string]: new (...args: any[]) => DefaultModel;
  } = {
    UserModel,
    LoanModel,
    UserLoanModel,
    RequestHeaderModel,
  };

  static createModel(modelName: string, ...args: any[]) {
    const ModelClass = this.modelDictionary[modelName];
    if (!ModelClass) {
      throw new Error(`Model ${modelName} not found.`);
    }
    return new ModelClass(...args);
  }
}
