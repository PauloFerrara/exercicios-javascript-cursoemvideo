function verificar() {
    var data = new Date // buscar a data atual
    var ano = data.getFullYear() // buscar o ano atual
    var fano = document.getElementById('ano') // buscar o elemento ano 
    var res = document.getElementById('res') // buscar o elemento res
    if (fano.value.length == 0 || Number(fano.value) > ano) { // se o valor do ano nao for digitado ou o ano digitado for maior que o atual
        window.alert('Erro. Verifique os dados inseridos.')
    } else {
        var fsex = document.getElementsByName('sex') //existe a opção [0]-Masc e [1]-Fem.
        var idade = ano - Number(fano.value) //ano atual menos ano digitado
        var genero = ''
        var img = document.getElementById('foto') // buscar o elemento de id foto
        if (fsex[0].checked) { //se o sexo marcado for masculino
            genero = 'Homem'
            if (idade<15) {
                //criança
                img.setAttribute('src','menino.jpg') // atribuir uma imagem
            } else if (idade<24) {
                //jovem
                img.setAttribute('src','homem.jpg')
            } else if (idade<60) {
                //adulto
                img.setAttribute('src','adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade<15) {
                //criança
                img.setAttribute('src','menina.jpg')
            } else if (idade<24) {
                //jovem
                img.setAttribute('src','mulher.jpg')
            } else if (idade<60) {
                //adulto
                img.setAttribute('src','adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
    }
    res.style.textAlign = 'center'//alinhando itens de resposta no centro
    res.innerHTML = `Detectamos que é ${genero} com ${idade} anos de idade.`// substituindo texto de resposta
    img.style.width = '200px' // estilizar a var img
    img.style.height = '200px' // estilizar a var img
    img.style.borderRadius = '100px' // estilizar a var img
    res.appendChild(img) // serve para fazer a imagem aparecer
}