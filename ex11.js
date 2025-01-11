//Décimo primeiro desafio do processo seletivo IN junior
function verificaOrdem (lista){
    let contador = 0;
    for  (let i = 0; i < lista.length - 1; i++){
        if (lista[i] < lista[i + 1]){
            contador += 1;
        }
    }
    return contador;
}
let lista = [];
let ent = null;
const tam = parseInt(prompt("Digite o tamanho do vetor:"));
for (let i = 0; i < tam; i++){
    ent = parseInt(prompt("Digite o número:"));
    lista.push(ent)
}
console.log(`Existem ${verificaOrdem(lista)} números em ordem crescente em relação ao anterior.`)