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

export function initShowTechnologyDescription() {
  const tabTechnology = document.querySelectorAll(
    '.skill-list .skill-list-item'
  )

  let arrayDescricaoTecnologia = [
    'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo',
    'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.',
    'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
    'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.',
    'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa',
    'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems. Em 2008 o Java foi adquirido pela empresa Oracle Corporation.',
    'Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional. O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.',
    'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.',
    'Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.',
    'Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.',
    ''
  ]

  if (tabTechnology.length) {

    function activeTechnology(index) {
      descricaoTecnologia.innerHTML = arrayDescricaoTecnologia[index]

      const direction = descricaoTecnologia.dataset.anime
      descricaoTecnologia.classList.add(direction)

      setTimeout(function () {
        descricaoTecnologia.classList.remove(direction)
      }, 500)
    }
    tabTechnology.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTechnology(index)
      })
    })
  }
}
