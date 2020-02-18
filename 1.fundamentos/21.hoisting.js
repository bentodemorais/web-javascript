// O conceito de hoisting é içar a variável para uma chamada antes de haver sido declarada
// var a
console.log('a =', a) // undefined
var a = 2 // hoisting var a
console.log('a =', a)

// o efeito de içamento na variável do tipo let não ocorre
/*
console.log('b=', b) //ReferenceError: Cannot access 'b' before initialization
let b = 2
console.log('b=', b)
*/