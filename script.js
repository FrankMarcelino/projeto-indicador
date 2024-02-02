const botaoMenos = document.getElementById('menos')
const botaoMais = document.getElementById('mais')
const botaoConcluir = document.getElementById('concluir')
let assistenciaSalaoInput = document.getElementById('assistencia-salao-input')
let assistenciaSalao = 0
let assistenciaSalaoSalva = 0


// data
const diplayData = document.getElementById('data')

const data = new Date(); // data atual
const dataFormatada = data.toLocaleString('pt-BR'); // data no formato brasileiro


diplayData.innerText = dataFormatada

// assistencia salão

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
    console.log(assistenciaSalaoSalva)
}

botaoMenos.addEventListener('click', diminuir)
botaoMais.addEventListener('click', somar)
botaoConcluir.addEventListener('click', salvarAssistenciaSalao)

// 