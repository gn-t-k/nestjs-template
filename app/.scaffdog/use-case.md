---
name: 'use-case'
root: 'src/use-case'
output: '*'
ignore: []
questions:
  value: 'Please enter use-case name.'
---

# `{{ inputs.value | kebab }}/index.ts`

```typescript
type Props = {
}

export class {{ inputs.value | pascal }} {
  // command, query, etc
  // public constructor (
  //   private readonly ,
  // ) {}
  public execute = async (props: Props) => {
  }
}
```

# `{{ inputs.value | kebab }}/index.spec.ts`

```typescript
import { {{ inputs.value | pascal }} } from '.';

describe('{{ inputs.value | pascal }}', () => {
})

```
