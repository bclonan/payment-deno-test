# Deno Starter

This is a Deno project running on Docker in Codesandbox.

Add your [configuration](https://codesandbox.io/docs/projects/learn/setting-up/tasks) to optimize it for [CodeSandbox](https://codesandbox.io/p/dashboard).

## Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs/projects)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)


## Api Endpoints

Here's a brief overview of the described API endpoints for the GoldPoint Beta API library.

**Payment API Routes**

1. `POST /paymentapi/api/v1/Payment/PrePaymentCheck`
   - Check if a payment can be made to a loan account.

2. `POST /paymentapi/api/v1/Payment/SubmitCardPayment`
   - Submit a credit card payment for a loan account.

3. `POST /paymentapi/api/v1/Payment/SubmitTokenPayment`
   - Submit a payment using a payment profile token.

4. `POST /paymentapi/api/v1/Payment/SubmitAchPayment`
   - Submit an ACH payment on a loan account.

5. `POST /paymentapi/api/v1/Payment/SubmitAchProfilePayment`
   - Submit an ACH payment using a payment profile.

6. `POST /paymentapi/api/v1/Payment/SubmitCashAndOrCheckPayment`
   - Submit a cash and/or check payment.

7. `POST /paymentapi/api/v1/Payment/GetLoanPaymentDetails`
   - Get loan balance and due payment information.

8. `POST /paymentapi/api/v1/Payment/AccountRestrictionCheck`
   - Check if a loan account has any restrictions preventing payment.

9. `POST /paymentapi/api/v1/Payment/GetFeeInfo`
   - Get convenience and/or third-party fee information.

**Payment History API Routes**

1. `POST /paymentapi/api/v1/PaymentHistory/GetPaymentHistory`
   - Get a filtered list of payment history.

**Profile API Routes**

1. `POST /paymentapi/api/v1/Profile/CreateCardProfile`
   - Create a payment profile for credit card payments.

2. `POST /paymentapi/api/v1/Profile/GetCardProfiles`
   - Look up card information associated with a profile.

3. `POST /paymentapi/api/v1/Profile/CreateAchProfile`
   - Create a payment profile for ACH payments.

4. `POST /paymentapi/api/v1/Profile/GetAchProfiles`
   - Look up ACH profile information.

5. `POST /paymentapi/api/v1/Profile/GetRoutingVerification`
   - Get routing number verification.

**Utilities API Routes**

1. `GET /paymentapi/api/v1/Utilities/Ping`
   - Test API availability.

These API endpoints collectively allow for comprehensive management of payments, profile creation, and retrieval of loan account information.
