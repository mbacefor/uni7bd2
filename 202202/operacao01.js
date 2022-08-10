//import * as BD from './bancoDados'
const BD = require('./bancoDados');

console.log("Programa 01");
console.log("Banco antes da atualização");
BD.ExibeBD();

console.log("Inicio execução programa 1");
let A = BD.Read("A");
A = A + 50;
BD.Write("A", A);
let B = BD.Read("B");
B = B - 50;
BD.Write("B", B);
console.log(A);
console.log(B);