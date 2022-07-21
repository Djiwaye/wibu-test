class ArrayManager {
  static singletonArray: string[] = [];
}

export function setStaticArray(value: string[]): void {
  ArrayManager.singletonArray = value;
}

export function getStaticArray(): string[] {
  return ArrayManager.singletonArray;
}
