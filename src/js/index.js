/*
    Passo 1 - Pegar os elementos que representam as abas no HTML
    Passo 2 - Identificar o clique no elemento da aba
    Passo 3 - Quando usuário clicar, desmarcar a aba selecionada
    Passo 4 - Marcar a aba selecionada
    Passo 5 - Esconder o conteúdo anterior
    Passo 6 - Mostrar o conteúdo da aba selecionada

*/

const abas = document.querySelectorAll('.aba')
const info = document.querySelectorAll('.informacao')

abas.forEach(aba => {
    aba.addEventListener('click', function (){

        if(aba.classList.contains('selecionado')){
            return;
        }

        selecionarAba(aba);

        const infoSelecionada = document.querySelector('.informacao.selecionado');
        infoSelecionada.classList.remove('selecionado');

        const idInformacaoDaAba = `informacao-${aba.id}`;
        
        const informacaoASerMostrada = document.getElementById(idInformacaoDaAba);
        
        informacaoASerMostrada.classList.add('selecionado');
    })

})

function selecionarAba(aba){
    const abaSelecionada = document.querySelector('.selecionado');
    abaSelecionada.classList.remove('selecionado');

    aba.classList.add('selecionado');
}