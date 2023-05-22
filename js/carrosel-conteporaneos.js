const control = document.querySelectorAll('.control-conteporaneos')
let correntesItem = 0;

const item = document.querySelectorAll('.item-conteporaneos');
const maximoItems = items.length;

control.forEach((control) => {
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains("arrow-esquerda");
        if (isLeft){
            correntesItem -= 1;

        }else{
            correntesItem += 1;
        }

        if(correntesItem >= maximoItems){
            correntesItem = 0;
        }
        if(correntesItem < 0){
            correntesItem = maximoItems - 1;
        }
        item[correntesItem].scrollIntoView({
            inline:'center',
            behavior:'smooth',
            block:'nearest'
        })
        
       
    })
})
