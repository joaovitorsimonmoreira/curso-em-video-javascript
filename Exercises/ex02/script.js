function verificar() {

 var data = new Date()
 var ano = data.getFullYear()
 var anof = document.querySelector('#anof')
 var res = document.querySelector('.res')
 if(anof.value.length == 0 || Number(anof.value) > ano){
  alert('Erro verifique os dados')

 }else{
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(anof.value)
  var genero =''

  if(fsex[0].checked){
    genero = 'Homem'
  }else if(fsex[1].checked){
    genero = 'Mulher'
   }
}
 res.innerHTML= `Detectamos ${genero} com idade de ${idade} anos`
}
