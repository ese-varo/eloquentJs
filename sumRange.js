// The sum of a range 
// first prototype
/*function range(start, end) {
  if (end >= start) {
    if (end === start) {
      return [start];
    } else {
      let numbers = range(start, end - 1);
      numbers.push(end);
      return numbers;
    }
  } else {
    if (end === start) {
      return [start];
    } else {
      let numbers = range(start, end + 1);
      numbers.push(end);
      return numbers;
    }
  }
}*/
// Second prototype
function range(start, end, step) {
  if (start === end) {
    return [start];
  } else {
    let numbers = range(start, end - step, step);
    numbers.push(end);
    console.log(numbers);
    return numbers;
  }
}

//console.log(range(5,0,-1));

// sum using a for loop
function sum(arr) {
  let result = 0;
  for (element of arr) {
    result += element;
  }
  return result;
}

//sum using recursion 
function summ(arr) {
  return suma(arr, arr.length - 1);
}

function suma(arr, i) {
  if (i === 0) {
    return arr[0];
  } else {
    let result = arr[i] + suma(arr, i - 1);
    return result;
  }
}
console.log(sum(range(5,0,-1)));
//console.log(summ([2,3,4,5]));
//console.log(range(1, 4));
//console.log(sum(range(1, 4)));
// function fac(x) {
//   if (x < 0) return;
//   if (x === 0) return 1;
//   return x * fac(x - 1);
// }
//console.log(fac(3));