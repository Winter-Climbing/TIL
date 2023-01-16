// 입력설명
// 첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 N개 문제의 채점 결과를 나
// 타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 0은 문제의 답이 틀린 경우이고, 1은 문제의
// 답이 맞는 경우이다.
// ▣ 출력설명
// 첫째 줄에 입력에서 주어진 채점 결과에 대하여 가산점을 고려한 총 점수를 출력한다.
// ▣ 입력예제 1
// 10
// 1 0 1 1 1 0 0 1 1 0
// ▣ 출력예제 1
// 10

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
