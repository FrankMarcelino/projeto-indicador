const botaoMenos = document.getElementById('menos')
const botaoMais = document.getElementById('mais')

const diplayData = document.getElementById('data')

const data = new Date(); // data atual
const dataFormatada = data.toLocaleString('pt-BR'); // data no formato brasileiro
console.log(dataFormatada); // exibe a data no console

diplayData.innerText = dataFormatada