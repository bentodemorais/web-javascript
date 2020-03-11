const notas = [7.7, 6.5, 8.9, 3.6, 7.1, 9.0]

// sem callBack
let notasBaixas = []
for ( let i in notas ) {
    if ( notas[i] < 7 ) {
        notasBaixas.push( notas[i] )
    }
}

console.log(notasBaixas)

// com callBack
notasBaixas2 = notas.filter( function (nota) {
    return nota < 7
} )

console.log(notasBaixas2)

// usando arrow
const notasBaixas3 = notas.filter( nota => nota < 7 )
console.log(notasBaixas3)

// reuso de codigo
const notasMenorque7 = nota => nota < 7
const notasBaixas3 = notas.filter( notasMenorque7 )
console.log(notasBaixas3)

