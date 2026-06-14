---
title: "TypeScript Tips for React Developers"
description: "Practical TypeScript patterns and techniques that will make your React code more robust and maintainable."
pubDate: 2026-05-28
tags: ["TypeScript", "React", "JavaScript"]
draft: false
---

TypeScript and React are a powerful combination. After using them together for years, here are my favorite patterns that strike the right balance between type safety and developer ergonomics.

## Prefer Interfaces for Object Shapes

While types and interfaces are largely interchangeable in TypeScript, interfaces have a few advantages when defining component props:

- They're faster for the compiler to check
- They merge declarations (useful for extending)
- Error messages are often clearer

```typescript
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
}
```

## Use Discriminated Unions for Complex State

When a component has multiple states, discriminated unions make impossible states impossible:

```typescript
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };
```

This forces you to handle every state explicitly — no more forgotten loading states.

## Generic Components

Make your components reusable with generics:

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

## `satisfies` Operator

The `satisfies` operator (available since TS 4.9) lets you validate types without widening:

```typescript
const config = {
  api: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} satisfies Record<string, string | number>;
```

## Conclusion

TypeScript doesn't have to be verbose or painful. Used thoughtfully, it catches bugs at compile time and serves as living documentation for your codebase.
