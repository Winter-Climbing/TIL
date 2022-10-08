const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let numbers = +input;

let star = "";
for (let i = 0; i < numbers; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
