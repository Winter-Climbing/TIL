const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let numbers = +input;

for (i = 1; i <= numbers; i++) {
  let stars = "*";
  console.log(stars);
}
