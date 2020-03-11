let dobro = function (a) {
    return 2 * a
}
// a função arrow é sempre uma funcao anonima
dobro = (a) => {
    return a * 2
}

dobro = (a) => 2 * a // retorno implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola'
console.log(ola())
