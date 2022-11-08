// 해당 배열을 오름차순으로 정렬하라
let a = [1, 12, 11, 9, 7, 8, 24, 65, 48, 2, 34, 15];

// 내 정답 (x)

// function solution(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[j]
//         arr.[i] = arr[j];
//         arr.[j] = temp;
//       }
//       if (arr[i] < arr[j]) {
//         continue;
//       }
//       if (arr[i] === arr[j]) {
//         continue;
//       }
//       i++;
//     }
//   }
//   return arr;
// }

// colt

function bubbleSort(arr) {
  // 불필요한 반복문을 제거할 수 있는 noSwaps 선언
  let noSwaps;
  // 배열 뒤에서 부터 순회하는 반복문
  // 뒤에서 부터 정렬하기에 제일 뒤에 있는 정렬이 완료된 수는 자연스레 순회에서 제외된다.
  for (i = arr.length; i > 0; i--) {
    // 밑의 false가 실행되지 않는다면 반복문을 break로 종료한다.
    noSwaps = true;
    // 위의 i와 맞닿지 않는 지점까지 순회하라
    for (j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      // SWAP 구문
      if (arr[j] > arr[j + 1]) {
        // 새로운 변수를 초기화함으로써 SWAP을 가능하게 했다.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // if이 작동하고 있다는 것은 아직 정렬이 완료되지 않았다는 뜻이기에 반복문을 계속 실행하도록 한다.
        noSwaps = false;
      }
    }
    // 정렬이 완료되었기에 반복문 끝
    if (noSwaps) break;
  }
  console.log("ONE PASS COMPLETE");
  return arr;
}

console.log(bubbleSort(a));

// break문에 의해 거의 O(n)에 가깝게 나타났다.
