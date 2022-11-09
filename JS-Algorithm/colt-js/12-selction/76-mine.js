function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let min = arr[0];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1] && arr[j] < min) {
        min = arr[j];
      }
    }
    answer.push(min);
  }
  return answer;
}

// 최솟값을 저장하는 변수 하나
//
// 그러면서 각 요소를 검사하는 로직 하나
// 마지막에는 저장된 최솟값과 현재 가장 작다고 판단되는 숫자를 비교해서 가장 작은 숫자를 앞 번째 요소로 반환

console.log(solution([3, 5, 2, 4, 1]));
