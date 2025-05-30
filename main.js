const botoes = document.querySelectiorAll(".botao");
const botoes = document.querySelectiorAll(".aba-conteudo");

for(let i = 0; i< botoes.length; j++) {
botoes[i].onclick = function () {

    for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
    }

    botoes[i].clssList.add("ativo");
    textos[j].classList.remove("ativo");
}
}
    
    
    
    
