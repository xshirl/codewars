//In this Kata, your function receives an array of positive integers as input. 
//Your task is to determine whether the numbers are in ascending order.

function inAscOrder(arr) {
  var num = 0;
  for (var i = 0; i<arr.length; i++) {
    if (arr[i] >= num) {
    num = arr[i];
    }
    else {
    num = arr[i-1];
    }
    }
  if (num == arr[arr.length-1]) {
    return true;
  }
  else {
    return false;
  }
}
