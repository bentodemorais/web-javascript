let isAtivo = false
console.log(isAtivo)

isAtivo = true // valor padrão em js é true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3) // todos os números inteiros são verdadeiros exceto zero
console.log(!!-1)
console.log(!!' ') // o espaço em branco retorna verdadeiro
console.log(!!'texto')
console.log(!![]) // um array é verdadeiro
console.log(!!{}) // um objeto literal é verdadeiro
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // o resultado de atribuição é verdadeiro se o valor atribuido for verdadeiro

console.log('os falsos...')
console.log(!!0) // zero é falso
console.log(!!'') // string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // sera falso se for atribuido um valor falso a variável

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // retorna o primeiro valor verdadeiro

let nome =  ''
console.log(nome || 'Desconhecido')
