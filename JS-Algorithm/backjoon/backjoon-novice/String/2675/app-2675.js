const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const num = +input.shift();

for (let i = 0; i < num; i++) {
  let answer = "";
  let arr = input[i].split(" ");

  for (let j = 0; j < arr[1].length; j++) {
    answer += arr[1][j].repeat(arr[0]);
  }
  console.log(answer);
}
