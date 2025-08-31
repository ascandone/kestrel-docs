# Let bindings

You can bind an expression to a variable using a `let` statements, so that it can be referenced by other expressions:

```kestrel
let x = 42

let y = x + 1
```

`let` declarations are immutable: they cannot be reassigned again (and they can only be defined once per module).

Since expressions have no side effects, you can order them however you want. In other words, you can also rewrite the previous example this way:

```kestrel
// it's completely legal to reference "x" before it's defined
let y = x + 1

let x = 42
```

## Type hints

> ⚠️ **NOTE:** Let bindings are currently still using the `let x: Type = ...` syntax.

You can optionally write explicit types for global let bindings:

```kestrel
@type (a, b) -> a
let take_first = fn a, b { a }
```

## Visibility

Let bindings are private by default. You can make them visible from the outside by using the `pub` modifier:

```kestrel
pub let my_value = // ..
```

## Local bindings

You can introduce (immutable) local bindings by creating a block using `{}`.

```kestrel
// evaluates to 1 + 10*10 == 101
let declaration = 1 + {
  let x = 10;
  x * x
}
```

Note that each let statement has to end with a `;`, whereas it's illegal for the returning expression to end with a `;`.

`let` expressions are immutable too, but can be shadowed:

```kestrel
let declaration = {
  let x = 0;
  let x = 1; // shadows the first "x"
  x // evaluates as "1"
}
```

Note that shadowing is not the same thing as mutation. You can see it more clearly within closures:

```kestrel
// this evaluates as 0, not 1.
let my_f = {
  let x = 0;
  let f = fn { x }
  let x = 1;
  f
} ()
```

Local bindings can also defined within the implicit blocks created by the `fn` or `if` expressions.
