export const EXECUTE_METADATA_KEY = '__method:execute__';

export function Execute(): MethodDecorator {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(EXECUTE_METADATA_KEY, '', target, propertyKey);
  };
}
