// function solution(str, ans) {
//   let count = 0;
//   let ansIdx = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === ans[ansIdx]) {
//       if (str[i + 1] === ans[ansIdx + 1]) {
//         if (str[i + 2] === ans[ansIdx + 2]) return (count += 1);
//       }
//     }
//   }
// }

// console.log(solution("aweromgfdseomg", "omg"));

// Colt의 답안

function naiveString(long, short) {
  // 카운트 답변
  let count = 0;

  // 긴 문자열의 요소를 순회하는 반복문
  for (let i = 0; i < long.length; i++) {
    // 짧은 문자열의 요소를 순회하는 반복문
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      // 짧은 문자열의 요소와 긴 문자열의 요소를 비교해서 틀린 점이 있다면 바로 break!
      if (short[j] !== long[i + j]) {
        console.log("BREAK");
        break;
      }
      // 위의 break를 지나 짧은 문자열의 마지막 요소 인덱스와 j의 값이 같다면 count 상승
      if (j === short.length - 1) {
        console.log("FOUND ONE!");
        count++;
      }
    }
  }
  // 답!
  return count;
}

console.log(naiveString("lorei loled", "lol"));
