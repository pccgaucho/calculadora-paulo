

const {soma, subtracao, multiplicacao, divisao} = require("./calculadora")

const numeroUm = 10
const numeroDois = 20
const resultadoSoma = soma(numeroUm, numeroDois)
const resultadoSubtracao = subtracao(numeroUm, numeroDois)
const resultadoMultiplicacao = multiplicacao(numeroUm, numeroDois)
const resultadoDivisao = divisao(numeroUm, numeroDois)



console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)