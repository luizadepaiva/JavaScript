function carregar(){
    //Declarando variáveis

    var subt = window.document.querySelector('div#subtitulo')
    var imag = window.document.querySelector('div#imagem')
    var mudacor = window.document.querySelector('section#cordefundo')

    //Hora do sistema    
    var data = new Date()
    //var hora = data.getHours()

    var hora = 18 0    

    //Mostrando a hora
    subt.innerHTML = (`Agora são ${hora} horas!`)

 
    if (hora >=0 && hora < 12) {
        mudacor.style.backgroundColor = "#FED388"
        subt.style.color = "black"
        imag.src='imagemmanha.png'


    } else if (hora >= 12 && hora < 18) {
        mudacor.style.backgroundColor = '#E49160'
        subt.style.color = 'black'
        imag.src = 'imagemtarde.png'


    } else {
        mudacor.style.backgroundColor = "#996969"
        imag.src='imagemnoite.png'


    }

}

