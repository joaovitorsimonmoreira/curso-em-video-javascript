var lista = []

function adicionar(){
  let adNumber = document.getElementById('adNumber').value;
  let select = document.getElementById('select');
  

  if(adNumber > 100 || adNumber < 0){
    alert('o numero escolhido não é compativel')
  }else if(adNumber == ''){
    alert('escolha um numero')
  }else {
    let item = document.createElement('option')
     item.text = `valor ${adNumber} adicionado`
     select.appendChild(item)
     todos.innerHTML = ''

     lista.push(Number(adNumber))
     
     

     
  }

  
}

function finalizar(){
  
  let resSoma = document.getElementById('resSoma')
  let resMaiorValor = document.getElementById('resMaiorValor')
  let soma = 0
  let todos = document.getElementById('todos')
  
  
  //soma dos valores

  if(lista == ''){
    alert('adicione valores antes de finalizar')
  }else{
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i]
    
  }
  let maiorValor = Math.max.apply(null ,lista)
  let menorValor = Math.min.apply(null ,lista)
  let quantidadeValores = lista.length
  let media = soma/lista.length


  todos.innerHTML += `a soma dos valores é ${soma} <br>`
  todos.innerHTML += `o maior valor é ${maiorValor} <br>`
  todos.innerHTML += `o menor valor é ${menorValor} <br>`
  todos.innerHTML += `a quantidade de valores é ${quantidadeValores} <br>`
  todos.innerHTML += `a media dos valores é ${media} <br>`
  }


}