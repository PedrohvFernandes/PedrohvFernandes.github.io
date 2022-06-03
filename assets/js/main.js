window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(experience)
  activateMenuAtCurrentSection(projects)
  activateMenuAtCurrentSection(technologies)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  console.log('Linha alvo: ', targetLine)

  const sectionTop = section.offsetTop
  console.log('Topo da seção: ', sectionTop)

  const sectionHeight = section.offsetHeight
  console.log('Altura da seção: ', sectionHeight)

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  console.log(
    'O topo da seção chegou ou passou da linha ? ',
    sectionTopReachOrPassedTargetLine
  )

  const sectionEndsAt = sectionTop + sectionHeight
  console.log('final da seçao que é o topo + altura da seçao: ', sectionEndsAt)

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  console.log('O fundo da seção passou da linha ? ', sectionEndPassedTargetLine)

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  console.log('Limite da seção ? ', sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY >= 64) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY >= 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

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

const type = () => {
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
setInterval(type, 150)

// function minhaIdade() {
//   let data = new Date()
//   let ano = data.getFullYear()
//   let nascimento = 2001;
//   let idade = ano - nascimento
//   document.getElementById('anos').innerHTML = idade
// }
// minhaIdade()

function calculaIdade(dataNasc) {
  // Pegando uma data nova
  let dataAtual = new Date()
  // Pegando o ano atual
  let anoAtual = dataAtual.getFullYear()
  // Pegando a data de nascimento e criando um vetor de tres indices(dia, mes e ano)
  let anoNascParts = dataNasc.split('/')
  // Capturando a data de nascimento em cada variavel
  let diaNasc = anoNascParts[0]
  let mesNasc = anoNascParts[1]
  let anoNasc = anoNascParts[2]
  // Idade da pessoa
  let idade = anoAtual - anoNasc
  // A gente pega o mes + 1 porque o date pega mes anterior ao atual
  let mesAtual = dataAtual.getMonth() + 1
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (mesAtual < mesNasc) {
    idade--
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (mesAtual === mesNasc) {
      if (new Date().getDate() < diaNasc) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--
      }
    }
  }
  document.getElementById('anos').innerHTML = idade
}
calculaIdade('05/12/2001')

function initTabNav() {
  // Eu pego os vetores dos data-tab seja das li e das div
  const tabMenu = document.querySelectorAll("[data-tab='menu-experiencia'] li")
  const tabContent = document.querySelectorAll(
    "[data-tab='content-experiencias'] div"
  )
  // console.log(tabContent)
  // console.log(tabContent.length)
  // Se os vetores tiverem tamanho coloca uma classe active no primeiro elemento do menu e do vetor que contem as div ao iniciar a aplicação
  if (tabMenu.length && tabContent.length) {
    tabMenu[0].classList.add('active')
    tabContent[0].classList.add('active')

    // Active com click
    function activeTab(index) {
      // Percorre todos os elementos dos arrays

      // Content é os elementos dentro do array e a gente tira a active deles
      tabContent.forEach(content => {
        content.classList.remove('active')
      })
      //Colocando no indice passado pelo metodo a classe active e a Direção que a div vai aparecer, ou seja show right, porque no tabContent que é a div tem o data-anime(Atributo que a gente cria e que pode ser pego com o dataset) que tem showright que é adicionado como uma classe
      const direction = tabContent[index].dataset.anime
      // console.log(direction)
      tabContent[index].classList.add('active', direction)

      // De acordo com o indice selecionado no menu, a classe active é adicionada ao menu
      tabMenu.forEach(content => {
        content.classList.remove('active')
      })
      tabMenu[index].classList.add('active')
    }

    // Passando indice de cada elemento do array dos li, de acordo com o indice ele coloca a classe active no menu e na div
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

function initProject() {
  const tabHeader = document.querySelectorAll(
    "[data-tab='content-projects'] .project h3"
  )
  // console.log(tabHeader)
  // console.log(tabHeader.length)

  const tabContent = document.querySelectorAll(
    "[data-tab='content-projects'] .project .details-projects"
  )
  const tabSection = document.querySelectorAll(
    "[data-tab='section-projects'] .project"
  )
  console.log(tabSection)
  console.log(tabSection.length)

  if (tabContent.length) {
    tabContent[0].classList.add('active-project')
    tabSection[0].classList.add('active-project')

    function activeProject(index) {
      tabContent.forEach(content => {
        content.classList.remove('active-project')
      })
      const direction = tabContent[index].dataset.anime
      tabContent[index].classList.add('active-project', direction)

      tabSection.forEach(content => {
        content.classList.remove('active-project')
      })
      tabSection[index].classList.add('active-project')
    }

    tabHeader.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeProject(index)
      })
    })
  }
}
initProject()

function anoAtual() {
  let data = new Date()
  document.getElementById('anoAtual').innerHTML = data.getFullYear()
}
anoAtual()

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(`
  #home,
  #home .wrapper,
  #home .wrapper header,
  #home .wrapper .content,
  #about,
  #about .wrapper,
  #about .wrapper header,
  #about .wrapper .content,
  #experience,
  #experience .wrapper,
  #experience .wrapper header,
  #experience .wrapper .content,
  #projects,
  #projects .wrapper,
  #projects .wrapper header,
  #projects .wrapper .content,
  #projects .wrapper .content .project,
  #technologies,
  #technologies .wrapper,
  #technologies .wrapper header,
  #technologies .wrapper .content,
  #contact,
  #contact .wrapper,
  #contact .wrapper header,
  #contact .wrapper .content,
  #footer`)
