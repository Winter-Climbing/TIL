// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

function 구구단(n) {
  let answer = [];
  for (i = 1; i < 10; i++) {
    answer += parseInt(n * i) + " ";
  }
  return answer;
}

구구단(2);

// 답안
const num = prompt("1 ~ 9까지의 숫자 중 하나를 입력하세요.");
let result = "";

for (let i = 1; i <= 9; i++) {
  result += i * num + " ";
}

console.log(result);
