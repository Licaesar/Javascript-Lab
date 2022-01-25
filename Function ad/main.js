// Declaração de função (Function hoisting) o motor do javascrip sempre coloca as funções no top da execulção
function falaOi() {
    console.log('Oie')
}
falaOi();

// first-class objects (Objetos de primeira classe), tratar  uma função como uma variável 
// Function expression, um variavel receber um função
const souUmDado = function() {
    console.log('Sou um dado')
};

function execultaFucao(funcao) {
    console.log('Vou executar sua função abaixo');
    funcao();
}
execultaFucao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};
funcaoArrow();

// Todas essas funções são de primeira classe, tranto ela como dado


// Função em Objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();
