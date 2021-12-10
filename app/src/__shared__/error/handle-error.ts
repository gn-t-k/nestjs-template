import { HttpException, HttpStatus } from '@nestjs/common';
import { InvalidArgumentError } from './invalid-argument-error';
import { ResourceNotFoundError } from './resource-not-found-error';

export const handleError = (error: unknown) => {
  throw error instanceof InvalidArgumentError
    ? new HttpException(error.message, HttpStatus.BAD_REQUEST)
    : error instanceof ResourceNotFoundError
    ? new HttpException(error.message, HttpStatus.NOT_FOUND)
    : new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
};
