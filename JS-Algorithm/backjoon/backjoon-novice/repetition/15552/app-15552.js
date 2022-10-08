const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const numbers = +input[0];
let answer = "";

for (i = 1; i <= numbers; i++) {
  let num = input[i].split(" ");
  answer += +num[0] + +num[1] + "\n";
}
console.log(answer);
