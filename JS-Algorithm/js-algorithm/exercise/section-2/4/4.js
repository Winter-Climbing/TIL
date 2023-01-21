const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

function solution(arr) {
  let answer = 0;
  let num = 0;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === 1) {
      num++;
    } else {
      num = 0;
    }
    if (num >= 1 && arr[i] === 1) answer += num;
  }

  // let answer = 0;
  // let cnt = 0;
  // for (let x of arr) {
  //   if (x === 1) {
  //     cnt++;
  //     answer += cnt;
  //   } else {
  //     cnt = 0;
  //   }
  // }

  return answer;
}

function solution2(cnt, arr) {
  if (arr.length !== cnt) {
    return;
  }

  let answer = 0;

  arr.reduce((previous, current) => {
    if (current === 1) {
      answer += previous;
      return previous + 1;
    } else {
      return 1;
    }
  }, arr[0]);

  return answer;
}

console.log(solution2(10, input));
