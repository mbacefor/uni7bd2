/**
 * Programa para A = A + A*0.1 e B = B - A
 * Autor: Marcelo Bezerra
 */

//import * as BD from './bancoDados'
const BD = require('./bancoDados');

console.log("Programa 02");
console.log("Banco antes da atualização");
BD.ExibeBD();
console.log("Iniciar programa");
let A = BD.Read("A");
A = A * 1.1;
console.log("Antes do write");
console.log("A = " + A);
console.log("BD.Read('A') = " + BD.Read("A"));
BD.Write("A", A);
console.log("Depois do write");
console.log("A = " + A);
console.log("BD.Read('A') = " + BD.Read("A"));
let B = BD.Read("B");
B = B - A;
BD.Write("B", B);
BD.ExibeBD();