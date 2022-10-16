// sumZero라는 함수는 오름차순으로 정렬되어 배열에 관한 함수다.
// 이 함수는 더해서 0이 되는 한 쌍을 찾고 두 값을 저장하는 배열을 뱉거나 만약 그런 수가 없다면 undefined를 뱉는다.

// ex)
// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

// function sumZero(arr) {
//   const arr = [-3, -2, -1, 0, 1, 2, 3];

// }

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

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
