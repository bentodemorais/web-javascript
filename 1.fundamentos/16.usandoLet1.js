// as variáveis do tipo let tem escopo: global, de função e de bloco
// as variáveis do tipo var tem escopo: global e de função
    var numero = 1 // variável global
{
    let numero = 2 // variável local
    console.log('dentro = ', numero)
}
    console.log('fora = ', numero)