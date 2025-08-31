# Pattern matching

Pattern matching is a fundamental construct, which allows to "deconstruct" values by making sure every possible variant is checked.

You can pattern match values using the `match` expression:

```kestrel
match value {
  None => "no values",
  Some(value) => "value is: " ++ value
}
```

The compiler will make sure we won't forget to check every possible combination.

<!-- TODO explain tuples -->

Pattern match supports nested patterns, catchall patterns (`_`), and matching literals, e.g.

```kestrel
match (n % 3, n % 5) {
  (0, 0) => "FizzBuzz",
  (0, _) => "Fizz",
  (_, 0) => "Buzz",
  _ => String.from_int(n),
}
```

You can also use pattern matching in every other local binding context:

```kestrel
// blocks
{
  let Box(value) = f(),
  value
}

// fn params
fn Box(value) { value }
```

The compiler, however, will complain if the match is not exhaustive (for example, there is more than one constructor).
