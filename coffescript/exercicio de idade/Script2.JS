function.verificar() {
    var data = new.date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textando')
    var res = document.querySelector('diversos')
    if (fano.Value.length == 0 || fano.Value > ano) {
        window.alert(`[ERRO] verifique os dados e tente novamente`)
    }   else{
        window.alert('tudo ok')
    }
}