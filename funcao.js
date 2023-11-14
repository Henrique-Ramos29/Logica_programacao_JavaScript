// Funções

// Definição da função 

function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso cursio de JavaScript !')
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções ?

function saudacao(nome, curso='JacaScript') {
    console.log(`Olá, ${nome} seja bem-vindo(a) ao nosso cursio de ${curso} !`)
}

saudacao('Henrique Ramos') // ou saudacao('Henrique', 'JavaScript')

// Retorno da função

function soma(numero1, numero2) {
    console.log('Qualquer coisa ')
     return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado / 2)

console.clear()

///////////////

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }
    return false
}