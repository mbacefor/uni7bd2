/**
 * Programa para somar todos os valores
 * Autor: Marcelo Bezerra
 */

//import * as BD from './bancoDados'
const BD = require('./bancoDados');

console.log("Programa 01");
console.log("Banco antes da atualização");
BD.ExibeBD();
console.log("Iniciar programa");
let soma = 0;
let A = BD.Read("A");
soma = soma + A;

A = BD.Read("B");
soma = soma + A;

A = BD.Read("C");
soma = soma + A;

A = BD.Read("D");
soma = soma + A;

console.log("soma =" + soma  );

BD.ExibeBD();

