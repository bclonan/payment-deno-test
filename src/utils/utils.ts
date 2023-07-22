export class Utils {
    static freezeProperty(object: any, property: string): void {
      const descriptor = Object.getOwnPropertyDescriptor(object, property);
      if (descriptor && descriptor.configurable) {
        Object.defineProperty(object, property, { writable: false });
      }
    }
  
    static unfreezeProperty(object: any, property: string): void {
      const descriptor = Object.getOwnPropertyDescriptor(object, property);
      if (descriptor && !descriptor.configurable) {
        Object.defineProperty(object, property, { writable: true });
      }
    }
  
    static requireProperties(object: any, properties: Array<string>): void {
      properties.forEach((property) => {
        if (object[property] === undefined || object[property] === null) {
          throw new Error(`Property ${property} is required.`);
        }
      });
    }
  
    static getType(value: any): string {
      return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    }
  
    static checkType(
      value: any,
      type: string,
      key: string,
      shouldCheckType = false,
    ): void {
      const typeMapping: { [key: string]: string } = {
        string: "string",
        number: "number",
        boolean: "boolean",
        object: "object",
        array: "array",
        bigint: "bigint",
        date: "date",
        currencyToUSD: "number",
        concatStrings: "string",
      };
  
      const expectedType = typeMapping[type] || type;
  
      if (shouldCheckType && Utils.getType(value) !== expectedType) {
        throw new Error(
          `Invalid type for key ${key}, expected ${expectedType}, got ${
            Utils.getType(
              value,
            )
          }. Original value was ${value}`,
        );
      }
    }
  
    static cleanObject(object: any): any {
      let cleanedObject = { ...object };
      Object.keys(cleanedObject).forEach(
        (key) => cleanedObject[key] == null && delete cleanedObject[key],
      );
      return cleanedObject;
    }
  }
  