function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0; // 시작점을 설정한다.
  let end = arr.length - 1; // 마지막점을 설정한다.
  let middle = Math.floor((start + end) / 2); // 중간점을 설정한다.

  // 반복 조건문을 사용한다.
  // 중간 지점의 요소와 주어진 숫자 num이 다르고 시작점이 마지막점과 같거나 작다면 계속해서 반복한다.
  while (arr[middle] !== num && start <= end) {
    // 주어진 숫자가 중간 지점의 숫자보다 작다면
    if (num < arr[middle]) {
      // 마지막점의 위치를 중간점 - 1로 설정한다.
      end = middle - 1;
      // 반대로 주어진 숫자가 중간 지점의 숫자보다 크다면
    } else {
      // 시작점의 위치를 중간점 + 1 로 설정한다.
      start = middle + 1;
    }
    // 그리고 변경된 시작 or 마지막점에 따라 새롭게 설정된 중간점을 설정한다.
    middle = Math.floor((start + end) / 2);
  }
  // 만약 중간 지점의 숫자와 주어진 숫자가 같으면 middle위치의 숫자를
  // 시작점이 마지막점보다 커진다면 찾는 값이 없다는 의미니 -1을 반환한다.
  return arr[middle] === num ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50); // -1
binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5); // 1
