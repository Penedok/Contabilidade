
function moedaParaFloat(valor){
    let textoLimpo = valor.replace("R$" , "").replace(',' , ".")
    return parseFloat(textoLimpo)
}

function floatParaMoeda(valor){
    let valorFormatado = (valor < 1 ? "0" : "") + Math.floor(valor*100);
    valorFormatado = "R$" + valorFormatado;
    return valorFormatado.substr(0, valorFormatado.length-2) + "," + valorFormatado.substr(-2)
 }

 function retornaTotal(){
    let valorTotal = document.querySelector('#total');
    return moedaParaFloat(valorTotal.innerHTML);

 }

 function escreveTotal(valor){
    let valorTotal = document.querySelector('#total');
    valorTotal.innerHTML = floatParaMoeda(valor)
 }
 
function calcularTotalProdutos(){
    let todosPrecos = document.querySelectorAll('.preco-produto');
    let botoes = document.querySelectorAll(".adicionar")

    let totalProdutos = 0;

    for(let posicao =0; posicao < todosPrecos.length; posicao++){
        let umPreco = moedaParaFloat(todosPrecos[posicao].innerHTML)
        let quatidade = moedaParaFloat(botoes[posicao].value)
        let subTotal = umPreco * quatidade
        totalProdutos += subTotal;
    }

    if(totalProdutos){
        retornaTotal()
    }
    return totalProdutos
}

 function quatidadeMudou(){
    escreveTotal(calcularTotalProdutos())
 }

 function aoCarregarPagina(){
    let camposQuantidade = document.querySelectorAll('.adicionar');
    for(let i =0; i < camposQuantidade.length; i++){
        camposQuantidade[i].onchange = quatidadeMudou
    }
 }

 window.onload = (function(){
    aoCarregarPagina()
    quatidadeMudou()
 })
 retornaTotal()

 const comprar = document.querySelector('.comprar')

 comprar.addEventListener('click', () =>{
    alert('Compra realizada com sucesso')
 })