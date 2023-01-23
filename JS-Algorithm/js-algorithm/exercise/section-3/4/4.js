const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let str = input[0];
let s = input[1];

function solution(str, s) {
  const answer = [];
  const leftArray = [];
  const rightArray = [];
  let p = 1000;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) {
      p = 0;
      leftArray.push(p);
    }
    if (str[i] !== s) {
      p++;
      leftArray.push(p);
    }
  }

  p = 1000;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === s) {
      p = 0;
      rightArray.unshift(p);
    }
    if (str[i] !== s) {
      p++;
      rightArray.unshift(p);
    }
  }

  for (let i = 0; i < str.length; i++) {
    leftArray[i] < rightArray[i]
      ? answer.push(leftArray[i])
      : answer.push(rightArray[i]);
  }

  return answer;
}

console.log(solution(str, s));
