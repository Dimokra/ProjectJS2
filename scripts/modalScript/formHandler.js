import { closeModal } from './modalHandler.js'
//редактирование и небольшая валидация
export function handleFormSubmit(e, cardHeading, cardDescription, editCardHeading, editCardDescription, menuVis) {
    e.preventDefault();
  
    if (editCardHeading.value.length > 2 && editCardDescription.value.length > 2 &&
      editCardHeading.value.length < 21 && editCardDescription.value.length < 101
    ) {    
      cardHeading.textContent = editCardHeading.value;
      cardDescription.textContent = editCardDescription.value;
     } else {
      alert("Слишком мало или слишком много текста!"); 
}
  
    closeModal(document.querySelector(".card__modal-window"));
  }
  
  export function handleDelete(cardContainer, modalWindow) {
    if (confirm("Удалить карточку?")) {
      cardContainer.remove();
      closeModal(modalWindow);
    }
  }
  