// 정수 배열과 n이라는 수를 취하는 maxSubarraySUm이라는 함수를 작성한다. n번 연속되서 위치한 배열 요소의 합이 가장 큰 구간을 찾아 해당 구간의 합을 도출하라

// maxSubarraySum([1,2,5,2,8,1,5,], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5,], 4) // 17

// 좋지 않은 예시
function maxSubarraySum(arr, num) {
  // num이 주어지는 배열의 길이보다 큰 경우 null을 반환
  if (num > arr.length) {
    return null;
  }
  // 음수의 경우를 대비해서???
  var max = -Infinity;

  // 배열 끝을 넘어서서 덧셈을 하면 안 되기 때문에 해당 부분까지로 선택
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
//
//
//
// 슬라이딩 윈도우!!
function maxSubarraySum(arr, num) {
  // 맥스값 초기화
  let maxSum = 0;
  // 슬라이딩값 초기화
  let tempSum = 0;
  // 주어진 숫자보다 배열의 길이가 짧으면 판단 의미가 없으니 null!
  if (arr.length < num) return null;

  // 일단 먼저 주어진 num 전까지의 합을 maxSum에 저장
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // 슬라이딩값과 맥스값을 같게 선언 - 뒤에 반복문으로 달리 만들어 비교
  tempSum = maxSum;
  // 이미 index(num) 까지의 값을 다 더했으니 시작을 num부터
  for (let i = num; i < arr.length; i++) {
    // 슬라이딩값에 가장 이전 index를 빼고, 바로 오른쪽의 index를 더하면서 슬라이딩!
    tempSum = tempSum - arr[i - num] + arr[i];
    // 저장되어 있는 maxSum과 비교후 최댓값 할당
    maxSum = Math.max(maxSum, tempSum);
  }
  // 그렇게 해서 나온 최댓값 더하기!
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
