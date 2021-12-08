---
name: 'nest-module'
root: 'src/nest-module'
output: '*'
ignore: []
questions:
  value: 'Please enter module name.'
---

# `{{ inputs.value | kebab }}/{{ inputs.value | kebab }}.controller.ts`

```typescript
import {
  Controller,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InvalidArgumentError } from 'src/__shared__/invalid-argument-error';
import { {{ inputs.value | pascal }}Service } from './{{ inputs.value | kebab }}.service';

@Controller('{{ inputs.value | kebab }}')
export class {{ inputs.value | pascal }}Controller {
  public constructor(private readonly {{ inputs.value | camel }}Service: {{ inputs.value | pascal }}Service) {}

  // write request/response, try/catch
  // reference: https://docs.nestjs.com/controllers

  private handleError = (error: unknown) => {
    if (error instanceof InvalidArgumentError) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    } else {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };
}

```

# `{{ inputs.value | kebab }}/{{ inputs.value | kebab }}.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { {{ inputs.value | pascal }}Controller } from './{{ inputs.value | kebab }}.controller';
import { {{ inputs.value | pascal }}Service } from './{{ inputs.value | kebab }}.service';

@Module({
  controllers: [{{ inputs.value | pascal }}Controller],
  providers: [
    {{ inputs.value | pascal }}Service,
    PrismaService,
    // inject dependencies
    // {
    //   useClass: ,
    //   provide: ,
    // },
  ],
})
export class {{ inputs.value | pascal }}Module {}

```

# `{{ inputs.value | kebab }}/{{ inputs.value | kebab }}.service.ts`

```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class {{ inputs.value | pascal }}Service {
  public constructor(
    // inject dependence
    // @Inject( )
    // private readonly ,
  ) {}

  // write process with use-case class
}

```

# `{{ inputs.value | kebab }}/dto/.gitkeep`

```git config
```
