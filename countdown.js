/*
The function shoud take two parameters: an array and a number 'n'
append the numbers n through 1 based on the n parameter
For example, calling this function with n = 5 will pad the array 
with the numbers [5.4.3.2.1] inside of it. Your function must 
use recursion by calling itself and must not use loops of any kind.
 */

function countdown(myArr, n) {
  if (n < 1) {
    return;
  } else if (n === 1) {
    return myArr.push(1);
  } else {
    countdown(myArr, n - 1);
    myArr.unshift(n);
    return myArr;
  }
}
console.log(countdown([], 7));