function verificar(){
    
    // Declara resultado
    var resultado = window.document.getElementById('resultado')

    //Ano atual
    var data = new Date()
    var anoatual = data.getFullYear()
    
    // Calcula idade
    var ano = document.getElementById('ano')
    var idade = anoatual - Number(ano.value)

    // Verifica ano entrada
    if (ano.value.length == 0 || ano.value > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
    
        // Verifica gênero e idade 
    var genero = document.getElementsByName('genero')
    var gen = ''
    if (genero[0].checked) {
        gen = 'Mulher'
    } else {
        gen = 'Homem'
    }
    
    resultado.innerHTML = (`${gen} com ${idade} anos de idade.`) 
    }
}