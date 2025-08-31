<!-- TODO installation, code editor -->

## Creating a Kestrel project

Kestrel's cli is the unified tool to run, typecheck, build, format your kestrel projects, and more.

You can create an new Kestrel project using the `kestrel init` command.

You can run the typechecker over a Kestrel project using `kestrel check`

You can compile a Kestrel project using the `kestrel build` or run it on the fly using `kestrel run`.
To do that, you'll need to create a module exposing a value called `main` that has type `Task<Unit>`.

You can learn more about `Task`'s APIs in the [`Task` module documentation](https://kestrel-module-docs.vercel.app/ascandone/kestrel_core/Task)

Here's the classic hello world example:

```kestrel
import IO

pub let main = IO.println("Hello world!")
```
