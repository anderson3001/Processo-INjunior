//Décimo dessfio do processo seletivo IN junior
let fila = ["Maria", "João", "Matheus"];
let entrada = null;
let novoCliente = null;
let antigoCliente = null
do{
    for (let i = 0; i < fila.length;i++){
        console.log(`${i + 1}° ${fila[i]}`);
    }
    console.log("-----Escolha uma opção----");
    console.log("[1] Novo cliente");
    console.log("[2] Atender cliente");
    console.log("[3] Sair");
    entrada = prompt("Opção escolhida:");

    switch (entrada){
        case "1":
            novoCliente = prompt("Digite o nome do cliente:");
            fila.push(novoCliente);
            break;
        case "2":
            antigoCliente = fila.shift();
            console.log(`Sendo atendido(a): ${antigoCliente}`);
            break;
        default:
            console.log("Opção inválida.");
    }
}while (entrada != "3");