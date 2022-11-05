function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50); // 5
