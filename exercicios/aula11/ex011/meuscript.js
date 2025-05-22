var local = document.getElementById ('país')
var país = ('brasil')
        
        
function calcular() {
    var local = document.getElementById('país')
    var res = document.getElementById('res')
    var país = (local.value)
    res.innerHTML = `Sua nacionalidade é <strong>${país}</strong>, logo você é <strong>Brasileiro</strong>`
    if(país != 'Brasil'){
        res.innerHTML = `Você é <strong>Estrangeiro</strong>!`
    }
}