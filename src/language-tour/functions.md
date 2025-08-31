# Functions

You can create anonymous functions with the `fn` keyword:

```kestrel
fn x, y { x + y }
```

And call them using common function call syntax: `my_function(1, 2)`

Functions are first class citizen, therefore you can assign them to let declarations, pass them to other function or return from functions

Functions can have zero parameters as well:

```kestrel
fn { 42 }
```

but that should be pretty rare, as functions don't perform any side effects. You may still want to use zero-params functions for cases like lazy thunks

The compiler will warn you if you have unused parameters. To prevent that, you can use `_` or a parameter that begins with `_`:

```kestrel
fn _, _ { 42 }
```

This is true for every other kind of local variable.
