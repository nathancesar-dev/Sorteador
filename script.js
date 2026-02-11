const buttonsortear = document.querySelector(".buttonsorteio")
const inputmin = document.querySelector(".inputmin")
const inputmax = document.querySelector(".inputmax")

function sortearnumero() {

    const min = Number(inputmin.value)
    const max = Number(inputmax.value)

    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min

    let paragrafo = document.querySelector(".resultado")

    paragrafo.textContent = sorteado

}

buttonsortear.addEventListener("click", sortearnumero);