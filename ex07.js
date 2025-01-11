//Sétimo desafio do processo seltivo IN junior
let frase = prompt("Digite uma frase ou palavra:");
let fraseFinal = frase.toLowerCase().replace(/\s/g,"");//expressão regular, \s representa os espaços em branco e g refere a todos os espaços em branco
let fraseAuxiliar = fraseFinal.slice();
let fraseIvertida = fraseAuxiliar.split("").reverse().join("");//divide em um array, inverte e transforma em string dnv
if (fraseFinal == fraseIvertida){
    console.log("É palíndromo");
}
else{
    console.log("Não é palídromo");
}