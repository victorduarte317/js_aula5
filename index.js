function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`); // Define a ordem que os argumentos serão executados, x1 | operador aritmético | x2.
}

let resultado = calc(2, 1, "-"); // Os parâmetros são passados em ordem. o "1" pro "x1", "2" pro "x2" e assim por diante.
console.log(resultado);


/* Função anônima

(function(x1, x2) {

    return x1 + x2;
} (1, 2)

);

Arrow function

let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

 let resultado = calc(2, 1, "-"); 
 console.log(resultado);
*/ 

