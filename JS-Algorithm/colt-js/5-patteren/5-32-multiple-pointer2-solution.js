function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
}

countUniqueValues([1, 2, 2, 3, 3, 4, 5, 6, 6, 7]);
