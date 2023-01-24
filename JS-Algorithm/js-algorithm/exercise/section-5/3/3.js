const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[0];
const arr = input[1]
  .trim()
  .split(" ")
  .map((i) => +i);

function solution(num, arr) {
  let answer = 0;
  let sum = 0;
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < arr.length; rightPointer++) {
    sum += arr[rightPointer];
    if (sum === 6) answer++;
    while (sum >= 6) {
      sum -= arr[leftPointer++];
      if (sum === num) answer++;
    }
  }

  return answer;
}

console.log(solution(num, arr));
