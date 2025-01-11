//Terceiro desafio do processo seletivo IN junior
let anos = prompt("Digite os anos de nascimentos (separados por espaços):");
const anoAtual = parseInt(prompt("Digite o ano atual:"));
const arrayAnos = anos.split(" ").map(ano => parseInt(ano));
for (let i = 0; i < arrayAnos.length; i++){
    if (anoAtual - arrayAnos[i] < 18){
        console.log(`Pessoa ${i + 1}: Menor de idade.`);
    }
    else{
        console.log(`Pessoa ${i + 1}: Maior de idade.`);
    }
}