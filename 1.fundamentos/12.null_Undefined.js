let valor // Undefined, célula para armazenamento de valor não definida.
console.log(valor)

valor = null // sem valor atribuido, célula para armazenamento de valor nula.
console.log(valor)
/* Por padrão deve-se atribuir o null para zerar variáveis. */
// console.log(valor.toString()) // TypeError: Cannot read property 'toString' of null.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco) // exibe o conteúdo da célula preço { 3.5 }.
console.log(produto) // exibe o conteúdo da célula produto { preco: 3.5 }.

produto.preco = undefined // evite atribuir undefined.
console.log(produto)

console.log(!!produto.preco) // exibe a conversão de undefined em false.
console.log(produto) // exibe o conteúdo da célula.

delete produto.preco // retira o atriuto preço do objeto produto, deletando o valor contido na célula preço.
console.log(produto.preco) // exibe o valor undefined para célula preço.
console.log(produto) // exibe o valor vazio para célula produto.
console.log(typeof preco) // preço é do tipo indefinido, pois não foi inicializado.
console.log(typeof produto) // produto é do tipo objeto, inicializado como constante vazia.

produto.preco = null // sem preço, o valor null é atribuído a célula preço.
console.log(!!produto.preco) // exibe a conversão de null em false.
console.log(produto) // exibe o valor da célula produto.

console.log(produto.toString()) // object da classe Object. 
console.log(typeof produto) // object.
// console.log(produto.preco.toString) // TypeError: Cannot read property 'toString' of null.
console.log(typeof preco)  // exibe tipo undefined. A liguagem atribuiu undefined ao declarar o valor como null.
console.log(produto.preco) // exibe o valor null.