#edge-template

## The problem

Edge functions (Vercel, Netlify, Cloudflare Workers) are a great way to serve your code close to your end users. However, with edge functions you lose access to the file system, making it harder to use traditional template engines. Edge Template works around this issue by **compiling your templates to native ES-modules**. After compilation, you can just import your templates into any Edge function.

## Universal rendering
Because ES-modules are compatible with any javascript environment, you can use the same template for sever-side rendering, pre-rendering, edge rendering ánd client-side rendering. This makes them truly isomorphic.

## How to use

1. first (pre)compile you template to esm (or to a template literal string). Typically you'd do this during your build step:

```
import edge from "edge-template"
import * as fs from "fs"

// compile
let compiledEsm = await edge.compile("<h1>${data.title}</h1>", "esm");
// save the file to disk, so you can import it in the next step
fs.writeFileSync("./test.mjs", compiled, "utf8");

// alternatively you can compile it to a template literal string
let compiled = await edge.compile("<h1>${data.title}</h1>", "str");

```

2. Now you can import the template, and render it with the data:

```
import template from "./test.mjs"

const data = {
    "title":"Hello Edge!"
}
var result = template(data);

```

