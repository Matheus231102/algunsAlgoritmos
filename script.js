// testando luhn algoritmo

// transformar numero recebido em array de numeros inteiros 
function transformarEmArray(numeroteste) {
    let myFunc = num => Number(num)
    let arrayNumber = Array.from(String(numeroteste), myFunc)
    return arrayNumber
}

function numerosSelecionados (arrayNumber) {
    let arrayNumerosSelecionados = []
    for (let index = arrayNumber.length - 2 ; index >= 0 ; index = index - 2) {
        arrayNumerosSelecionados.unshift(arrayNumber[index])
    }
    return arrayNumerosSelecionados
}

function numerosNaoSelecionados (arrayNumber) {
    let arrayNumerosNaoSelecionados = []
    for (let index = arrayNumber.length - 1 ; index >= 0 ; index = index - 2) {
        arrayNumerosNaoSelecionados.unshift(arrayNumber[index])
    }
    return arrayNumerosNaoSelecionados
}

function somarDobroMaiorQue9 (num) {
    let number = transformarEmArray(num * 2)
    return number[0] + number[1]
}

function somarDobroDosNumerosSelecionados (arrayNumerosSelecionados) {
    // irá vir uma array de numeros selecionados
    let soma = 0
    for (let index = 0 ; index < arrayNumerosSelecionados.length ; index++) {
        // identificar se numero selecionado vezes 2 é maior que 9 
        if ((arrayNumerosSelecionados[index] * 2) > 9) {
            let numerotransformado = somarDobroMaiorQue9(arrayNumerosSelecionados[index])            
            soma = soma + numerotransformado
        } else {
            soma = soma + (arrayNumerosSelecionados[index] * 2)
        }
    }
    return soma
} 

function somarArray (arrayNumerosNaoSelecionados) {
    let soma = 0
    for (let index = 0 ; index < arrayNumerosNaoSelecionados.length ; index++) {        
        soma = soma + arrayNumerosNaoSelecionados[index]
    } return soma
}
// let numeroTeste = 4003600000000014

function validationLuhn (numeroteste) {
    let numerosSel = numerosSelecionados(transformarEmArray(numeroteste))
    let numerosNaoSel = numerosNaoSelecionados(transformarEmArray(numeroteste))
    let somatotal =  transformarEmArray(somarDobroDosNumerosSelecionados(numerosSel) + somarArray(numerosNaoSel))
    // somatotal = 20
    
    if (somatotal[somatotal.length - 1] == 0) {
        return true
    } else return false
}

/*
id="numberid"
id="buttonid"
id="campoid"
*/

