function Raizes(){
    const a = parseFloat(prompt("Digite o valor do coeficiente a: "));
    const b = parseFloat(prompt("Digite o valor do coeficiente b: "));
    const c = parseFloat(prompt("Digite o valor do coeficiente c: "));
    const delta = b**2 - (4 * a * c);

    if (delta < 0){
        console.log('Essa equação não possui raízes reais.');
        return;
    }
    else if (delta == 0){
        const x = -b / (2*a);
        console.log('A equação possui uma única raíz real: x = '+ x);
        return;
    }
    else{
        const x1 = (-b - Math.sqrt(delta))/ (2*a);
        const x2 = (-b + Math.sqrt(delta))/ (2*a);
        console.log('A equação possui duas raízes reais: x1 = '+ x1 + ' e x2 = ' + x2);
        return;
   }
    
}
Raizes()