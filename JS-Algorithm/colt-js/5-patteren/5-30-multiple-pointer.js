// sumZero라는 함수는 오름차순으로 정렬되어 배열에 관한 함수다.
// 이 함수는 더해서 0이 되는 한 쌍을 찾고 두 값을 저장하는 배열을 뱉거나 만약 그런 수가 없다면 undefined를 뱉는다.

// ex)
// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

// function sumZero(arr) {
//   const arr = [-3, -2, -1, 0, 1, 2, 3];

// }

// 중첩 반복문을 이용한 해결법
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// 다중 포인터를 이용한 해결법
function sumZero2(arr) {
  // 배열 가장 왼쪽에 포인터 하나
  let left = 0;
  // 배열 가장 오른쪽에 포인터 하나
  let right = arr.length - 1;
  // 오른쪽 포인터와 왼쪽 포인터가 만나기 전까지 반복
  while (left < right) {
    let sum = arr[left] + arr[right];
    // 배열의 왼쪽 포인터의 요소와 오른쪽 포인터의 요소 합이 0이면 해당 요소로 이루어진 배열을 뱉어라
    if (sum === 0) {
      return [arr[left], arr[right]];
      // sum이 0보다 크다면 오른쪽 요소가 더 큰 상황이니 오른쪽 포인터를 움직이고
    } else if (sum > 0) {
      right--;
      // 0보다 작다면 왼쪽 포인터를 움직여라
    } else {
      left++;
    }
  }
}

sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]);

// 다중 포인터 패턴은 기본적으로 오름차순 형태의 배열일 때 적용 가능하다.
