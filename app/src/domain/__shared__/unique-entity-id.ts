import { InvalidArgumentError } from 'src/__shared__/error/invalid-argument-error';

export abstract class UniqueEntityId {
  protected constructor(
    protected readonly value: string,
    private readonly _propForNominalTyping: string,
  ) {
    if (value === '') {
      throw new InvalidArgumentError('unique id must not to be empty.');
    }
  }

  public toString(): string {
    return this.value;
  }

  public isEqualTo(other: UniqueEntityId): boolean {
    return this.value === other.value;
  }
}
