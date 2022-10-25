// 지금까지는 단일 재귀함수를 작성했다.
// 헬퍼 재귀함수는 재귀적이지 않은 일반 함수 안에 재귀 함수를 집어 넣는 구조를 뜻한다.

// dragon 문제다!! - 요소가 홀수로만 이루어진 배열
function collectOddValues(arr) {
  // return할 값을 담아 놓는 배열
  let result = [];

  // helper recursion
  function helper(helperInput) {
    // base case 작성
    if (helperInput.length === 0) {
      return;
    }
    // 배열 인자의 첫 번째 요소가 홀수면 result에 담아 놓기
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // different input
    // arr[0], 첫번째 요소를 제거한 arr 인자를 매개변수 helperInput에 전달한 helper를 호출
    helper(helperInput.slice(1));
  }
  // helper recursion에 배열 인자를 집어 넣고 호출!
  helper(arr);
  // 결과 반환
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
