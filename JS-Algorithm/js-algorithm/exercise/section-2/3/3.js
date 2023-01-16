// ▣ 입력설명
// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// ▣ 출력설명
// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
// ▣ 입력예제 1
// 5
// 2 3 3 1 3
// 1 1 2 2 3
// ▣ 출력예제 1
// A
// B
// A
// B
// D

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input[0];
let a = input[1].trim().split(" ");
let b = input[2].trim().split(" ");

function solution(num, a, b) {
  let answer = [];

  for (let i = 0; i < num; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    } else if (a[i] - b[i] === 1) {
      answer.push("A");
    } else if (a[i] - b[i] === 2) {
      answer.push("B");
    } else if (a[i] - b[i] === -1) {
      answer.push("B");
    } else if (a[i] - b[i] === -2) {
      answer.push("A");
    }
  }

  return answer.toString();
}

console.log(solution(num, a, b));
