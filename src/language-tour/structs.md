# Structs

> ⚠️ **NOTE:** the current syntax to define structs is still `type X struct { .. }`. This will be changed soon.

You can also define, create and manipulate structs:

```kestrel
// First, you need to define the type
struct Person {
  name: String,
  age: Int,
}

// you can then instantiate it:
let p = Person {
  name: "John Doe",
  age: 42
}

// you can access fields of a struct:
let age = p.age

// and you can perform immutable updates using the spread syntax:
let older_person = Person {
  age: p.age + 1,
  ..p
}
```

Structs can have type parameters:

```kestrel
struct Box<a> {
  inner: a,
}
```

<!-- TODO field inference -->

## Optional fields

> ⚠️ **NOTE:** optional fields aren't implemented yet.

You can use the `?` modifier on a struct definition to make it optional:

```kestrel
struct Person {
  name: String,
  age?: Int,
}

// this way, you can omit the `age` field
let p = Person {
  name: "John Doe",
}

// inferred as: `Option<Int>`
let age = p.age

// you can still pass the field normally:
let p2 = Person {
  name: "John Doe",
  age: 42,
}
```

In case you need to dynamically decide not, whether to pass the value or, you can use the `?` modifier to pass an [`Option`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Option#Option):

```kestrel
let p = Person {
  age?: Some(42),
  // ..
}
```

## Visibility

Structs are private by default. You can use the `pub` modifier to make them visibile from the outside:

```kestrel
// Make the `St` type visible on the outside - but not the fields.
pub struct St {
  // ..
}

// Make both the type and the fields visible on the outside
pub(..) struct St {
  // ..
}
```
