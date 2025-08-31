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

<!-- TODO prelude -->

<!-- TODO moduledoc -->
