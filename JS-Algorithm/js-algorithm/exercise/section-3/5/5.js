const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 해당 인덱스와 같은 문자열이 나타날 경우 카운팅하는 변수를 만든다.
//

function solution(str) {
  let answer = "";
  let count = 1;
  str = str + " ";

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
}

console.log(solution(input));
