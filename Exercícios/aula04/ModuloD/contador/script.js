function contar() {

    // Variáveis
    let entrada = window.document.getElementById('inicio')
    let final = window.document.getElementById('fim')
    let incremento = window.document.getElementById('passo')
    let mensagem = window.document.getElementById('resultado')

    let ent = Number(entrada.value)
    let fin = Number(final.value)
    let inc = Number(incremento.value)

    // Verificando valores de entrada
    if (entrada.value.length == 0 || final.value.length == 0 || incremento.value.length == 0) {
        mensagem.innerHTML = 'Impossível contar'
    } else {
        mensagem.innerHTML = 'Contando: <br>'
        if (inc <= 0)
            window.alert('ERRO! Passo inválido. Considerando passo = 1')
            inc = 1
        if (ent < fin) {
            // Contagem crescente
            for (let c = ent; c <= fin; c += inc) {
                mensagem.innerHTML += `${c} \u{1F449}`
            }
        } else { // Contagem regressiva
            for (let c = ent; c >= fin; c -= inc) {
                mensagem.innerHTML += `${c} \u{1F449}`
            }
        }
        mensagem.innerHTML += `\u{1F3C1}`

    }

}