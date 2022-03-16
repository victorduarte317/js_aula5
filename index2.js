// Classes

/* 
let celular = function() {
    let cor = "prata";
}

console.log(celular);

Esse códgio cria uma classe "celular" com uma função, cria uma variável que define a 
cor desse celular. Fora dela, o console.log chama a classe, mas a variável dela não aparece.
Isso acontece pois é uma variável que está alocando a cor, e não um objeto. 
Pra se tornar um objeto:

let celular = function() {
    this.cor = "prata";
}

console.log(celular.prata);

esse código vai acessar a classe celular, pegar o valor do objeto "cor" e mostrar no console log.

Agora, usando um método:



let celular = function() {
    this.cor = "prata";

    this.ligar = function() {
        console.log ("fazendo uma ligação");
        return "ligando"; // Sem esse return, o texto de cima aparece, em baixo fica 'undefined'.

    }
}

let objeto = new celular();

console.log(objeto.ligar()); 

Todo esse código constitui a sintaxe ANTIGA da declaração de classes no JS. 

Nas novas versões, esse código ficaria assim:
*/

class celular {
        constructor () { // Chamando o construtor pra poder colocar o objeto na classe
            this.cor = 'prata'; 
        }

        ligar() { // Como ligar era uma função, pode ser colocada dessa forma mesmo
            console.log("uma ligação");
            return ligando;
        }
}

let objeto = new celular();

console.log(objeto);
// Manipulação de eventos.

window.addEventListener('focus', event => { // Adiciona uma "escuta" de eventos à janela do navegador, passa o argumento 'focus' e cria um evento por arrow function.
    console.log('foco') // Faz com que, se o usuário sair e voltar - "focando" na página novamente - a palavra 'foco' seja exibida no console.
});

document.addEventListener('click', event => { // Escuta de eventos ao clique do usuário
    console.log('clique') // Assim que o evento acontecer - ou seja, o usuário clicar - a palavra 'clique' aparecerá no console.

});

// let data = Date.now(); Vai mostrar a "timestamp" da data de hoje. Timestamp é a forma que a data é codificada e armazenada dentro do javascript.

let data = new Date(); // Vai mostrar a data com dia da semana, mês, dia do mês, ano, horário e fuso horário. Porém, ainda não é intuitivo, já que as informações estão em inglês.


console.log(data.toLocaleDateString("pt-BR")); 

// O método 'toLocaleDateString' vai receber o locale como parâmetro - nesse caso, o pt-BR.
// Com essa linha, as informações serão formatadas de acordo com o padrão pt-BR.

//

let avioes = ['TAM', 'GOL', 'AZUL', 'EMIRADES', 'AIR FRANCE']; 

avioes.forEach(function(value, index) {
    console.log(value, index    );
});

