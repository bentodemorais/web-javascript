console.log(typeof Object) // exibe function

class Produto {}
console.log(typeof Produto) // exibe function

// função sem retorno
function imprimir_Soma(a, b){
    console.log(a+b)
}

imprimir_Soma(2,3) // exibe 5
imprimir_Soma(2) // exibe NaN
imprimir_Soma(2,3,4,5,7,8) // exibe 5, soma apenas o primeiro e segundo (a, b)
imprimir_Soma() // exibe NaN

// função com retorno
function soma(a, b=1){ // inicializa a variável b com o valor 1
    return a + b
} 

console.log(soma(2,3)) // exibe 5
console.log(soma(2)) // exibe 3, pois agora mesmo não havendo atribuição a b ele foi inicializado 1

