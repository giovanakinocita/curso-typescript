import {Negociacao} from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);


// Nesta aula aprendi:
//
// * Introdução ao projeto e sua estrutura;
// * Um pouco sobre módulos do ECMASCRIPT;
// * Modelagem de uma Negociação em Javascript;
// * Buracos em nossa modelagem por limitações da linguagem Javascript.