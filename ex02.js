//Segundo desafio do processo seletivo IN junior
function Fatorial(num){
    let fat = num 
    for (let i = 1; i < num; i++){
        fat *= i;
    }
    console.log("O fatorial é: " + fat);
    resp = prompt("Deseja calcular outro fatorial?");
    if (resp != "s" && resp != "S" && resp != "n" && resp != "N"){
        do {
            alert("Resposta inválida.")
            resp = prompt("Deseja calcular outro fatorial?");
        }while (resp != "s" && resp != "S" && resp != "n" && resp != "N");
    }
if (resp == "s" || resp == "S"){
    num = parseFloat(prompt("Digite um número inteiro positivo: "));
    Fatorial(num);
}
else if (resp == "n" || resp == "N"){
    return;
}
}

let num = parseFloat(prompt("Digite um número inteiro positivo: "));
if (num <= 0){
    do {
        alert("Número é menor ou igual a 0.");
        num = prompt("Digite um número inteiro positivo: ");
    }while (num <= 0);
}
Fatorial(num);
