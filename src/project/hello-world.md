# Hello world

We can use the the [`IO.println`](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/IO#println) function to display some text. But just calling the function won't really "do" anything. To actually execute side effects, we'll need to assign them to a publically exposed value called `main`, of type `Task<Unit>`:

```kestrel
import IO

pub let main = IO.println("Hello world!")
```
