// Sintaxe strict mode para todo o script
'use strict';
/**
 * resultado aproximado de uma circunferência de diâmetro igual a 20.000
 *
 * @type {number}
 */
exports.PI = Math.PI; // 3.141592653589793

/**
 * recebe por parâmetro uma quantidade indefinida de números e efetua a soma dos
 * mesmos.
 *
 * @param {number[]} params
 * @returns {number} valor soma dos parâmetros
 */
exports.soma = function soma (...params) {
 return params.reduce((a, b) => a + b, 0)
}