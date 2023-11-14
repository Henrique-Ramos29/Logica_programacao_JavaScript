// Objetos 

// Como adicionar um objeto no JavaScript ?

let pessoa = {
    nome: 'Henrique',
    idade: 26,
    altura: 1.68
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)

// Como adicionar um par chave-valor?

pessoa.altura = 1.68

console.log(pessoa)

// Como remover um par chave-valor?

delete pessoa.altura

console.log(pessoa)

console.clear()

// Como percorrer ?

for(let chave in pessoa) {
    console.log(chave)
}
