function contar() {
    var inicio = document.getElementById('inicio') // buscando elementos do html
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) { // se algum dos campos nao forem preenchidos
        window.alert('Impossível contar. Verifique os valores e tente novamente.') // alerta
    } else { 
        res.innerHTML = 'Contando: '
        var f = Number(fim.value) // transformando o valor em numero
        var i = Number(inicio.value) // transformando o valor em numero
        var p = Number(passo.value) // transformando o valor em numero
        if (i < f) {
            for (c = i;c <= f;c +=p) { // contagem crescente
                res.innerHTML += `${c} \u{1F449}` // add um valor seguido do outro com emoji
            }
        } else {
            for (c = i;c >= f;c -=p) { // contagem decrescente
                res.innerHTML += `${c} \u{1F449}` // add um valor seguido do outro com emoji
            }
        }
        res.innerHTML += `\u{1F3C1}` // acrescentando a bandeiriha final
    }
}
