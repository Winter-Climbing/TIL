const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

let numbers = +input[0];

for (i = 1; i < numbers + 1; i++) {
  let newArr = input[i];
  newArr.reduce((acc, cur) => console.log(+acc + +cur));
}
