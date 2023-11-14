// > Arrays

// - Como criar um array ?

let lista = ['Henrique', 30, 1.68, true]

console.log(lista)

// - Como acessar os elementos do array

console.log('Primeiro elemento:', lista[0])
console.log('Segundo elemento:', lista[1])
console.log('Terçeiro elemento:', lista[2])
console.log('Quarto elemento:', lista[3])

// - Percorrendo arrays

console.clear()

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

console.clear()

for (let elemento of lista) {
    console.log(elemento)
}

console.clear()

for (let indice in lista) {
    console.log(indice, lista[indice])
}