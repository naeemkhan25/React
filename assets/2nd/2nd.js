Array.prototype.myarr=function (...a) {
  this.push(a[0]);
  init();

}


const inputvale=document.getElementById('input_value');
const button=document.getElementById('button_value');

let  fruits=['mango','apple','banana','orange'];

let init =()=>{
    document.getElementById("fruits").innerHTML='';
    fruits.sort().forEach(fruit => {
        let item = document.createElement("li");
        item.textContent = fruit;
        document.getElementById("fruits").appendChild(item);
    });
};
button.addEventListener('click',function (){
      fruits.myarr(inputvale.value);
});
init();