import { openModal, closeModal } from '../modalScript/modalHandler.js';
import { handleFormSubmit, handleDelete } from '../modalScript/formHandler.js';
import menuVis from "./toggleCardButtonVisibility";

let currentFormHandler = null;
let currentDeleteHandler = null;

document.querySelector("#cardsMainContainer").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const cardContainer = e.target.closest(".card__container");
  
  if (!cardContainer) return;

  const editForm = document.getElementById("cardFormEditCard");
  const modalWindow = document.querySelector(".card__modal-window");
  
  if (currentFormHandler) {
    editForm.removeEventListener("submit", currentFormHandler);
  }
  if (currentDeleteHandler) {
    const deleteButton = editForm.querySelector(".delete-button");
    deleteButton.removeEventListener("click", currentDeleteHandler);
  }

  const cardHeading = cardContainer.querySelector(".card__heading");
  const cardDescription = cardContainer.querySelector(".card__description");
  const editCardHeading = document.getElementById("editCardHeading");
  const editCardDescription = document.getElementById("editCardDescription");

  openModal(modalWindow, cardHeading, cardDescription, editCardHeading, editCardDescription);

  currentFormHandler = (e) => {
    handleFormSubmit(e, cardHeading, cardDescription, editCardHeading, editCardDescription, menuVis);
  };
  editForm.addEventListener("submit", currentFormHandler);

  const deleteButton = editForm.querySelector(".delete-button");
  currentDeleteHandler = () => {
    handleDelete(cardContainer, modalWindow);
  };
  deleteButton.addEventListener("click", currentDeleteHandler);

  document.querySelector(".card__modal-close").addEventListener("click", () => closeModal(modalWindow));
});
