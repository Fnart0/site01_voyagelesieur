const btnPlus = document.querySelector(".js-plus");
const colTransport = document.querySelector(".conteneur-transport") 

btnPlus.addEventListener("click" , ouvreferme)

function ouvreferme() {
    colTransport.classList.toggle("invisible");
}
