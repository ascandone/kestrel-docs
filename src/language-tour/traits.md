# Traits

Traits are type constraints that define common behaviour.

A trait definition consists in a series of values declarations, where exactly one type variable is bound to a trait constraint:

```kestrel
trait Show {
  @type (a) -> String where a: Show
  let show
}
```

> ⚠️ **NOTE:** it's not possible to create user-defined traits yet. Currently built-in traits are: `Show`, `Eq`, `Cmp` and `Ord`.

Named types can then define their specialized implementation of each trait:

```kestrel
impl Show for List<a> where a: Show {
  let show = fn lst {
    // .. implementation
  }
}
```

You can then use the function defined in a trait with the values that implement it:

```kestrel
// the following is valid, because Int implements Show
show(42)

// the following is not, because `() -> Int` doesn't
show(fn { 0 })
```

Traits constraints are inferred automatically:

```kestrel
// inferred as: `(a) -> String where a: Show`
let my_fn = fn a {
  show(a)
}
```

but can also be specified manually with type hints:

```kestrel
@type (a) -> String where a: Show
let my_fn = // ..
```

## Ambiguous check

Unlike interfaces of object oriented languages, traits are resolved during typechecking, not at runtime. You can see traits as implicitly passed arguments, resolved statically.
As a consequence, in order not to have an ill-typed program, each trait boundary must appear in the top-level type, whether that's automatically inferred, or manually specified.
For example, it's not possible to write the following:

```txt
// doesn't compile!
let ill_typed_fn = fn x {
  let _ = fn a { show(a) };
  x + 1
}
```

On the other hand, this means it's possible to write things that wouldn't be possible with interfaces based on runtime informations:

```kestrel
@type (String) -> Maybe<a> where a: FromJson
let parse = // ..

@type Maybe<List<Int>>
let my_value = parse("[1, 2, 3]")
```

<!-- TODO default resolution -->

## Deriving

Some traits can be derived automatically by the compiler:

```kestrel
@deriving(Eq, Show, Cmp)
pub(..) type Some<a> {
  Some(a),
  None,
}
```

This will automatically create a trait implementation of the given traits

> ⚠️ **NOTE:** it's not possible to create user-defined traits implementations yet. You can only automatically derive (without the `@derive` annotation)
