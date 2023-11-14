// Estrutura Condiocionais

const idade = 20;

if (idade >= 18) {
    console.log('Você e maior de idade !')
} else {
    console.log('Você e menor de idade !')
}

// Se media  >= 7, aprovado
// Se media < 7 e media >= 5, Recuperação
// Se media < 5, Recuperação

console.clear() //Limpando as saidas anteriores

let media = 10;

if (media => 7) {
    console.log('Aprovado(a)')
} else if (media < 7 && media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovada(o)')
}
