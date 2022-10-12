function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >= 0 && hora < 12){//BOM DIA!
        img.src = 'img/img-manhã.png'
        document.body.style.background = '#d1a598'
    }else if(hora >= 12 && hora <= 18){//BOA TARDE!
        img.src = 'img/img-tarde.png'
        document.body.style.background = '#dc843d'
    }
    else { 
        img.src = 'img/img-noite.png'
        document.body.style.background = '#705a81'
    }
}
