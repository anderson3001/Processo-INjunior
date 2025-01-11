//Quinto desafio do processo seletivo IN junior
const num = parseInt(prompt("Digite um número inteiro:"));
if (num % 3 == 0 && num % 5 == 0){
    console.log("fizzbuzz");
}
else if (num % 3 === 0) {
    console.log("fizz");
}
else if (num % 5 === 0) {
    console.log("buzz");
}
 else {
    console.log("");
}