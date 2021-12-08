---
name: 'value-object'
root: 'src/domain'
output: '*'
ignore: []
questions:
  value: 'Please enter value-object name.'
---

# `{{ inputs.value | kebab }}/model/{{ inputs.value | kebab }}.ts`

```typescript
import { ValueObject } from 'src/domain/__shared__/value-object';

type {{ inputs.value | pascal }}Props = {
};

export class {{ inputs.value | pascal }} extends ValueObject<{{ inputs.value | pascal }}Props> {
  public static create = (props: {{ inputs.value | pascal }}Props) => {}
}

```

# `{{ inputs.value | kebab }}/model/{{ inputs.value | kebab }}.spec.ts`

```typescript
import { {{ inputs.value | pascal }} } from './{{ inputs.value | kebab }}';

describe('{{ inputs.value | pascal }}', () => {
})

```

# `{{ inputs.value | kebab }}/service/query/.gitkepp`

```git config
```
