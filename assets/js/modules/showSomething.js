const navigation = document.getElementById('navigation');
let window_y;

export function showNavOnScroll() {
  window_y = window.scrollY >= 64;
  if (window_y) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

export function showBackToTopButtonOnScroll() {
  window_y = window.scrollY >= 550;
  if (window_y) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}