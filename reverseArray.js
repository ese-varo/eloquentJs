// takes an array as argument and produces a new array that has the same elements
// in the inverse order
function reverseArray(arr) {
  let newArr = [];
  for (let element of arr) {
    newArr.unshift(element);
  }
  return newArr;
}
//console.log(reverseArray('cat'));

// modifies the array given as argument by reversing its elements 
let myArr = [2,3,4,5,6];
function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}

console.log(myArr);
reverseArrayInPlace(myArr);
console.log(myArr);
