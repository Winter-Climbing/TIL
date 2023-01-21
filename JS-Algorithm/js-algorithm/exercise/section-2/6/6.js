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
