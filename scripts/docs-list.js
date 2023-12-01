import * as t from "@babel/types";
import fs from "fs";

import toFunctionName from "./utils/toFunctionName.js";

console.log(fs.writeFileSync);
console.log(fs.writeFileSync.length);

let readme = [];
let i = 0;
Object.keys(t.BUILDER_KEYS)
  .sort()
  .forEach(function (key) {
    i++;
    //readme.push(toFunctionName(key));
    //fs.writeFileSync("./codesample/" + toFunctionName(key) + ".js.txt", "");
  });

readme.push("");
readme.push("-" + i + "+");
readme.push("");

process.stdout.write(readme.join("\n"));
