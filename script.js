const botaoMenos = document.getElementById('menos')
const botaoMais = document.getElementById('mais')
let assistenciaSalaoInput = document.getElementById('assistencia-salao-input')
let assistenciaSalao = 0


// data
const diplayData = document.getElementById('data')

const data = new Date(); // data atual
const dataFormatada = data.toLocaleString('pt-BR'); // data no formato brasileiro
console.log(dataFormatada); // exibe a data no console

diplayData.innerText = dataFormatada

function mostrarAssistencia() {
    assistenciaSalaoInput.innerText = assistenciaSalao
}

mostrarAssistencia()

function diminuir() {
    assistenciaSalao = assistenciaSalao - 1
    console.log(assistenciaSalao)
    mostrarAssistencia()
}

function somar() {
    assistenciaSalao = assistenciaSalao + 1
    console.log(assistenciaSalao)
    assistenciaSalaoInput.innerText = assistenciaSalao
}

botaoMenos.addEventListener('click', diminuir)
botaoMais.addEventListener('click', somar)