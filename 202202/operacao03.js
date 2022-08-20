/**
 * Programa Soma de todos os dados
 * Autor: Marcelo Bezerra
 */

//import * as BD from './bancoDados'
const BD = require('./bancoDados');

console.log("Programa 03");
console.log("Banco antes da atualização");
BD.ExibeBD();
console.log("Iniciar programa");
let TOTAL = 0;
let A = BD.Read("A");
TOTAL += A ;
let B = BD.Read("B");
TOTAL += B ;
let C = BD.Read("C");
TOTAL += C ;
let D = BD.Read("D");
TOTAL += D ;

console.log("Valor Total:" + TOTAL);

BD.ExibeBD();