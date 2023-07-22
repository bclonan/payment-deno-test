// /src/utils/currencyUtils.ts

export const toCurrency = (
  n: number | bigint,
  curr: any,
  LanguageFormat = undefined,
) =>
  Intl.NumberFormat(LanguageFormat, { style: "currency", currency: curr })
    .format(n);
