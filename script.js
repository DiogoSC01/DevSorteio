const clickButton = document.querySelector(".button-raffle")
const resultNumber = document.querySelector(".text-result")


function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        resultNumber.innerHTML = "0"

        alert("O número digitado no primeiro quadro, não pode ser MAIOR que o segundo quadro!!!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        resultNumber.innerHTML = result
    }




}



clickButton.addEventListener("click", generateNumber)

