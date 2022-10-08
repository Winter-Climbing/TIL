const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// trim()을 쓰면 통과가 되고 trim()을 안 쓰면 통과가 안 된다... 왜 일까?
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let input1 = fs.readFileSync(filePath).toString().split("\n");

console.log(input);
console.log(input1);

for (i = 0; i < input.length - 1; i++) {
  let arr = input[i].split(" ").map((item) => +item);
  console.log(arr[0] + arr[1]);
}
