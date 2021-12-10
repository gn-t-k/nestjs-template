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
import { Controller } from '@nestjs/common';
import { handleError } from 'src/__shared__/error/handle-error';
import { {{ inputs.value | pascal }}Service } from './{{ inputs.value | kebab }}.service';

@Controller('{{ inputs.value | kebab }}')
export class {{ inputs.value | pascal }}Controller {
  public constructor(private readonly {{ inputs.value | camel }}Service: {{ inputs.value | pascal }}Service) {}

  // write request/response, try/catch
  // reference: https://docs.nestjs.com/controllers

```

# `{{ inputs.value | kebab }}/{{ inputs.value | kebab }}.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/nest-module/prisma.service';
import { {{ inputs.value | pascal }}Controller } from './{{ inputs.value | kebab }}.controller';
import { {{ inputs.value | pascal }}Service } from './{{ inputs.value | kebab }}.service';

@Module({
  controllers: [{{ inputs.value | pascal }}Controller],
  providers: [
    // Be careful not to forget the "@Injectable" decorator.
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
