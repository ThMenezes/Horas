function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')

    let agora = new Date()
    let hora = agora.getHours() 


    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`
        img.src = 'assets/img/manhã.png'
        document.body.style.background = '#89CFFD'

    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`
        img.src = 'assets/img/tarde.png'
        document.body.style.background = '#FF7B54'

    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`
        img.src = 'assets/img/noite.png'
        document.body.style.background = '#434242'
    }

}