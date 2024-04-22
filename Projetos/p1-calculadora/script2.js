document.addEventListener("DOMContentLoaded", function() {
  let sinal = false;
  let decimal = false;
  const calculadora ={
    teclas:{
      numeros: [...document.querySelectorAll(".num")],
      operadores: [...document.querySelectorAll(".teclaOp")],
      teclaLimpar: document.querySelector(".tLimpar"),
      teclaIgual: document.querySelector(".tIgual"),
      teclaCopy: document.querySelector(".tCopy")
    },
    resultado: document.querySelector(".res")
  };

  calculadora.teclas.numeros.forEach((el) => {
    el.addEventListener("click", (evt) => {
      if(calculadora.resultado.innerHTML== 0){
        calculadora.resultado.innerHTML = evt.target.innerHTML;
        sinal = false
      }else{
        calculadora.resultado.innerHTML += evt.target.innerHTML;
        sinal = false
        decimal = false
      }
      
    });
  });

  calculadora.teclas.operadores.forEach((el) => {
    el.addEventListener("click", (evt) =>{
      
      if(evt.target.innerHTML == "," && decimal == false){
          decimal = true
          calculadora.resultado.innerHTML += evt.target.innerHTML;
        }else if(evt.target.innerHTML == "," && decimal == true){
          
          calculadora.resultado.innerHTML += "";

        }else if(evt.target.innerHTML != "," && sinal == false){
         
          calculadora.resultado.innerHTML += evt.target.innerHTML
           
          decimal = true
          sinal = true
        }else if(evt.target.innerHTML != "," && sinal == true){
          calculadora.resultado.innerHTML += ""
        }
        
      

      
      
    })
  })

  calculadora.teclas.teclaLimpar.addEventListener("click",(evt)=>{
    calculadora.resultado.innerHTML = "0"
    sinal = false
    decimal = false
  })

  calculadora.teclas.teclaIgual.addEventListener("click",(evt)=>{
  sinal = false
  decimal = false
  const resposta = eval(calculadora.resultado.innerHTML);
  calculadora.resultado.innerHTML = resposta;
  
  });

  calculadora.teclas.teclaCopy.addEventListener("click",(evt)=>{
    calculadora.resultado.innerHTML.select();
    navigator.clipboard.writeText(calculadora.resultado.innerHTML);    
  });
});





//calculadora.teclas.operadores.forEach((el) => {el.addEventListener("click", (evt) =>{if(evt.target.innerHTML == ","){if(decimal== true){calculadora.resultado.innerHTML += "";}else{decimal = truecalculadora.resultado.innerHTML += evt.target.innerHTML;}}else if(evt.target.innerHTML == "," && sinal == true){calculadora.resultado.innerHTML += "0,"}else{if(sinal == false){calculadora.resultado.innerHTML += evt.target.innerHTML;sinal = truedecimal = false}}})})