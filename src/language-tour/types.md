# Types

Concrete types must always begin with an uppercase letter (like `Int`, `Float`, or `String`). Type parameters are passed via angle brackets (e.g. `List<Int>`).

Tuples can be written using the special notation `(X, Y)` instead of `Tuple(X, Y)`.

Function types are written with the `(A, B) -> C` syntax.

Underscore types mean type variables. Unlike generics in languages like typescript, type variables are implicitly universally quantified.
For example, the type of the identity function is `(a) -> a`.

In the example above, `a` is a type variable that can be instantiated to any possible type, as long as every occurrence is instantiated to the same type. This is roughly the same as writing `<T>(x: T) => T` in typescript.
