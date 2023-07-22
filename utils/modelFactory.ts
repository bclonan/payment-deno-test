import { DefaultModel } from "../models/defaultModel.ts";
import { UserModel } from "../models/userModel.ts";
import { LoanModel } from "../models/loanModel.ts";
import { UserLoanModel } from "../models/userLoanModel.ts";
import { RequestHeaderModel } from "../models/requestHeaderModel.ts";
import { ErrorLogger } from "../utils/errorLogger.ts";

export class ModelFactory {
  static modelDictionary: {
    [key: string]: new (...args: any[]) => DefaultModel;
  } = {
    UserModel,
    LoanModel,
    UserLoanModel,
    RequestHeaderModel,
  };

  static async createModel(modelName: string, ...args: any[]) {
    const ModelClass = this.modelDictionary[modelName];
    if (!ModelClass) {
      throw new Error(`Model ${modelName} not found.`);
    }
    let model = new ModelClass(...args);
    if (model.errors && model.errors.length > 0) {
      for (const error of model.errors) {
        await ErrorLogger.log(error);
      }
      delete model.errors;
    }
    return model;
  }
}
