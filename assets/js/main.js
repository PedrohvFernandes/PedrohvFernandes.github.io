import {showNavOnScroll, showBackToTopButtonOnScroll} from './modules/showSomething.js';
import activateMenuAtCurrentSection from './modules/activateMenuAtCurrentSection.js';
import {initTabNav, initProject, initShowTechnologyDescription} from './modules/initSomething.js';
import {currentAge, currentYear} from './modules/currentDates.js';
import typeWriter from './modules/typeWriter.js';

// Api para scroll
import scrollRevealApi from './modules/scrollRevealApi.js';

window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(experience);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(technologies);
  activateMenuAtCurrentSection(contact);
}

initTabNav();
initProject();
initShowTechnologyDescription();
currentAge('05/12/2001');
currentYear();
typeWriter();
scrollRevealApi;