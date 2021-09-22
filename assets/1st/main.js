var number=0;
var getclick=document.querySelector('#button');
var display=document.querySelector('#increment');

// getclick.addEventListener("mouseover",()=>{
//     number++;
//     display.innerHTML=number;
// });
var arr=[];
// while(number<10000){
//     number++;
//     display.innerHTML+=' '+number;
// }

while(number<10000){
   arr.push(++number);
}
display.innerHTML = arr.join(' ')