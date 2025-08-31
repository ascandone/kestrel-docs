# If expressions

To branch programs, you can use `if` expressions:

```kestrel
if n == 0 {
  "zero"
} else {
  "not zero"
}
```

Unlike typescript, there's no concept of boolean casting: the tested value has to be a `Bool`. This prevents all the javascript quirks of complex implicit casting rule, and undesired false positives in typechecking.

You can nest if-else expressions using an `else if` syntax as well:

```kestrel
if n == 0 {
  "zero"
} else if n == 1 {
  "one"
} else {
  "not sure"
}
```

> ⚠️ **NOTE:** nested else-if sugar isn't implemented yet
