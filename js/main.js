const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector("#close-button");

cartButton.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);
   
function toggleModal () {
    modal.classList.toggle("is-open");
}

new WOW().init();