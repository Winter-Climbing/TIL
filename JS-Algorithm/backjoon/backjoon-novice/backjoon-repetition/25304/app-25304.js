const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [price, numbers] = [+input[0], +input[1]];
let thing = 0;
let answer = "";

for (i = 2; i <= numbers + 1; i++) {
  thing += input[i].split(" ").reduce((arr, cur) => +arr * +cur);
}
if (price === thing) {
  answer = "Yes";
} else {
  answer = "No";
}

console.log(answer);
