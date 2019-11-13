/*for(count = 1; count <= 100; count++){
  if(count % 3 == 0 && count % 5 == 0){
    console.log("FizzBuzz"); 
  } else if(count % 3 == 0){
    console.log("Fizz");
  } else if(count % 5 == 0){
    console.log("Buzz");
  } else {
    console.log(count);
  }
}*/
for(let i = 1; i <=100; i++){
  let result = "";
  if(i % 3 == 0)
    result += "Fizz";
  if(i % 5 == 0)
    result += "Buzz";
  console.log(result || i);
}