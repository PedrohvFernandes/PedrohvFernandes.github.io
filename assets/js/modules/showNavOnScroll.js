const navigation = document.getElementById('navigation');
export default function showNavOnScroll() {
  if (window.scrollY >= 64) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}