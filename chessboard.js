const size = 18;
let output = "";
for(let i = 1; i <= size; i++){
  let sign;
  i % 2 == 0 ? sign = true : sign = false;
  for(let j = 1; j <= size; j++){
    sign ? output += '#' : output += ' ';
    sign ? sign = false: sign = true; 
  }
  output += "\n";
}
console.log(output);