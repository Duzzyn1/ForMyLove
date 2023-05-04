const mudarDeLugar = document.getElementById("botao-aleatorio")
const ativarBotao = document.getElementById("ativar-botao")

mudarDeLugar.addEventListener("click", (evento) => {
    const larguraDaPagina = window.innerWidth
    const alturaDaPagina = window.innerHeight
    const novaPosicaoLargura = Math.floor(Math.random() * larguraDaPagina)
    const novaPosicaoAltura = Math.floor(Math.random() * alturaDaPagina)

    mudarDeLugar.style.left = novaPosicaoLargura + 'px'
    mudarDeLugar.style.top = novaPosicaoAltura + 'px'

    ativarBotao.style.display = 'block'
})

ativarBotao.addEventListener("click", (evento) => {
    const novoH1 = document.createElement("h1")
    novoH1.innerHTML = "Agora Estamos Casados:)"
    novoH1.style.color = "white"
    ativarBotao.replaceWith(novoH1)
    const sumirTitulo = document.querySelector("#cabecalho-titulo--sumir")

    sumirTitulo.style.display = "none"
    mudarDeLugar.style.display = "none"

})


