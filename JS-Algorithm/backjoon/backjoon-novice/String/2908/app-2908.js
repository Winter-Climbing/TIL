const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("")
  .reverse()
  .join("")
  .split(" ")
  .map((item) => +item);

if (input[0] > input[1]) {
  console.log(input[0]);
} else {
  console.log(input[1]);
}
