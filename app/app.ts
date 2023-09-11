import {Negociacao} from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);


// Aprendizado da aula:
//
// Modificador private para melhor adaptação dos
// navegadores atuais (09/2023)