# `let#` syntax

`let#` is a powerful syntax sugar that allows to rewrite this:

```kestrel
Mod.some_function(value, fn x {
  body
})
```

As the following:

```kestrel
{
  let#Mod.some_function x = value;
  body
}
```

You can chain multiple `let#` expressions.
This syntax is very useful in many situations, here are a couple of examples of idioms:

### `await`-like syntax

The `let#` syntax is useful to avoid deeply nested calls to `Task.await`, that might become something similar to callback hell:

For example, the following expressions:

```kestrel
let program: Task<Unit> =
  Task.await(IO.println("Enter you name"), fn _ {
    Task.await(IO.readline, fn name {
      IO.println("Hello " ++ name ++ "!")
    })
  })
```

Can be rewritten as:

```kestrel
{
  let#Task.await _ = IO.println("Enter your name");
  let#Task.await name = IO.readline;
  IO.println("Hello " ++ name ++ "!")
}
```

### Errors early exit (similar to rust's `?` sugar)

Since you don't have try-catch in Kestrel, errors have to be modelled as data, typically using the `Result` type.
This results in lots of `Result.and_then` chained call.

You can simplify this using `let#`:

```kestrel
let get_some_number: (String) -> Result<Int, String>
let get_data_by_id: (Int) -> Result<MyData, String>

// Inferred as `Result<MyData, String>`
let get_data = {
  let#Result.and_then int = get_some_number("example");
  let#Result.and_then my_data = get_some_number(int);
  Ok(my_data)
}
```

This is similar to writing the following rust code:

```kestrel
fn get_data() {
  let int = get_some_number("example")?;
  let my_data = get_some_number(int)?;
  Ok(my_data)
}
```

Like in rust, you might want to combine this with `Result.map_err` in case the results have a different error type.

You can apply a similar pattern in effectful computations using `Task.await_ok`, or to the `Option` type using `Option.and_then`.

### List comprehension

While, for simplicity's sake, Kestrel doesn't have an ad-hoc list comprehension syntax, you can use `let#` to archieve the same goal.

For example:

```kestrel
let comprehension = {
  let#List.flat_map x = [1, 2, 3];
  let#List.flat_map y = ['a', 'b'];
  let#List.guard _unit = x <= 2;
  [(x, y)]
}
```

Will yield `[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]`
