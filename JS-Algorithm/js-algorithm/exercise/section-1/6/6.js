const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

function solution(arr) {
  let plus = 0;
  const arr = [];
  for (let element of arr) {
    if (element % 2 === 1) {
      plus += element;
      arr.push(element);
    }
  }

  return `${plus} \n${Math.min(...arr)}`;
}

console.log(solution(input));
