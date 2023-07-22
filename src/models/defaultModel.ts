export class DefaultModel {
  public originalData: RawData;
  public rawData: RawData;
  public formattedData: RawData = {};
  public warnings: string[] = [];
  public encryptedData: string;

  protected constructor(
    private fields: FieldDefinitions,
    private defaultValues: DefaultValues = {},
    private options: ModelOptions = {},
  ) {}

  static createInstance(
    rawData: RawData,
    fields: FieldDefinitions,
    defaultValues: DefaultValues = {},
    options: ModelOptions = {},
  ) {
    const instance = new DefaultModel(fields, defaultValues, options);
    const { shouldCheckType = false, shouldCleanObject = false } =
      instance.options;

    instance.originalData = JSON.parse(JSON.stringify(rawData));

    if (shouldCleanObject) {
      rawData = Utils.cleanObject(rawData);
    }

    instance.rawData = rawData;

    for (const field in instance.fields) {
      let fieldType = instance.fields[field];
      let extraParam = null;

      if (Array.isArray(fieldType)) {
        [fieldType, extraParam] = fieldType;
      }

      if (typeof fieldType === "function") {
        instance.formattedData[field] = new fieldType(
          rawData[field],
          instance.options,
        );
      } else {
        if (
          rawData[field] === undefined &&
          instance.defaultValues[field] === undefined
        ) {
          return {
            success: false,
            message: `Missing required field: ${field}`,
            instance,
          };
        }

        const convertedValue = rawData[field] !== undefined
          ? TypeConverter.convert(rawData[field], fieldType, extraParam)
          : instance.defaultValues[field];

        if (shouldCheckType && convertedValue !== null) {
          Utils.checkType(convertedValue, fieldType, field);
        }

        instance.formattedData[field] = convertedValue;
      }
    }

    instance.encryptedData = btoa(JSON.stringify(instance.formattedData));

    return {
      success: true,
      data: instance,
    };
  }
}
