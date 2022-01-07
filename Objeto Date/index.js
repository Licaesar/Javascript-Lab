/* quatroHoras = 60 * 60 * 4 * 1000;
umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + quatroHoras + umDia); */


/* const data = new Date('2021-04-20 20:20:16'); // a, m, d, h, M
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa no zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia da Semana', data.getDay()); // 0 - Domingo, 6 - Sábado */

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());


    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);
