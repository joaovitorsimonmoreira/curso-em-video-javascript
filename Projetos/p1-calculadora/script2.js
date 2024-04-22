document.addEventListener("DOMContentLoaded", function() {
  let sinal = false;
  let decimal = false;
  const calculadora ={
    teclas:{
      numeros: [...document.querySelectorAll(".num")],
      operadores: [...document.querySelectorAll(".teclaOp")],
      teclaLimpar: document.querySelector(".tLimpar")
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

        }else if(evt.target.innerHTML != ","){
         
          calculadora.resultado.innerHTML += evt.target.innerHTML
           
          decimal = true
          sinal = true
        }
        
      

      
      
    })
  })

  calculadora.teclas.teclaLimpar.addEventListener("click",(evt)=>{
    calculadora.resultado.innerHTML = "0"
    sinal = false
    decimal = false
  })
});

//calculadora.teclas.operadores.forEach((el) => {el.addEventListener("click", (evt) =>{if(evt.target.innerHTML == ","){if(decimal== true){calculadora.resultado.innerHTML += "";}else{decimal = truecalculadora.resultado.innerHTML += evt.target.innerHTML;}}else if(evt.target.innerHTML == "," && sinal == true){calculadora.resultado.innerHTML += "0,"}else{if(sinal == false){calculadora.resultado.innerHTML += evt.target.innerHTML;sinal = truedecimal = false}}})})