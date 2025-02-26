let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//evita repetição de códigos.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //para colocar audio
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

//A função faz criar um novo jogo ao acertar.
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        //Ativar o botão quando acertar o numero. Remove o atributo (disabled) que desabilita o botão.
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }else {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }

            tentativas++;
            limparCampo();
        }
    }

function gerarNumeroAleatorio() {
   //cria variavel para armazenar numero ate 10
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);

   //Para esvaziar a lista depois que todos os numeros terem sido sorteados
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteado = [];
    }

   //verificar se na lista ja tem o numero escolhido
   if (listaDeNumeroSorteado.includes(numeroEscolhido) ){
    return gerarNumeroAleatorio();
    } else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
    }
}

function limparCampo(){
    //pega o campo e deixa vazio após o jogo.
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}