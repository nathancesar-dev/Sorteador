const buttonsortear = document.querySelector(".buttonsorteio")
const inputmin = document.querySelector(".inputmin")
const inputmax = document.querySelector(".inputmax")

function sortearnumero() {

    const min = Number(inputmin.value)
    const max = Number(inputmax.value)
    let paragrafo = document.querySelector(".resultado")

    if (min < max ) {
        const sorteado = Math.floor(Math.random() * (max - min + 1)) + min

        paragrafo.textContent = sorteado
    }else{
         paragrafo.innerHTML = "O Máximo deve ser maior"
    }
}

buttonsortear.addEventListener("click", sortearnumero);