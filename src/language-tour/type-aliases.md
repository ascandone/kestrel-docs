# Type aliases

> ⚠️ **NOTE:** type aliases aren't implemented yet

You can implement nominal type alises using the `type` keyword:

```kestrel
type IntList = List<Int>
```

Type aliases can have type parameters as well:

```kestrel
type MyResult<a> = Result<a, MyError>
```
