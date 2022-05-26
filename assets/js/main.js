window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(experience)
  activateMenuAtCurrentSection(project)
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

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(`
  #home,
  #about,
  #experience,
  #project,
  #technologies,
  #contact,
  #footer`)

// Efeito de Máquina de Escrever com JavaScript
function typeWriter(element) {
  // Estou pegando o texto dentro desse elemento passado e com o split eu separo as letras, formando um array
  const textArray = element.innerHTML.split('')
  // Deixo meu texto vazio
  element.innerHTML = ''
  // Percorro todo meu array, e com isso agora consigo manipular cada letra com o foreach e cada letra tem um indice no vetor
  textArray.forEach((letter, i) => {
    // Cada letra tem um tempo de delay, que é o tempo que ela ficará escrita
    // Pra cada letra ele adiciona uma apos a outra
    setTimeout(() => (element.innerHTML += letter), 90 * i) // a primeira letra é 0 -> 75 * 0 = 0, a segunda é 75 * 1 = 75, a terceira é 75 * 2 = 150, etc
  })
}

const spanTitle = document.querySelector('#spanTitle')
typeWriter(spanTitle)

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
