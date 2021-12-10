---
name: 'command-interface'
root: 'src/domain'
output: '*/**/service/command'
ignore: []
questions:
  value: 'Please enter command name.'
---

# `{{ inputs.value | kebab }}-command.interface.ts`

```typescript
export const {{ inputs.value | constant }}_COMMAND_TOKEN = '{{ inputs.value | constant }}_COMMAND_TOKEN' as const;

export type I{{ inputs.value | pascal }}Command = {
  execute: () => Promise<void>;
}

```
