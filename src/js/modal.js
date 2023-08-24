import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const openModalBtns = document.getElementsByClassName("fruits-order-btn");
const closeModalBtn = document.getElementsByClassName("modal-btn-close")[0];
const modal = document.getElementById("myModal");

Array.from(openModalBtns).forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
        disableBodyScroll(modal);
    });
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    enableBodyScroll(modal);
});
