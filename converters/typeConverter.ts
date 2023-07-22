import { Utils } from "../utils/utils.ts";

export class TypeConverter {
  static dictionary: {
    [key: string]: (value: any, extraParam?: any) => any;
  } = {
    string: (value) => String(value),
    number: (value) => Number(value),
    boolean: (value) => Boolean(value),
    object: (value) => {
      if (Utils.getType(value) === "object") {
        return value;
      } else {
        throw new Error("The value is not an object");
      }
    },
    array: (value) => {
      if (Utils.getType(value) === "array") {
        return value;
      } else {
        throw new Error("The value is not an array");
      }
    },
    bigint: (value) => BigInt(value),
    date: (value) => new Date(value),
    currencyToUSD: (value) => {
      const conversionRateFromEURToUSD = 1.1;
      return value * conversionRateFromEURToUSD;
    },
    concatStrings: (value, delimiter = ",") => {
      if (!Array.isArray(value)) {
        throw new Error(
          "The value for a string concatenation must be an array of strings.",
        );
      }
      return value.join(delimiter);
    },
  };

  static convert(value: any, type: string, extraParam?: any): any {
    try {
      if (Utils.getType(value) === type) {
        return value;
      }

      const converter = this.dictionary[type];
      if (converter) {
        return converter(value, extraParam);
      } else {
        throw new Error(`Unknown or unsupported type: ${type}`);
      }
    } catch (err) {
      console.error(`Conversion to ${type} type failed`);
      return null;
    }
  }
}
