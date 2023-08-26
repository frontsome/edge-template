# Edge Template

## The problem

Edge functions (Vercel, Netlify, Cloudflare Workers) are a great way to serve your code close to your end users. However, with edge functions you lose access to the file system, making it harder to use traditional template engines. Edge Template works around this issue by **compiling your templates to native ES-modules**. After compilation, you can just import your templates into any Edge function.

## Universal rendering
Because ES-modules are compatible with any javascript environment, you can use the same template for sever-side rendering, pre-rendering, edge rendering ánd client-side rendering. This makes them truly isomorphic.

## How to use

1. first (pre)compile you template to esm. Typically you'd do this during your build step:

```js
import edge from "@frontsome/edge-template"
import * as fs from "fs"

// compile
let compiledEsm = await edge.compile("<h1>${data.title}</h1>", "esm"); // or 'str' to render to string

// save the file to disk, so you can import it in the next step
fs.writeFileSync("./test.mjs", compiled, "utf8");

```

2. Now you can import the template, and render it with the data:

```js
import template from "./test.mjs"

const data = {
    "title":"Hello Edge!"
}
var result = template(data);

```

## Template Syntax

### echo

```
${data.something}
```

### if exists

```
$(data.something?){<b>${data.something}</b>}
```

### if doesn't exist

```
$(!data.something?){<b>Empty</b>}
```

### loops/foreach

```
$(data.names:name){<b>I'm ${name}</b>}
```

### if equals

```
${data.title == 'Hello Edge!' ? 'The condition is true' : 'The condition is false'}
```

### any valid javascript expression
Inside ${} you can use any javascript expression you want. Functions, methods, properties, process.env...


## Credits

Based on on li-template by Patrick Pissurno.