# Lists

> ⚠️ **NOTE:** this syntax is not yet available. Lists cons is currently using the `::` infix syntax.

Although lists are [defined](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/List#List) as normal enums, a more handy syntax is available:

```kestrel
[]
// is sugar for:
Nil

[1, 2, 3]
// is sugar for:
Cons(1, Cons(2, Cons(3, Nil)))


[1, 2, ..tl]
// is sugar for:
Cons(1, Cons(2, tl))
```

The same syntax is available in pattern matching. For example, that's one way we could define a `sum` function:

```kestrel
pub let sum = fn lst {
  match lst {
    [] => 0,
    [hd, ..tl] => 1 + sum(lst),
  }
}
```
