//In this Kata, your function receives an array of positive integers as input. 
//Your task is to determine whether the numbers are in ascending order.

function isAscending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x >= arr[i - 1];
    });
}
