# Language tour

Kestrel is a statically typed, pure, functional programming language that compiles to js. More specifically:

<!-- TODO code snippet examples -->

- **Statically typed**: Kestrel has a sound type system (program compiles => no runtime errors) with full type inference (you can write functions without having to annotate their parameters). Errors are modeled as data, thus they are tracked by the type system.
- **Pure**: Every function has no side effects, like mutation, or randomness, or IO. Side effects are modeled as data, thus they're tracked by the type system, and can be passed around and composed.
- **Functional**: Because of the previous point, there are no loops: recursion is the only looping construct. Functions are first-class values, and every construct (`if`, `match`, `fn`, etc) behaves like expression.

It's designed to be simple and minimal: you can learn the whole language in under one hour, and you can master it within a weekend.

<!-- TODO kestrel vs ... -->
