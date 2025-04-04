import { cardsData } from "../data/cardsData";
const page = document.querySelector("body");
const cardTemplate = page.querySelector("#cardTemplate").content;
const cardParent = page.querySelector("#cardsMainContainer");
let warnNotif = page.querySelector("#warning");

function addObjectToArray() {
  let headingInput = page.querySelector("#heading").value;
  let fileSelect = page.querySelector("#fileSelect").files[0];
  let descriptionInput = page.querySelector("#description").value;

  if (!headingInput || !descriptionInput || !fileSelect) {
    return [];
  }

  let imageSrc = fileSelect ? URL.createObjectURL(fileSelect) : "";
 
  const newObject = {
    title: headingInput,
    imageSrc: imageSrc,
    description: descriptionInput,
  };

  cardsData.unshift(newObject);

  headingInput = page.querySelector("#heading").value = "";
  fileSelect = page.querySelector("#fileSelect").value = ""; //данные все еще сохраняются
  descriptionInput = page.querySelector("#description").value = "";
  return cardsData
}

function cloneCardWithData(title, image, description) {
  const cloneCard = cardTemplate.cloneNode(true);
  cloneCard.querySelector(".card__heading").textContent = title;
  cloneCard.querySelector(".card__image").src = image
  cloneCard.querySelector(".card__description").textContent = description;
      return cloneCard
    }

export {cardTemplate, cardParent, addObjectToArray, cloneCardWithData, warnNotif}