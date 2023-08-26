import template from "../test.mjs"

const data = {
    "title":"Hello Edge!",
}
var result = template(data);

console.log(result);