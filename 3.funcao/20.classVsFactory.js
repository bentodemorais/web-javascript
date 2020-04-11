// Criando objeto por uma classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Criando um objeto por uma factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome ainda é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

// Criando objeto por uma função construtora
function ConstruirPessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome continua sendo ${this.nome}`)
    }
}

const p3 = new ConstruirPessoa('João')
p3.falar()
