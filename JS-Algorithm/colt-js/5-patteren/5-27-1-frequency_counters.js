// same이라는 함수를 만들고 이 함수에는 2개의 배열 형태의 매개변수가 있다.
// 이 함수의 두 번째 매개변수에는 첫 번째 매개변수 속의 배열 요소를 각각 제곱한 값이 들어가야 한다.

// ex
// same([1, 2, 3], [4, 1, 9]);  true
// same([1, 2, 3], [1, 9]);  false
// same([1, 2, 1], [4, 4, 1]);  false

function same(arr1, arr2) {
  // 일단 배열의 길이가 다르면 볼 것도 없이 false다.
  if (arr1.legnth !== arr2.legnth) {
    return false;
  }
  // 배열의 길이가 같아야 하기 때문에 arr1의 배열 길이 만큼의 반복문을 쓴다.
  for (i = 0; i < arr1.length; i++) {
    // arr2배열에 arr1요소의 제곱에 해당하는 값이 있는지 찾는다.
    // 없을 경우 -1이 newArr2의 값으로 할당된다.
    let newArr2 = arr2.indexOf(arr1[i] ** 2);
    // newArr2의 값이 -1이면 false가 나오고
    if (newArr2 === -1) {
      return false;
    }
    // newArr2의 값이 -1이 아니라면 arr2의 요소들이 삭제된다.
    arr2.splice(newArr2);
  }
  return true;
}
