// 정수로 이루어진 오름차순 형태의 배열이 주어진다.
// search라는 함수를 만드는데 이 함수는 value라는 인자를 받아 해당 인자가 주어진 배열 속에 있는지 없는지 판단하고 있으면 index를 반환하고 없으면 -1을 내뱉는다.

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// 메소드를 이용하는 방법!
// 간단하지만 배열의 모든 요소를 훑어야 한다 - 만약 배열의 요소가 백만개라면??
function search(arr, value) {
  return arr.findIndex((e) => e === value);
}

search([1, 2, 3, 4, 5, 6], 4);

// 분할 및 정복!!
// 배열에 요소가 많다면 배열의 모든 요소를 훑는 것이 아니라 분할해서 차례차례로 정복해나가자

function search1(arr, val) {
  // 배열에서 가장 작은 요소값을 가져키자
  let min = 0;
  // 배열에서 가장 큰 요소값을 가리키자
  let max = arr.length - 1;

  // 최솟값이 최댓값보다 같거나 작다면
  while (min <= max) {
    // 중간값을 구하자
    let middle = Math.floor((min + max) / 2);
    // 중간값을 할당하는 변수를 만들자
    let currentElement = arr[middle];

    // 중간값이 주어진 수보다 작다면
    if (arr[middle] < val) {
      // 최솟값을 중간값에 1을 더해 인덱스를 올리자
      min = middle + 1;
      // 크다면
    } else if (arr[middle] > val) {
      // 최댓값을 중간값에 1을 빼서 인덱스를 내리자
      max = middel - 1;
      // 둘 다 아니라면 값을 찾은 것이니 해당 middle 값을 리턴하자
    } else {
      return middle;
    }
  }
  // 반복문에 걸린 것이 없다면 배열에 해당 요소가 없다는 것이니 -1을 반환하자
  return -1;
}

search1([1, 2, 3, 4, 5, 6], 4);
