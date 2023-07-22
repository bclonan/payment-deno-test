// /src/main.ts

import { ModelFactory } from "./models/modelFactory.ts";
import { ModelNames } from "./enums/modelNames.ts";

let user = ModelFactory.createModel(
  ModelNames.UserModel,
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(user);

let loan = ModelFactory.createModel(
  ModelNames.LoanModel,
  {
    name: "Home Loan",
    maintenanceFee: 1000,
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(loan);

let userLoan = ModelFactory.createModel(
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
      maintenanceFee: 1000,
    },
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(userLoan);

let headers = ModelFactory.createModel(
  ModelNames.RequestHeaderModel,
  {
    X_InstitutionNumber: 123,
    X_Token: "some-token",
    routingNumber: 456,
    clientType: "web",
  },
  { shouldCheckType: true, shouldCleanObject: true },
);

console.log(headers);
