const numeros = [...document.querySelectorAll(".num")];
const res = document.querySelector(".res");

console.log(res)

numeros.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    res.innerHTML += evt.target.innerHTML
  });
});