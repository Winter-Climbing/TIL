const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr1 = input[1]
  .trim()
  .split(" ")
  .map((i) => +i);
const arr2 = input[3]
  .trim()
  .split(" ")
  .map((i) => +i);

// sort는 nlogn 이다. 복잡복잡
// 투포인터 알고리즘으로 생각해보자

function solution(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  return arr;
}

console.log(solution(arr1, arr2));
