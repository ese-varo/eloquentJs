let triangleText = '';
const content = document.querySelector('body');
const triangle = document.createElement('div');
const breakLine = document.createElement('br');
for(i = 0; i < 7; i++){
  for(j = 0; j <= i; j++){
    triangleText += "#";
  }
  triangleText += "\n";
  const para = document.createElement('p');
  para.textContent = triangleText;
  triangleText = '';
  triangle.appendChild(para);
  triangle.appendChild(breakLine);
}
content.appendChild(triangle);
console.log(triangleText);