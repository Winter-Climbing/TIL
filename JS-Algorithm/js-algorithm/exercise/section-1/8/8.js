const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

/**
 * 요소의 개수는 7개여야 한다.
 * 총합은 100 이어야 한다.
 * 가능한 정답이 여러 가지인 경우, 정답 중 아무거나 출력하면 된다.
 */

function solution(arr) {
  const answer = arr;
  const SUM = arr.reduce((prev, curr) => prev + curr, 0);
  for (i = 0; i < 8; i++) {
    for (j = i + 1; j < 9; j++) {
      if (SUM - (arr[i] + arr[j]) === 100) {
        return answer.filter((arr) => arr !== answer[i] && arr !== answer[j]);
      }
    }
  }
  return answer;
}

console.log(solution(input));
