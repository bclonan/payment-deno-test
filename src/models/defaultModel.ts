import { Utils } from "../utils/utils.ts";
import { TypeConverter } from "../converters/typeConverter.ts";

interface ModelOptions {
  shouldCheckType?: boolean;
  shouldCleanObject?: boolean;
}

export class DefaultModel {
  [key: string]: any;

  constructor(
    rawData: any,
    fields: any,
    defaultValues: any = {},
    options: ModelOptions = {},
  ) {
    const { shouldCheckType = false, shouldCleanObject = false } = options;

    if (shouldCleanObject) {
      Utils.cleanObject(rawData);
    }

    for (const field in fields) {
      let fieldType = fields[field];
      let extraParam = null;

      if (Array.isArray(fieldType)) {
        [fieldType, extraParam] = fieldType;
      }

      if (typeof fieldType === "function") {
        this[field] = new fieldType(rawData[field], options);
      } else {
        this[field] = rawData[field] !== undefined
          ? TypeConverter.convert(rawData[field], fieldType, extraParam)
          : defaultValues[field];

        Utils.checkType(this[field], fieldType, field, shouldCheckType);
      }
    }
  }
}
