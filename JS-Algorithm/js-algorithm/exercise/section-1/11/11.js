const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let answer = 0;
  let upper = str.toUpperCase();

  for (let val of str) {
    if (val === val.toUpperCase()) answer++;
  }

  // for (i = 0; i <= str.length; i++) {
  //   if (str[i] === upper[i]) ++answer;
  // }

  return answer;
}

console.log(solution(input));

// 두 번째 풀이
for (let x of s) {
  let answer = 0;
  let num = x.charCodeAt();
  if (num >= 65 && num <= 90) answer++;
}

// 아스키 코드
// 대문자: 65~90
// 소문자: 97~122
