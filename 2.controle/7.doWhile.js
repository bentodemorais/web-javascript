function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

let opcao = -1 // iniciado em condicao falsa para while

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
} while (opcao != -1) // parada de condicao apos o do 

console.log(`Ate a proxima.`)
