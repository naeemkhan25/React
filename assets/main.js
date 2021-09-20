var number=0;
var getclick=document.querySelector('#button');
var display=document.querySelector('#increment');

getclick.addEventListener("mouseover",()=>{
    number++;
    display.innerHTML=number;
});
