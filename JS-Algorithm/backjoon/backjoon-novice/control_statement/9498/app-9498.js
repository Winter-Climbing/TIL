const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);
input = Number(input);

if (input <= 100 && input >= 90) {
  console.log("A");
} else if (input >= 80) {
  console.log("B");
} else if (input >= 70) {
  console.log("C");
} else if (input >= 60) {
  console.log("D");
} else {
  console.log("F");
}
