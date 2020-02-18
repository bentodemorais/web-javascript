const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` // interpolação
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)
// chamada de função na interpolação
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) //interpolação
console.log('O tipo de up é ' + typeof up)
