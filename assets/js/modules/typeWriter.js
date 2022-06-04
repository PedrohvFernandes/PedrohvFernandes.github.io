// // Efeito de Máquina de Escrever com JavaScript
// function typeWriter(element) {
//   // Estou pegando o texto dentro desse elemento passado e com o split eu separo as letras, formando um array
//   const textArray = element.innerHTML.split('')
//   // Deixo meu texto vazio
//   element.innerHTML = ''
//   // Percorro todo meu array, e com isso agora consigo manipular cada letra com o foreach e cada letra tem um indice no vetor
//   textArray.forEach((letter, i) => {
//     // Cada letra tem um tempo de delay, que é o tempo que ela ficará escrita
//     // Pra cada letra ele adiciona uma apos a outra
//     setTimeout(() => (element.innerHTML += letter), 90 * i) // a primeira letra é 0 -> 75 * 0 = 0, a segunda é 75 * 1 = 75, a terceira é 75 * 2 = 150, etc
//   })
// }

//  //Pedro Henrique    -> No span tem que ter espaço pra atrasar
// const spanTitle = document.querySelector('#spanTitle')
// typeWriter(spanTitle)

// // https://www.youtube.com/watch?v=DnBn2R426O8
const spanTitle = document.querySelector('#spanTitle')
// Cada palavra digitada dentro do spanTitle
const messages = [
  'Pedro Henrique        ',
  'Desenvolvedor Web           ',
  'Front-Ender         '
]

// Indice das mensagens
let messageIndex = 0
// Indice das letras da mensagen
let charIndex = 0
// Duas variaveis que vão receber tanto a mensagem e os caracteres da mensagem armazenada no currentMessage um por um
let currentMessage = ''
let currentCharacters = ''

//const typeWriter = () => {
export default function typeWriter() {
  // volta pro primeiro texto para não bugar na hora de for passar pro proximo indice inexistente, caso o indice da mensagemIndex for igual ao tamanho da messages
  const shouldTypeFirstMessage = messageIndex === messages.length

  if (shouldTypeFirstMessage) {
    messageIndex = 0
  }
  // A gente recebe a mensagem atual do array
  currentMessage = messages[messageIndex]
  // Cada vez que rodar essa função eu recebo os caracters devidos da mensagem, ou seja eu incremento o indice da mensagem
  // Na primeira rodada o slice recebe 0 e 0 ou seja uma string vazia, na segunda rodada o slice recebe 0 e 1 ou seja p primeira letra da mensagem...
  currentCharacters = currentMessage.slice(0, charIndex++)

  spanTitle.textContent = currentCharacters

  // Se o currentCharacters tiver o mesmo tamanho do currentMessage, isso quer dizer que a mensagem já foi completada. porque o currentCharacters vai receber o currentMessage.slice que é um vetor de strings e o currentMessage tem um vetor de mensagem. Tanto o currentCharcters e Currentmessage é de acordo com o indice no momento.
  const shouldChangeMessageToBeTyped =
    currentCharacters.length === currentMessage.length

  // Se sim entao eu incremento o indice da mensagem e passo pra proxima mensagem, apagando o texto do spanTitle
  if (shouldChangeMessageToBeTyped) {
    messageIndex++
    charIndex = 0
  }
}
// Repetindo a função em um intervalo de tempo para pegar caracter de um em um da mensagem, a cada 200 milisegundos
setInterval(typeWriter, 150)
