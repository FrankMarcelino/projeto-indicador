
// data
const diplayData = document.getElementById('data')

const data = new Date(); // data atual
const dataFormatada = data.toLocaleString('pt-BR'); // data no formato brasileiro
const apenasData = dataFormatada.substring(0,10)
var nomeDoDia = data.toLocaleString('pt-BR', {weekday: 'long'}); // nome do dia em português


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

// assistencia Zoom

const inputX1 = document.querySelector('#x1')
const inputX2 = document.querySelector('#x2')
const inputX3 = document.querySelector('#x3')
const inputX4 = document.querySelector('#x4')
const inputX5 = document.querySelector('#x5')
const inputX6 = document.querySelector('#x6')



let resultadoX1 = 0
let resultadoX2 = 0
let resultadoX3 = 0
let resultadoX4 = 0
let resultadoX5 = 0
let resultadoX6 = 0



const label1 = document.getElementById('l1')
const label2 = document.getElementById('l2')
const label3 = document.getElementById('l3')
const label4 = document.getElementById('l4')
const label5 = document.getElementById('l5')
const label6 = document.getElementById('l6')


 
const totalZoom = document.getElementById('total-zoom')

let loopId


function multiplica() {
    resultadoX1 = Number(inputX1.value) * 1
    resultadoX2 = Number(inputX2.value) * 2
    resultadoX3 = Number(inputX3.value) * 3
    resultadoX4 = Number(inputX4.value) * 4
    resultadoX5 = Number(inputX5.value) * 5 
    resultadoX6 = Number(inputX6.value) * 6 
}


function resultado() {
    label1.innerText = `x 1 = ${resultadoX1}`
    label2.innerText = `x 2 = ${resultadoX2}`
    label3.innerText = `x 3 = ${resultadoX3}`
    label4.innerText = `x 4 = ${resultadoX4}`
    label5.innerText = `x 5 = ${resultadoX5}`
    label6.innerText = `x 6 = ${resultadoX6}`
   multiplica()
}

let resultadosArray = 0

const totalGeral = document.getElementById('total-geral')

function somaTudo() {
    totalGeral.innerText = `Total: ${assistenciaSalaoSalva}`
}








const loop = () => {
    clearInterval(loopId)
    resultado ()
    somaTudo()
    loopId = setTimeout(() => {
        loop()
    }, 300)
}

loop()

function mostraResultado() {

}

// botaoResultadoZoom.addEventListener('click', mostrarResultado)
