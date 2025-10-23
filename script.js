
import { createNode } from "./node.js";

let test = createNode("woah");
test.left = createNode("wowee");
console.log(test.value);