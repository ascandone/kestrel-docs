# Modules

<!-- TODO idioms -->

Creating a file implicitly creates a module whose the namespace is the file's path.

You can import values and types of different modules with `import` statements, that must appear first in the module.

```kestrel
import MyModule
// Now you can use the MyModule.some_value syntax to access to
// `some_value` defined in MyModule
// You can also access types and constructors
```

Imports can be unqualified too:

```kestrel
import MyModule.{some_value, MyType(..)}
// this adds to the scope:
// the `some_value` value
// the `MyType` type
// `MyType` constructors (because of the `(..)`)
```

You can import nested modules using the `import My/Nested/Module` syntax

<!-- TODO "as" renaming -->

<!-- TODO prelude -->

<!-- TODO moduledoc -->

## Visibility

Both values and types are module-private by default. You can use the `pub` modifier to make them visible from other modules:

```kestrel
pub let my_value = // ..

pub type MyAlias = // ..

pub enum MyEnum {
  // ..
}

pub struct MyStruct {
  // ..
}
```

In the case of `enum`s and `struct`s, just using `pub` will not expose the underlying implementation (the fields or the costructors). You can expose that using the `pub(..)` visibility:

```kestrel
pub(..) enum MyEnum {
  // ..
}
pub(..) struct MyStruct {
  // ..
}
```
