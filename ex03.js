//Terceiro desafio do processo seletivo IN junior
function maiorMenor(array){
    let novoArray = [];
    for (let i = 0; i < array.length; i++){
        if (anoAtual - array[i] < 18){
            novoArray.push("Menor de idade");
        }
        else{
            novoArray.push("Maior de idade");
        }
    }
    return novoArray;
}

let anos = prompt("Digite os anos de nascimento (separados por espaços):");
const anoAtual = parseInt(prompt("Digite o ano atual:"));
const arrayAnos = anos.split(" ").map(ano => parseInt(ano));
idades = maiorMenor(arrayAnos);
for (let i = 0; i < idades.length; i++ ){
    console.log(`Pessoa ${i + 1}: ${idades[i]}`);
}