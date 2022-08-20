/**
 * Programa para aumentar 10% em A
 * Autor: Marcelo Bezerra
 */ 

//import * as BD from './bancoDados'
const BD = require('./bancoDados');

console.log("Programa 02");
console.log("Banco antes da atualização");
BD.ExibeBD();
console.log("Iniciar programa");
let A = BD.Read("A");
A = (A*1.1).toFixed(0);
console.log("Antes do write");
console.log("A = " + A)
console.log("BD.Read('A') = " + BD.Read("A"));
BD.Write("A", A);
console.log("Depois do write");
console.log("A = " + A);
console.log("BD.Read('A') = " + BD.Read("A"));
BD.ExibeBD();