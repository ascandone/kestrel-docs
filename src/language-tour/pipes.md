# Pipe operator

The pipe (`|>`) operator is a syntax sugar to avoid nested function calls.

`a |> f(x, y)` is desugared as `f(a, x, y)` from the compiler

Pipe calls can be nested, e.g. `f(g(arg, x1, x2), y1)` is the same as:

```fs
arg
|> g(x1, x2)
|> f(y1)
```
