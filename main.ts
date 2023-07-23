// main.ts

import { ModelFactory } from "./utils/modelFactory.ts";
import { ModelNames } from "./enums/modelNames.ts";
import { Utils } from "./utils/utils.ts";
import { ErrorLogger } from "./utils/errorLogger.ts";
import { PaymentService } from "./transport/paymentService.ts";
import { APIRoutes } from "./enums/apiRoutes.ts";

const init = async () => {
  await ErrorLogger.init("./protected/errors.log");

  // Create a UserModel
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

  Utils.errorCheck(user);
  console.log(user);

  // Create a LoanModel
  let loan = ModelFactory.createModel(
    ModelNames.LoanModel,
    {
      name: "Home Loan",
      maintenanceFee: "1000",
    },
    { shouldCheckType: true, shouldCleanObject: true },
  );

  Utils.errorCheck(loan);
  console.log(loan);

  // Create a RequestHeaderModel
  let headers = ModelFactory.createModel(
    ModelNames.RequestHeaderModel,
    {
      X_InstitutionNumber: 123,
      X_Token: "some-token",
      routingNumber: "456",
    },
    { shouldCheckType: true, shouldCleanObject: true },
  );

  try {
    // Simulate API call
    const apiResponse = await PaymentService.submitCardPayment(
      APIRoutes.Payment.SubmitCardPayment,
      {
        user: user,
        loan: loan,
        headers: headers,
      },
    );

    // Log the API response
    console.log(apiResponse);
  } catch (error) {
    console.error(error);
    await ErrorLogger.log(error);
  }

  Utils.errorCheck(headers);
  console.log(headers);

  // Simulate API call
  const apiResponse = await PaymentService.submitCardPayment(
    APIRoutes.Payment.SubmitCardPayment, // now includes the base URL
    {
      user: user,
      loan: loan,
      headers: headers,
    },
  );

  // Log the API response
  console.log(apiResponse);
};

init();
