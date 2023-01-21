const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

function solution(arr) {
  let answer = 1;
  let max = arr[0];
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }

  return answer;
}

console.log(solution(input));
