function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel} km/h</strong>`
    if(vel > 60) {
        res.innerHTML += '<p>Voce foi <strong>multado</strong> por excesso de velocidade</p>'
    }
    res.innerHTML += '<p> dirija sempre com cinto de segurança </p>'

}

