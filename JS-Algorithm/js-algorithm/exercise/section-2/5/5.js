const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

function solution(length, arr) {
  let answer = Array.from({ length }, () => 1);
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution(5, input));
