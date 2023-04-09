// 선택 정렬 함수

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스와프
    let temp = arr[i]; // 기존 temp에 첫 번째 값부터 순서대로 집어 넣는다.
    arr[i] = arr[minIndex]; // arr[i]와 arr[minIndex]의 값을 서로 바꿔치기 한다.
    arr[minIndex] = temp; // 그리고 arr[minIndex]에 temp를 넣어 준다.
  }
}
