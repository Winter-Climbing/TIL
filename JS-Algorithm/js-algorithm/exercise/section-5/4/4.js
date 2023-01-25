const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input[0];
const arr = input[1].split(" ").map((i) => +i);

function solution(num, arr) {
  let answer = 0;
  let lp = 0;
  let rp = 0;
  let sum = arr[rp];

  while (rp < arr.length) {
    if (sum <= num) {
      answer += rp - lp + 1;
      rp++;
      sum += arr[rp];
    } else {
      sum -= arr[lp];
      lp++;
    }
  }

  return answer;
}

console.log(solution(num, arr));
