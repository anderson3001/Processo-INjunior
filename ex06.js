//Sexto desafio do preocesso seletivo IN junior
function fibonacci(n){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = parseInt(prompt("Quantos números da série de fibonacci deseja ver?"));
console.log(`Os primeiros ${n} números são:`);
for (let i = 0; i < n; i++){
    console.log(fibonacci(i));
}