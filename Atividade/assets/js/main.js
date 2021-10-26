// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#Peso');
    const inputAltura = e.target.querySelector('#Altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválido', false)
        return;
    }

    const imc = getImc(peso, altura); // Varivavel do valor do IMC
    const nivelImc = getNivelImc(imc); // Variavel de nivel do IMC

    // mostrar mensagem
    
    const msg = `Seu IMC é ${imc}  (${nivelImc})`

    setResultado(msg, true);

});

// Nivel do imc
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];


}

// Função de calculo do imc
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// FUNÇÃO DO P

function criaP () {
    const p = document.createElement('p');
    return p;
  }


// Função de mostrar o resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();
  
    if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
      p.classList.add('bad');
    }
  
    p.innerHTML = msg;
    resultado.appendChild(p);
}