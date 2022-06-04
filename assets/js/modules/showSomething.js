export function initTabNav() {
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

export function initProject() {
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