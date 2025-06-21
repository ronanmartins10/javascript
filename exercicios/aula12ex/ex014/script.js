function atualizarHora() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}.`
    if (hora >=0 && hora < 12) {
        // bom dia 
    img.src = 'manha.jpg'
    document.body.style.background = '#daad33';
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#c9461e';
    } else {
        //boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#0b0b42';
    }
}

  function iniciarRelogio() {
    atualizarHora() 
    setInterval(atualizarHora, 1000) 
}
