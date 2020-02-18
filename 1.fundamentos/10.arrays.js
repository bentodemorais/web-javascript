const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[1])
console.log(valores[4]) // undefined 

valores[4] = 10
console.log(valores[4])
console.log(valores)

console.log(valores.length)
console.log(valores)

valores[10] = 10
console.log(valores)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira o último valor inserido no array
delete valores[0] // deleta o valor indicado na indexação
console.log(valores)

console.log(typeof valores) // object. Em javascript um array é um objeto


