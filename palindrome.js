function palindrome(element) {
  element = String(element);
  let answer = false;
  for (let i = 0; i < Math.floor(element.length / 2); i++) {
    (element[i] === element[element.length - 1 - i]) ? answer = true : answer = false; 
  }
  return answer;
}
let pal = 'caac';
console.log(palindrome(pal));
//console.log(123);

