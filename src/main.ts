// /src/main.ts

import { ModelFactory } from "./models/modelFactory.ts";
import { ModelNames } from "./enums/modelNames.ts";

let userResult = ModelFactory.createModel(
  ModelNames.UserModel,
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(userResult);

let loanResult = ModelFactory.createModel(
  ModelNames.LoanModel,
  {
    name: "Home Loan",
    maintenanceFee: "1000",
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(loanResult);

let userLoanResult = ModelFactory.createModel(
  ModelNames.UserLoanModel,
  {
    user: {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
    },
    loan: {
      name: "Home Loan",
      maintenanceFee: "1000",
    },
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(userLoanResult);

let headersResult = ModelFactory.createModel(
  ModelNames.RequestHeaderModel,
  {
    X_InstitutionNumber: 123,
    X_Token: "some-token",
    routingNumber: 456,
    clientType: "web",
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(headersResult);

let headerszResult = ModelFactory.createModel(
  ModelNames.RequestHeaderModel,
  {},
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(headerszResult);
