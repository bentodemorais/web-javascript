var numero = 1 // variável declarada em escopo global
{
    var numero = 2 // variável alterada em escopo local
    console.log('dentro = ', numero) // exibe 2
}
    console.log('fora = ', numero) // exibe 2
// recomenda-se evitar o escopo global em javascript