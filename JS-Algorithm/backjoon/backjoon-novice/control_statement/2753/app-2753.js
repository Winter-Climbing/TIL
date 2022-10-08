const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);
input = Number(input);

if (input % 400 === 0 || (input % 4 === 0 && input % 100 !== 0)) {
  console.log(1);
} else {
  console.log(0);
}
