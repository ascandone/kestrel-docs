# Enums

> ⚠️ **NOTE:** the current syntax to define enums is still `type X { .. }`. This will be changed soon.

You can also create your own types, specifying its constructors:

```kestrel
enum MyType {
  A,
  B(Int, Int),
}
```

In addition to creating a type called `MyType`, we can also use its _constructors_:

```kestrel
// inferred as `MyType`
let x = A

// inferred as `MyType`
let y = B(0, 1)
```

> Note: unlike languages like Ocaml, constructors are first class values. For example, in this case, `B` is a function of type `(Int, Int) -> MyType`

Custom types can have generic args:

```kestrel
enum Box<a> {
  MakeBox(a),
}
```

## Notable types

There are a few types that are implemented as enums in the standard library instead of being built-in:

- [`Bool`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Bool)
- [`List`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/List), singly linked lists
- [`Unit`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Tuple#Unit), [`Tuple2`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Tuple#Tuple2), etc.
- [`Option`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Option), to represent optional values
- [`Result`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Result), to represent errors
