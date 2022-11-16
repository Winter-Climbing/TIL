const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const input1 = input[0]
  .trim()
  .split(" ")
  .map((item) => +item);
const input2 = input[1]
  .trim()
  .split(" ")
  .map((item) => +item);

console.log(input);
console.log(input1);
console.log(input2);

function solution(totalAddNum, maxAddNum, arr) {
  let answer = 0;
  const arrMax = Math.max(...arr);

  for (i = 0; i < totalAddNum; i++) {
    answer += arrMax;
  }

  return answer;
}

console.log(solution(input1[1], input1[2], input2));
