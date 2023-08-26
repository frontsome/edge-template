import edge from "edge-template"

let compiled = await edge.compile("<h1>Hello world</h1>");

console.log(compiled);