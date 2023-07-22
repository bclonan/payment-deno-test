import { Utils } from "../utils/utils.ts";
import { TypeConverter } from "../converters/typeConverter.ts";

interface ModelOptions {
  shouldCheckType?: boolean;
  shouldCleanObject?: boolean;
}

interface FieldDefinitions {
  [key: string]: string | [string, any] | Function;
}

interface DefaultValues {
  [key: string]: any;
}

interface RawData {
  [key: string]: any;
}

export class DefaultModel {
  protected constructor(
    private rawData: RawData,
    private fields: FieldDefinitions,
    private defaultValues: DefaultValues = {},
    private options: ModelOptions = {},
  ) {
    // constructor logic moved to static method
  }

  static createInstance(
    rawData: RawData,
    fields: FieldDefinitions,
    defaultValues: DefaultValues = {},
    options: ModelOptions = {},
  ) {
    const instance = new DefaultModel(rawData, fields, defaultValues, options);
    const { shouldCheckType = false, shouldCleanObject = false } =
      instance.options;

    if (shouldCleanObject) {
      Utils.cleanObject(instance.rawData);
    }

    for (const field in instance.fields) {
      let fieldType = instance.fields[field];
      let extraParam = null;

      if (Array.isArray(fieldType)) {
        [fieldType, extraParam] = fieldType;
      }

      if (typeof fieldType === "function") {
        instance[field] = new fieldType(
          instance.rawData[field],
          instance.options,
        );
      } else {
        if (
          instance.rawData[field] === undefined &&
          instance.defaultValues[field] === undefined
        ) {
          return {
            success: false,
            message: `Missing required field: ${field}`,
          };
        }

        instance[field] = instance.rawData[field] !== undefined
          ? TypeConverter.convert(
            instance.rawData[field],
            fieldType,
            extraParam,
          )
          : instance.defaultValues[field];

        if (shouldCheckType) {
          Utils.checkType(instance[field], fieldType, field, shouldCheckType);
        }
      }
    }
    return {
      success: true,
      data: instance,
    };
  }
}
