import {Negociacao} from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);


// Aprendizados da aula:
//
// * Configuração do compilador e papel do tsconfig.json;
// * Integração com scripts do Node.js;
// * Benefícios iniciais da linguagem TypeScript.