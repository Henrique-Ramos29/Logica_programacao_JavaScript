// > (Repetição) Laços Condicionais

const input = require('readline-sync')

const numero_sorteado = 6;

let numero = Number(input.question('Qual numero voce escolher ?'))


// if (numero === numero_sorteado) {
//    console.log('Você acertou !')
//} else {
//   console.log('Voce errou !')
//}


while (numero !== numero_sorteado) {
   console.log('Voce errou o numero. Tente novamente...')

   numero = Number(input.question('Qual numero voce escolher ?'))
}

console.log('Voce acertou !!!')

// Biblioteca NPM INSTALL READLINE-SYNC
