import { DefaultModel } from "./defaultModel.ts";
import { UserModel } from "./userModel.ts";
import { LoanModel } from "./loanModel.ts";

export class UserLoanModel extends DefaultModel {
  constructor(rawData: any, options = {}) {
    const fields = {
      user: UserModel,
      loan: LoanModel,
    };
    super(rawData, fields, {}, options);
  }
}
