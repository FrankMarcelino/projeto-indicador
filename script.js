
// data
const diplayData = document.getElementById('data')

const data = new Date(); // data atual
const dataFormatada = data.toLocaleString('pt-BR'); // data no formato brasileiro
const apenasData = dataFormatada.substring(0, 10)
let nomeDoDia = data.toLocaleString('pt-BR', { weekday: 'long' }); // nome do dia em português

diplayData.innerText = `${capitalizeFirstLetter(nomeDoDia)} ${apenasData}`

// ultilidades

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ======

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
    totalSalao.innerText = `Total = ${assistenciaSalaoSalva}`
    console.log(assistenciaSalaoSalva)
}

botaoMenos.addEventListener('click', diminuir)
botaoMais.addEventListener('click', somar)
botaoSalvar.addEventListener('click', salvarAssistenciaSalao)


let loopId

// ==========novo codigo do zoom =========

const inputZoom = document.querySelectorAll('.zoom-input')
const labelZoom = document.querySelectorAll('.zoom-label')

function validateInput(input) {
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
}

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
    resultadoX.forEach((e, i) => {
        resultadoSomaZoom += resultadoX[i]
    })
}


const totalZoom = document.getElementById('total-zoom')

function resultado() {
    somaArray()
    totalZoom.innerText = `Total zoom = ${resultadoSomaZoom}`
}

botaoResultado.addEventListener('click', resultado)

// ===================total geral  ========================
const totalGeral = document.getElementById('total-geral')
let totalAssistencia = 0


function somaTudo() {
    totalAssistencia = assistenciaSalaoSalva + resultadoSomaZoom
    totalGeral.innerText = `Total: ${totalAssistencia}`
}

// -----------texto padrão -------

const dataTexto = document.getElementById('text-data')
const textoTotalSalao = document.getElementById('text-total-salao')
const textoTotalZoom = document.getElementById('text-total-zoom')
const textoTotalGeral = document.getElementById('text-total-geral')

const botaoGerarTexto = document.querySelector('.gerar-texto')
let mensagem = `Olá!`

function gerarTexto() {
    dataTexto.innerText = `${capitalizeFirstLetter(nomeDoDia)} ${apenasData}`
    textoTotalSalao.innerText = `Total salão do reino = ${assistenciaSalaoSalva}`
    textoTotalZoom.innerText = `Total zoom = ${resultadoSomaZoom}`
    textoTotalGeral.innerText = `Total: ${totalAssistencia}`

    mensagem = `Olá, segue informações sobre assistencia da *${nomeDoDia} ${apenasData}*
    Total salão do reino: ${assistenciaSalaoSalva}
    Total Zoom: ${resultadoSomaZoom}
    Assistencia Total = ${totalAssistencia}`;
}

// enviar via whatsapp



function enviarMensagemWhatsApp() {
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://api.whatsapp.com/send?text=${mensagemCodificada}`;
    window.open(urlWhatsApp, "_blank");
}

botaoGerarTexto.addEventListener('click', enviarMensagemWhatsApp)

// copiar texto
const botaoCopiarTexto = document.querySelector('.copia-texto')

function copiarTexto() {
    navigator.clipboard.writeText(mensagem)
    alert("Copiado o texto: " + mensagem)
}

botaoCopiarTexto.addEventListener('click', copiarTexto)



const loop = () => {
    clearInterval(loopId)
    multiplica()
    gerarTexto()
    somaTudo()
    loopId = setTimeout(() => {
        loop()
    }, 300)
}

loop()





