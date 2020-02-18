console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'// atribuição de valor em objeto inicializado
//obj1['nome'] = 'Bola2' // forma alternativa de atribuição
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // this classifica o atributo como público
    this.exec = function(){
        console.log('Exec...')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2)
console.log(obj3)
obj3.exec()
