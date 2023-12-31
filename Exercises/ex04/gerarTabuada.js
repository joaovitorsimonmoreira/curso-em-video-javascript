function gerarTabuada(){
  let tNumber = document.getElementById('tNumber').value;
  let selectTab = document.getElementById('selectTab') 



  if(tNumber == ""){
    alert('[ERRO]o campo está vazio')
  }else{
   for (let i = 0; i <= 10 ; i++) {
    
     let res = tNumber*i
     
     let item = document.createElement('option')
     item.text = `${tNumber} X ${i} = ${res}`
     selectTab.appendChild(item)

    
   }
   
   


  }
}




