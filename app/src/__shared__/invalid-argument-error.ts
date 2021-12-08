import { BaseCustomError } from './base-custom-error';

export class InvalidArgumentError extends BaseCustomError {
  constructor(public message: string) {
    super(message);
    // @see https://github.com/facebook/jest/issues/8279
    Object.setPrototypeOf(this, InvalidArgumentError.prototype);
  }
}
