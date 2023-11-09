function carregar() {
  
  var msg = document.querySelector('.msg')
  var imagem = document.querySelector('.imagem')
  var data = new Date()
  var hora = data.getHours()
  

 

  msg.innerHTML = `Agora são ${hora} horas.`

  if(hora >= 0 && hora < 12){
    //bom dia
    imagem.src = 'images/fotomanha.avif'
    document.body.style.background= '#f5c07a'
  }else if(hora > 12 && hora < 18){
    //boa tarde
    imagem.src = 'images/fototarde.webp'
    document.body.style.background= '#d07e21'
  }else{
    //boa noite
    imagem.src = 'images/fotonoite.avif'
    document.body.style.background= '#000e23'
  }
}
