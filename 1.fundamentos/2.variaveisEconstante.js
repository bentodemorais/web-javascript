// Palavras reservadas var, let e const

/* No paradigma funcional, deve-se buscar 
trabalhar com constantes */

var a = 3 // 'var' parece declarar a variável como <local>
let b = 4 // Regra geral: criar variaveis tipo 'let'
// let declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
var a = 30
// let b = 40
b = 40
console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5 // declaração de constante
// c = 50 // não atribui novo valor à constante declarada antes

console.log(c)
