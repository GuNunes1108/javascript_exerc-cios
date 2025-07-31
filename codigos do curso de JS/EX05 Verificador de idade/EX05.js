function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (formAno.value.length === 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/muiezinha.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/muie j.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/muie.jpg')
            } else {
                img.setAttribute('src', 'img/muie v.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/carinha.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/cara j.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/cara.jpg')
            } else {
                img.setAttribute('src', 'img/cara V')
            }
        }
        res.innerHTML = `${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}