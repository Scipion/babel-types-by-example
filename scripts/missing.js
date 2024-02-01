import fs from "node:fs";

const args = process.argv.slice(2);
const argAll = true;
const argCount = true;

const samplesPath = process.cwd() + "/src/codesample";
let dir = fs.readdirSync(samplesPath);
let samples = new Map();

for (let fileName of dir) {
  let data = fs.readFileSync(samplesPath + "/" + fileName).toString();

  samples.set(fileName, data);
  if (!argAll) {
    if (data.length === 0 && !argCount) {
      break;
    }
  }
}

// Print step
let empty = 0;

for (let [k, v] of samples) {
  if (!v || !v.length) {
    process.stdout.write(k);
    process.stdout.write("\n");

    empty++;
  }
}

if (argAll || argCount) {
  process.stdout.write("----------------------\n");
  process.stdout.write("missing samples: " + empty + " out of " + samples.size);
  process.stdout.write("\n    " + (empty / samples.size) * 100 + "%");
  process.stdout.write("\n");
}
