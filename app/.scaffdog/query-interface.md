---
name: 'query-interface'
root: 'src/domain'
output: '*/**/service/query'
ignore: []
questions:
  value: 'Please enter query name.'
---

# `{{ inputs.value | kebab }}-query.interface.ts`

```typescript
export const {{ inputs.value | constant }}_QUERY_TOKEN = '{{ inputs.value | constant }}_QUERY_TOKEN' as const;

export type I{{ inputs.value | pascal }}Query = {
  execute: () => Promise<>;
}

```
