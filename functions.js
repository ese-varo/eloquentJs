//    MINIMUM
// declare min to be a function 
// function min(a, b) {
//   return Math.min(a,b);
// }

// define min to hold a function value 
// const min = function(a, b){
//   return Math.min(a,b);
// }

// a less verbose function value 
// const min = (a,b) => Math.min(a,b);
// console.log(min(11,10));

//    RECURSION
// const isEven = n => {
//   if(n < 0){
//     console.log('Please enter a positive value');
//   }
//   else if(n == 0){
//     return true;
//   } else if(n == 1){
//     return false;
//   } else {
//     return isEven(n-2);
//   }
// }

//    BEAN COUNTING
function countBs(stg, char){
  let counted= 0;
  let i = 0;
  function readStg(element){
    if(i >= element.length){
      return `There are ${counted} "${char}" characters in the string`;
    } 
    if(element[i] === char){
      counted++;
    }
    i++;
    return readStg(element);
  }
  return readStg(stg);
}

console.log(countBs("BaaabBBssdB", 's'));

// function findSolution(target) {
//   function find(current, history) {
//     if(current == target) {
//       return history;
//     } else if(current > target) {
//       return null;
//     } else {
//       return find(current + 5, `(${history} + 5)`) || 
//              find(current * 3, `(${history} * 3)`);
//     }
//   }
//   return find(1, "1");
// }

// console.log(findSolution(24));