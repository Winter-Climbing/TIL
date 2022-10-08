const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input.length; i++) {
  let answer = input[i].split(" ").map((item) => +item);
  console.log(answer[0] + answer[1]);
}
