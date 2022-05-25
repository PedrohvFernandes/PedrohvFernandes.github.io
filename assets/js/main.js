window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(experience);
  activateMenuAtCurrentSection(project);
  activateMenuAtCurrentSection(technologies);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {

  const targetLine = scrollY + innerHeight / 2;
  console.log('Linha alvo: ', targetLine);

  const sectionTop = section.offsetTop
  console.log('Topo da seção: ', sectionTop)

  const sectionHeight = section.offsetHeight
  console.log('Altura da seção: ', sectionHeight)

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  console.log('O topo da seção chegou ou passou da linha ? ', sectionTopReachOrPassedTargetLine)

  const sectionEndsAt = sectionTop + sectionHeight
  console.log('final da seçao que é o topo + altura da seçao: ', sectionEndsAt)

  const sectionEndPassedTargetLine =  sectionEndsAt <= targetLine
  console.log('O fundo da seção passou da linha ? ', sectionEndPassedTargetLine)

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  console.log('Limite da seção ? ', sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries){
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
  #contact`)
