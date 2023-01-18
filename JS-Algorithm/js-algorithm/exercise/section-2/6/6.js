// 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다.
// ▣ 출력설명
// 최대합을 출력합니다.
// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제
// 155

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let first = input[0].split(" ").map((i) => +i);
let second = input[1].split(" ").map((i) => +i);
let third = input[2].split(" ").map((i) => +i);
let fourth = input[3].split(" ").map((i) => +i);
let fifth = input[4].split(" ").map((i) => +i);

function solution(f, s, t, fo, fi) {
  const answer = [];
  const arr = [f, s, t, fo, fi];
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  answer.push(
    f.reduce((p, c) => p + c, 0),
    s.reduce((p, c) => p + c, 0),
    t.reduce((p, c) => p + c, 0),
    fo.reduce((p, c) => p + c, 0),
    fi.reduce((p, c) => p + c, 0)
  );

  for (let i = 0; i < f.length; i++) {
    answer.push(f[i] + s[i] + t[i] + fo[i] + fi[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    (firstDiagonalSum += arr[i][i]),
      (secondDiagonalSum += arr[i][arr.length - i - 1]);
  }

  return Math.max(...answer, firstDiagonalSum, secondDiagonalSum);
}

console.log(solution(first, second, third, fourth, fifth));
