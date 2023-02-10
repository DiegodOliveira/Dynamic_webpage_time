function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        document.body.style.background = '#e2cd9f'
        img.src = 'fotomanha.png'
    }
    else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        document.body.style.background = '#b9846f'
        img.src = 'fototarde.png'
    }
    else{
        //Boa noite!
        document.body.style.background = '#515154'
        img.src = 'fotonoite.png'
    }
}