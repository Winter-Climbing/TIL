function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // 배열 첫 번째에 위치할 변수 lowest를 만든다.
    var lowest = i;
    // 요소 i와 비교하는 다음 요소 j를 순회하는 반복문
    for (var j = i + 1; j < arr.length; j++) {
      // 요소 j와 요소 lowest를 비교해서 j가 더 작다면 왼쪽부터 정렬
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // 만약 i와 lowest가 다르다면 SWAP!
    if (i !== lowest) {
      console.log(i, lowest);
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
// 빅오는 O(n)이다.
// 사실 잘 사용되지 않는 정렬 방법이다.
