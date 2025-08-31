# Basic datatypes

The most basic form of an expression are literals, such as:

```kestrel
// line comments begin with "//"

// values of type `Char`
'x'

// values of type `String`
"abc"

// values of type `Int`
42

// values of type `Float`
42.0
42.2
```

Other commonly used values are:

```kestrel
// Values of type `Bool`:
True
False

// `Unit`, the only value of type `Unit`:
Unit

// Tuples:
Tuple2("a", "b")
Tuple3("a", "b", "c")
// Tuples can be written using the tuple syntax:
("a", "b")
("a", "b", "c")
```

There are a bunch of pre-defined operators:

```kestrel
1 + 2 // => 3

// You have to use +. instead of + for floats:
1.5 +. 2.5 // => 4

"Hello " ++ "world" // => "Hello world"

!True // => False
True && False // => False
```

You can find all the available functions in the [`kestrel_core` module documentation](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core).
