const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input[0];
let arr = input[1];

function solution(num, arr) {
  let answer = [];
  const array = arr
    .trim()
    .split(" ")
    .map((i) => +i);

  answer.push(array[0]);
  for (i = 1; i <= array.length; i++) {
    if (array[i] > array[i - 1]) answer.push(array[i]);
  }

  return answer;
}

console.log(solution(num, arr));
