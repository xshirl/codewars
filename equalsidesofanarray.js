function findEvenIndex(arr) {
  var sum = 0,
    leftSum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; /* goes through i elements left to right and adds integers to sum */
  }

  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i]; /* subtracts integer from previous sum */

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}