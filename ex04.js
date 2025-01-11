//Quarto desafio do processo seletivo IN junior
const cambioEuro = 6.10;
const cambioDolar = 5.70;

const valor = parseFloat(prompt("Digite um valor monetário:"));
const dolar = valor * cambioDolar;
const euro = valor * cambioEuro;
console.log(`O valor inserido foi R$${valor.toFixed(2)}.\nValores após conversão: $${dolar.toFixed(2)}  €${euro.toFixed(2)}`);