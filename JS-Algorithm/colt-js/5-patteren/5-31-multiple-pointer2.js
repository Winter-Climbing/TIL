// Count Uniquer Values
// 정렬된 배열을 받고, 배열 안에서 중복된 값을 제외한 숫자의 개수를 파악하라
// 배열 안에는 음수가 들어올 수도 있으나 항상 정렬되어 있다.

function countUniqueValues(arr) {
  let answer = [];
  for (i = 1; (i = arr.length); i++) {
    let first = arr[0];
    let second = arr[i];
    // 숫자가 중복되지 않았다면 배열 answer에 push하고 second의 값이 first가 된다.
    if (first !== second) {
      answer.push(second);
      first = second;
    }
  }
  // 개수는 결국 배열 answer의 length다.
  return answer.length;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
