const botoes = document.getElementById('divBotoes')

const img = document.getElementById('imgSemafaro')
var coresIndex = 0
var idIntervalo = null

const semafaro = (event) => {
    pararIntervalo()
    ligar[event.target.id]()
}

const mudarCor = () => {
    const cores = ['btnVerde', 'btnAmarelo', 'btnVermelho']
    const cor = cores[coresIndex]

    ligar[cor]()
    proximoIndex()
}

const proximoIndex = () => {
    if (coresIndex === 2) {
        coresIndex = 0
    } else {
        coresIndex++
    }
}

const pararIntervalo = () => {
    clearInterval(idIntervalo)
}

const ligar = {
    'btnVermelho': () => img.src = './img/semafaroVermelho.png',
    'btnAmarelo': () => img.src = './img/semafaroAmarelo.png',
    'btnVerde': () => img.src = './img/semafaroVerde.png',
    'btnAutomatico': () => idIntervalo = setInterval(mudarCor, 3000)
}


botoes.addEventListener('click', semafaro)