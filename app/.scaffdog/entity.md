---
name: 'entity'
root: 'src/domain'
output: '*'
ignore: []
questions:
  value: 'Please enter entity name.'
---

# `{{ inputs.value | kebab }}/model/{{ inputs.value | kebab }}.ts`

```typescript
import { Entity } from 'src/domain/__shared__/entity';
import { {{ inputs.value | pascal }}Id } from './{{ inputs.value | kebab }}-id';

type {{ inputs.value | pascal }}Props = {
};
type CreateProps = Pick<{{ inputs.value | pascal }}Props, >;
type ReconstructProps = {{ inputs.value | pascal }}Props & { id: string };

export class {{ inputs.value | pascal }} extends Entity<{{ inputs.value | pascal }}Props, {{ inputs.value | pascal }}Id> {
  public static create = (props: CreateProps) => {}

  public static reconstruct = (props: ReconstructProps) => {}
}

```

# `{{ inputs.value | kebab }}/model/{{ inputs.value | kebab }}-id.ts`

```typescript
import { UniqueEntityId } from 'src/domain/__shared__/unique-entity-id';
import { v4 as uuid } from 'uuid';

export class {{ inputs.value | pascal }}Id extends UniqueEntityId {
  private constructor(value: string) {
    super(value, '{{ inputs.value | pascal }}Id');
  }

  public static create = () => new {{ inputs.value | pascal }}Id(uuid());

  public static reconstruct = (value: string) => new {{ inputs.value | pascal }}Id(value);
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
