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
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("BREAK");
        break;
      }
      if (j === short.length - 1) {
        console.log("FOUND ONE!");
        count++;
      }
    }
  }

  return count;
}

console.log(naiveString("lorei loled", "lol"));
