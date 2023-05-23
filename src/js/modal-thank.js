// Модальное окно  THANK YOU
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[thank-modal-open]"),
      closeModalBtn: document.querySelector("[thank-modal-close]"),
      modal: document.querySelector("[thank-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();