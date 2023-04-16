function soma(numeroUm, numeroDois) {
    const resultado = numeroUm + numeroDois
    return resultado    
}

function subtracao(numeroUm, numeroDois) {
    const resultado = numeroUm - numeroDois
    return resultado    
}

function multiplicacao(numeroUm, numeroDois) {
    const resultado = numeroUm * numeroDois
    return resultado    
}

function divisao(numeroUm, numeroDois) {
    const resultado = numeroUm / numeroDois
    return resultado    
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}