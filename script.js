//declaracao de variavel
let texto = window.prompt( "Digite seu nome: ");

document.getElementById("titulo").innerHTML = "Meu nome é " + texto;

//instancia o obj do botao

const btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');

//evento de clique

btnTrocaCor.addEventListener("click", () => {

    //valida o nome da cor

if( caixaTexto.className === "verde"){
    caixaTexto.classList.add('amarelo');
    caixaTexto.classList.remove('verde');
}else{
    caixaTexto.classList.add('verde');
    caixaTexto.classList.remove('amarelo')
}

//exibe no console

console.log(caixaTexto.className);
});

//troca texto

const btnTrocaTexto = document.getElementById("trocaTexto");

btnTrocaTexto.addEventListener("click", () => {

if( caixaTexto.innerText === "banana" ){
    document.getElementById("caixa").innerHTML = "limão";
}else{
    document.getElementById("caixa").innerHTML = "banana";
}

});