import { DefaultModel } from "./defaultModel.ts";
import { UserModel } from "./userModel.ts";
import { LoanModel } from "./loanModel.ts";
import { UserLoanModel } from "./userLoanModel.ts";
import { RequestHeaderModel } from "./requestHeaderModel.ts";

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
