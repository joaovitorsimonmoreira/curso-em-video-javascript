function contar(){
  let nInicio = document.getElementById('nInicio');
  let nPasso = document.getElementById('nPasso');
  let nFim = document.getElementById('nFim');
  let res = document.getElementById('res');

  if(nInicio.value.length == 0 || nPasso.value.length == 0 || nFim.value.length == 0){
    alert(`[ERRO] verifique os dados`)
  }else{
    
    res.innerHTML = `Resultado:`

    let i = Number(nInicio.value)
    let p = Number(nPasso.value)
    let f = Number(nFim.value)

    if(p == 0){
      alert('Passo invalidado, cosiderando passo = 1')
      p = 1
    }

    if(i <= f){
      for (let c = i; c <= f; c+=p) {
        res.innerHTML += ` ${c} `
        
      }

    }else if(i >= f){
      for (let c = i; c >= f; c -= p)
      res.innerHTML += ` ${c} `

    
  }
}
}