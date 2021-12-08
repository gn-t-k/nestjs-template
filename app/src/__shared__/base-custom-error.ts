export class BaseCustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
    Object.setPrototypeOf(this, BaseCustomError.prototype);
  }

  public static isMyInstance(e: Error): boolean {
    return this.name === e.name;
  }
}
