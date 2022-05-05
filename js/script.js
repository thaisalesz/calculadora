
let primeiroNumero = document.getElementById("primeiro-numero")
let segundoNumero = document.getElementById("segundo-numero")
let operacao = document.getElementById("operacao")
let botao = document.getElementById("btn-calcula")

let resultado = document.getElementById("resultado")

botao.addEventListener("click", calculadora)

function calculadora(){
    let num1 = parseInt(primeiroNumero.value)
    let num2 = parseInt(segundoNumero.value)
    let operador = operacao.value
    let result

    if(operador == "soma"){
        result = soma(num1,num2)
    }else if(operador == "subtrai"){
        result = subtracao(num1, num2)
    }else if(operador == "multiplica"){
        result = multiplica(num1, num2)
    }else if(operador == "divide"){
        result = divisao(num1, num2)
    }

    return resultado.innerHTML = `O resultado da operação é ${result}`
}

function soma(a,b){
    return a + b
}

function subtracao(a,b){
    return a - b
}

function multiplica(a,b){
    return a * b
}

function divisao(a,b){
    return a/b
}

