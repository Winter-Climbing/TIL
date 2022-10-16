// Count Uniquer Values
// 정렬된 배열을 받고, 배열 안에서 중복된 값을 제외한 숫자의 개수를 파악하라
// 배열 안에는 음수가 들어올 수도 있으나 항상 정렬되어 있다.

function pointer(arr) {
  let count = [];
  count.push(arr[0]);
  let leng = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[leng]) {
      count.push(arr[i]);
    }
  }
  console.log(count);
}
pointer([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
