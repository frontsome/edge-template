// import edge from "@frontsome/edge-template"
import edge from "../index.js"
import * as fs from "fs"

// compile to string
let compiled = await edge.compile("<h1>${data.title}</h1>", "str");
console.log(compiled);

// compile to ES Module
let compiledEsm = await edge.compile("<h1>${data.title}</h1>", "esm");
fs.writeFileSync("./test.mjs", compiledEsm, "utf8");
