{
    {
        {
            var sera = 'Será???'
            console.log(sera) // dentro do escopo
        }
    }
}

console.log(sera) // fora do escopo

function teste() {
    var local = 123 // variável tem escopo local dentro de uma função
    console.log(local)
}
/*
teste()
console.log(local) // ReferenceError: local is not defined
*/