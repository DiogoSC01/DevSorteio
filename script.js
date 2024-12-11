const clickButton = document.querySelector(".button-raffle")
const resultNumber = document.querySelector(".text-result")


function generateNumber(){
 
const min = Math.ceil (document.querySelector(".input-min").value)
const max = Math.floor (document.querySelector(".input-max").value)

const result = Math.floor(Math.random() * (max - min + 1)) + min;

resultNumber.innerHTML = result

}



clickButton.addEventListener("click", generateNumber )

