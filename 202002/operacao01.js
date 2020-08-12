/**
 * Programa para transferir 50 de A para B
 * Autor: Marcelo Bezerra
 */

//import * as BD from './bancoDados'
const BD = require('./bancoDados');

console.log("Programa 01");
console.log("Banco antes da atualização");
BD.ExibeBD();
console.log("Iniciar programa");
let A = BD.Read("A");
A = A - 50;
console.log("Antes do write");
console.log("A = " + A);
console.log("BD.Read('A') = " + BD.Read("A"));
BD.Write("A", A);
console.log("Depois do write");
console.log("A = " + A);
console.log("BD.Read('A') = " + BD.Read("A"));
let B = BD.Read("B");
B = B + 50;
BD.Write("B", B);
BD.ExibeBD();

