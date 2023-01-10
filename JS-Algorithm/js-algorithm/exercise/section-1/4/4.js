// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..
// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.
// ▣ 입력예제 1
// 6
// ▣ 출력예제 1
// 21
// ▣ 입력예제 2
// 10
// ▣ 출력예제 2
// 55

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[1];

function solution(input) {
  let answer = 0;
  for (i = 1; i <= input; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(input));
