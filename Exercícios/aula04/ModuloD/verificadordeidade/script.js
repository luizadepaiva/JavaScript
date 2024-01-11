function verificar(){
    

    //Ano atual
    var data = new Date()
    var anoatual = data.getFullYear()
    
    // Calculando idade
    var ano = window.document.getElementById('ano')
    var idade = anoatual - ano;

    // Mostrando idade
    var resultado = window.document.getElementById('resultado')
    resultado.innerHTML = (`Tem ${idade} anos de idade`) 
}