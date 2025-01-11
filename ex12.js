//Décimo segundo desafio do processo seletivo IN junior
let entrada = prompt("Digite os elementos da lista separados por espaços:");
let lista = entrada.split(" ");
let naoRepete = false;
for (num of lista){
    let contador = 0;
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == num){
            contador += 1;

        }
    }
    if (contador != 2){
        console.log(`O número ${num} não se repete.`);
        break;
    }
}