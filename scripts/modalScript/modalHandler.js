export function openModal(modalWindow, cardHeading, cardDescription, editCardHeading, editCardDescription) {
    modalWindow.classList.add("card__modal-show");
    modalWindow.classList.remove("card__modal-hide");
    
    editCardHeading.value = cardHeading.textContent;
    editCardDescription.value = cardDescription.textContent;
  }
  
  export function closeModal(modalWindow) {
    modalWindow.classList.remove("card__modal-show");
    modalWindow.classList.add("card__modal-hide");
  }
  