// import edge from "edge-template"
import edge from "../index.js"
import * as fs from "fs"

// compile to string
let compiled = await edge.compile("<h1>${data.title}</h1>", "str");
console.log(compiled);


let compiledEsm = await edge.compile("<h1>${data.title}</h1>", "esm");
fs.writeFileSync("./test.mjs", compiled, "utf8");


