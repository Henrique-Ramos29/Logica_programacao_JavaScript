// > Coerção (Conversão) de tipos

// - 1. Coerção Explicita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDaString = String(numero)
console.log(numeroEmFormatoDaString, typeof numeroEmFormatoDaString)

console.log(Number('124355'))
console.log(parseFloat('2232434.565'))
console.log(parseInt('1323245.986'))
console.log(Boolean(1))

// - 2. Coerção Implicita (Automático)

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'asasa')

// Outro exemplos

// Qual será a saida desse código ?

 let n = 1 + '1';

 n = n - 1;

 console.log(n);


// // Qual será a saida desse código ?
 
console.log(2 + 3 + 4 + '5');

// // Qual será a saida desse código ?
console.log('5' + 2 + 3 + 4);

// // Qual será a saida desse código ?
console.log("10" - "4" - "3" - 2 + "5");