function toggleMode() {
  const html = document.documentElement /* acesso ao html através do documentElement */
  html.classList.toggle('light')

 /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

    // pegar a tag img e substituir a imagem
    const img = document.querySelector("#profile img")
    // se tiber light mode adicionar a imagem light 
    // sem light mode, manter a imagem normal.

  if(html.classList.contains('light')) {
    img.setAttribute('src', "./assets/avatar-light.png")
    img.setAttribute('alt', "Foto de Pablo Pereira com óculos de sol, sem barba e em fundo neutro.")
  } else {
    img.setAttribute('src', "./assets/avatar-dark.png")
    img.setAttribute('alt', "Foto de Pablo Pereira sorrindo, sem barba e em fundo neutro.")
  }
}