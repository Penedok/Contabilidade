const controle = document.querySelectorAll('.control-animacoes')
let carrosselItem = 0;

const opcao = document.querySelectorAll('.item-animacoes');
const comprimentoItems = items.length;

controle.forEach((control) => {
    control.addEventListener('click', ()=>{
        const esquerda = control.classList.contains("flecha-esquerda");
        if (esquerda){
            carrosselItem -= 1;

        }else{
            carrosselItem += 1;
        }

        if(carrosselItem >= comprimentoItems){
            carrosselItem = 0;
        }
        if(carrosselItem < 0){
            carrosselItem = comprimentoItems - 1;
        }
        opcao[carrosselItem].scrollIntoView({
            inline:'center',
            behavior:'smooth',
            block:'nearest'
        })
        
       
    })
})
