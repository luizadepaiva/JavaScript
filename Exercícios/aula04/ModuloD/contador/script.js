// Variáveis
var entrada = window.document.getElementById('inicio')
var final = window.document.getElementById('fim')
var incremento = window.document.getElementById('passo')
var mensagem = window.document.getElementById('resultado')
// Condições

if (incremento==0){
    window.alert('Valor de passo inserido = 0. Consirando passo = 1')
} else if{
    mensagem.innerHTML = `Valor de entrada é ${entrada}, valor final é ${fim} e o valor do passo é ${incremento}`
}

