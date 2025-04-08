import '../styles/main.css'
import { createExampleCards } from "./createCardScript/cardExampleFunc"
import {cardTemplate, cardParent, addObjectToArray, cloneCardWithData, warnNotif} from "./createCardScript/cardFromInput"
import { cardsExample } from './data/cardsData'
import likeDelBut from './cardActions/likeDelBut.js'
import { closeModal } from './modalScript/modalHandler.js'
import * as Modal from "./cardEdit/firstMenu.js"

// создание первоначальных карт
createExampleCards(cardsExample, cardTemplate, cardParent)

document.querySelector(".input__container").addEventListener("submit", function (e) {
  e.preventDefault()
  const newCardData = addObjectToArray(); 
  if (newCardData.length < 1) {return warnNotif.textContent = "Пожалуйста, заполните все поля!"} {warnNotif.textContent = ""}
  const newClonedCard = cloneCardWithData(newCardData[0].title, newCardData[0].imageSrc, newCardData[0].description);
  
  cardParent.appendChild(newClonedCard);
});

// добавление слушателей для кнопок(кнопка лайка, кнопка удаления, кнопка закрытия модального окна)
likeDelBut(cardParent)
closeModal(document.querySelector('.card__modal-window'))
