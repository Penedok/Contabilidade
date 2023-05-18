

 function cadastra(){
  const btnEnviar = document.querySelector('.enviar')
    btnEnviar.addEventListener('click', ()=>{
        let cadastro = {
            email : document.querySelector('.email-cadastrado').value,
            senha : document.querySelector('.senha-cadastrada').value   
        }
          console.log(cadastro)

    })

    
 }


cadastra()