# Traits

<!-- TODO update to new specs -->

Kestrel extends the Hindley-Milner type system with a lightweight version of traits. Each type variable can be associated with one or more named traits, defining constraints for that variables.
Defined traits are built-in and not extensible by the users, nor parametric.

Built-in traits are currently: `Show` (used to represent a value that can be converted to a human-readable string), `Eq` (used for values that can have equality), `Ord` (used for values which can be compared)

```kestrel
let show: Fn(a) -> String where a: Show

// the following is valid, because Int implements Show
show(42)

// the following is not, because Fn() -> Int doen't
show(fn { 0 })
```

Primitive values (`Int`, `Float`, `String` and `Char`) implement all those traits.
Implementation is derived for union types whose constructors' arguments implement some trait, or for structs whose fields implement some trait. For example:

```kestrel
// this type implements Show
type Bool { True, False }

// this type implements show if 'a' implements Show
type Option<a> { None, Some(a) }
```
