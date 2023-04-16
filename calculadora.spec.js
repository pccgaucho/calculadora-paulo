const { exportAllDeclaration } = require("@babel/types");
const { it } = require("node:test");
const { soma, subtracao, multiplicacao, divisao } = require("./calculadora");


it("deve receber 10 e 20 e retornar 30", () => {
    const numeroUm = 10
    const numeroDois = 20
    const resultado = soma(numeroUm, numeroDois)
    expect(resultado).toBe(30)
})

it("deve receber 10 e 20 e retornar -10", () => {
    const numeroUm = 10
    const numeroDois = 20
    const resultado = subtracao(numeroUm, numeroDois)
    expect(resultado).toBe(-10)
})

it("deve receber 10 e 20 e retornar 200", () => {
    const numeroUm = 10
    const numeroDois = 20
    const resultado = multiplicacao(numeroUm, numeroDois)
    expect(resultado).toBe(200)
})

it("deve receber 20 e 10 e retornar 2", () => {
    const numeroUm = 20
    const numeroDois = 10
    const resultado = divisao(numeroUm, numeroDois)
    expect(resultado).toBe(2)
})