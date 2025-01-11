function adicionarJogador(nome, idade, posição, pontuação){
    let jogador = {
        Nome: nome,
        Idade: parseFloat(idade),
        Posição: posição,
        Pontuação: parseFloat(pontuação)
    };
    return jogador;
}
function buscarPorPosição(posição){
    let naPosição = []
    for (jogador of jogadores){
        if (jogador.Posição.toLowerCase() == posição.toLowerCase()){
            naPosição.push(jogador);
        }
    }
    if (naPosição.length == 0){
        console.log("Não há jogadores na posição.");
    }
    else{
        console.log("Na posição:")
        for (let i = 0; i< naPosição.length; i++){
            console.log(naPosição[i]);
    }
}
}
function listarTime(){
    for (jogador of jogadores){
        console.log(jogador)
    }
}
function calcularPontuaçãoMedia(){
    let media = 0;
    for (jogador of jogadores){
        media += jogador.Pontuação;

    }
    media = media /jogadores.length;
    return media.toFixed(2)
}
let entrada;
jogadores = [];
do {
    entrada = prompt("-----Escolha uma opção----\n[1] Adcionar jogador\n[2] Buscar por posição\n[3] Listar time\n[4] Calcular pontuação média\n[5] Sair");
    switch (entrada){
        case "1":
            let nome = prompt("Digite o nome do jogador:");
            let idade = prompt("Digite a idade do jogador:");
            let posição = prompt("Digite a posição do jogador:");
            let pontuação = prompt("Digite a pontuação do jogador:")
            jogadores.push(adicionarJogador(nome,idade,posição,pontuação));
            break;
        case "2":
            let pos = prompt("Digite a posição a ser procurada:");
            buscarPorPosição(pos);
            break;
        case "3":
            console.log("Lista:")
            listarTime();
            break;
        case "4":
            console.log(calcularPontuaçãoMedia())
            break;
        case "5":
            break;
        default:
            console.log("Opção inválida.")
    }
}while (entrada != "5");