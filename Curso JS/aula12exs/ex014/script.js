function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora <12) {
        //console.log('Bom dia!')
        img.src = 'manha.jpg'
        document.body.style.background = '#DBB51D'
    } else if (hora <18) {
        //console.log('Boa tarde!')
        img.src = 'tarde.jpg'
        document.body.style.background = '#DB561D'
    } else {
        //console.log('Boa noite!')
        img.src = 'noite.jpg'
        document.body.style.background = '#101040'
    }
}
