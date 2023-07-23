// /enums/apiRoutes.ts

import { baseUrl } from "./baseURL.ts";

export const APIRoutes = {
  Payment: {
    PrePaymentCheck: `${baseUrl}/paymentapi/api/v1/Payment/PrePaymentCheck`,
    SubmitCardPayment: `${baseUrl}/paymentapi/api/v1/Payment/SubmitCardPayment`,
    SubmitTokenPayment:
      `${baseUrl}/paymentapi/api/v1/Payment/SubmitTokenPayment`,
    SubmitAchPayment: `${baseUrl}/paymentapi/api/v1/Payment/SubmitAchPayment`,
    SubmitAchProfilePayment:
      `${baseUrl}/paymentapi/api/v1/Payment/SubmitAchProfilePayment`,
    SubmitCashAndOrCheckPayment:
      `${baseUrl}/paymentapi/api/v1/Payment/SubmitCashAndOrCheckPayment`,
    GetLoanPaymentDetails:
      `${baseUrl}/paymentapi/api/v1/Payment/GetLoanPaymentDetails`,
    AccountRestrictionCheck:
      `${baseUrl}/paymentapi/api/v1/Payment/AccountRestrictionCheck`,
    GetFeeInfo: `${baseUrl}/paymentapi/api/v1/Payment/GetFeeInfo`,
  },
  PaymentHistory: {
    GetPaymentHistory:
      `${baseUrl}/paymentapi/api/v1/PaymentHistory/GetPaymentHistory`,
  },
  Profile: {
    CreateCardProfile: `${baseUrl}/paymentapi/api/v1/Profile/CreateCardProfile`,
    GetCardProfiles: `${baseUrl}/paymentapi/api/v1/Profile/GetCardProfiles`,
    CreateAchProfile: `${baseUrl}/paymentapi/api/v1/Profile/CreateAchProfile`,
    GetAchProfiles: `${baseUrl}/paymentapi/api/v1/Profile/GetAchProfiles`,
    GetRoutingVerification:
      `${baseUrl}/paymentapi/api/v1/Profile/GetRoutingVerification`,
  },
  Utilities: {
    Ping: `${baseUrl}/paymentapi/api/v1/Utilities/Ping`,
  },
};
