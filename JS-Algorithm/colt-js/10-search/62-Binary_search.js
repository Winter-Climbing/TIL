function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  if (num === middle) {
    return arr.indexOf(middle);
  }

  if (num > middle) {
    let arrHalf = arr.slice(middle, end);
    return binarySearch(arrHalf, num);
  }

  if (num < middle) {
    let arrHalf = arr.slice(start, middle + 1);
    return binarySearch(arrHalf, num);
  }
}

binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
