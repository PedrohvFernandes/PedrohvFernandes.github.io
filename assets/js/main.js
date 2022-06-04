import showNavOnScroll from './modules/showNavOnScroll.js'
import showBackToTopButtonOnScroll from './modules/showBackToTopButtonOnScroll.js'
import activateMenuAtCurrentSection from './modules/activateMenuAtCurrentSection.js'
import typeWriter from './modules/typeWriter.js'
import {calculateAge, currentYear} from './modules/calculateDates.js'
import {initTabNav, initProject} from './modules/showSomething.js'
import scrollReveal from './modules/scrollReveal.js'

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

typeWriter();
calculateAge('05/12/2001');
initTabNav();
initProject();
currentYear();
scrollReveal();