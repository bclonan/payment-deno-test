import { DefaultModel } from "./defaultModel.ts";
import { UserModel } from "./userModel.ts";
import { LoanModel } from "./loanModel.ts";
import { UserLoanModel } from "./userLoanModel.ts";
import { RequestHeaderModel } from "./requestHeaderModel.ts";

export class ModelFactory {
  static modelDictionary: {
    [key: string]: typeof DefaultModel; // Use 'typeof DefaultModel' to denote class type
  } = {
    UserModel,
    LoanModel,
    UserLoanModel,
    RequestHeaderModel,
  };

  static createModel(modelName: string, ...args: any[]) {
    const ModelClass = this.modelDictionary[modelName];
    if (!ModelClass) {
      return {
        success: false,
        message: `Model ${modelName} not found.`,
      };
    }
    return ModelClass.createInstance(...args);
  }
}
