
// data
const diplayData = document.getElementById('data')

const data = new Date(); // data atual
const dataFormatada = data.toLocaleString('pt-BR'); // data no formato brasileiro
const apenasData = dataFormatada.substring(0, 10)
var nomeDoDia = data.toLocaleString('pt-BR', { weekday: 'long' }); // nome do dia em português


diplayData.innerText = `Hoje é ${nomeDoDia} ${apenasData}`



// assistencia salão
const botaoMenos = document.getElementById('menos')
const botaoMais = document.getElementById('mais')
const botaoSalvar = document.getElementById('salvar')
let assistenciaSalaoInput = document.getElementById('assistencia-salao-input')
const totalSalao = document.getElementById('total-salao')
let assistenciaSalao = 0
let assistenciaSalaoSalva = 0

function mostrarAssistencia() {
    assistenciaSalaoInput.innerText = assistenciaSalao

}

mostrarAssistencia()

function diminuir() {
    assistenciaSalao = assistenciaSalao - 1
    mostrarAssistencia()
}

function somar() {
    assistenciaSalao = assistenciaSalao + 1
    assistenciaSalaoInput.innerText = assistenciaSalao
}

function salvarAssistenciaSalao() {
    assistenciaSalaoSalva = assistenciaSalao
    totalSalao.innerText = `Total:${assistenciaSalaoSalva}`
    console.log(assistenciaSalaoSalva)
}

botaoMenos.addEventListener('click', diminuir)
botaoMais.addEventListener('click', somar)
botaoSalvar.addEventListener('click', salvarAssistenciaSalao)


let loopId

// ==========novo codigo do zoom =========

const inputZoom = document.querySelectorAll('.zoom-input')
const labelZoom = document.querySelectorAll('.zoom-label')


const botaoResultado = document.getElementById('resultado')
let resultadoX = []
function multiplica() {
    inputZoom.forEach((e, i) => {
        let multiplicaPor = 1 + i
        resultadoX[i] = multiplicaPor * Number(e.value)
    })
    labelZoom.forEach((e, i, t) => {
        let multiplicaPor = 1 + i
        e.innerText = `x ${multiplicaPor} = ${resultadoX[i]}`
    })
}

let resultadoSomaZoom = 0

function somaArray() {
    resultadoX.forEach((e,i) =>{
        resultadoSomaZoom += resultadoX[i]
    })
}


const totalZoom = document.getElementById('total-zoom')

function resultado() {
    somaArray()
    totalZoom.innerText = `Total zoom = ${resultadoSomaZoom}`
}




botaoResultado.addEventListener('click', resultado)







// ===========================================
const totalGeral = document.getElementById('total-geral')
let totalAssistencia = 0

function somaTudo() {
    totalAssistencia =  assistenciaSalaoSalva + resultadoSomaZoom
    totalGeral.innerText = `Total: ${totalAssistencia}`
}

const loop = () => {
    clearInterval(loopId)
    multiplica()

    somaTudo()
    loopId = setTimeout(() => {
        loop()
    }, 300)
}

loop()



// botaoResultadoZoom.addEventListener('click', mostrarResultado)
