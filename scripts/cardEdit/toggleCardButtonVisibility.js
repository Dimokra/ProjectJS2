export default function menuVis(cardButtonContainer) {
    if (cardButtonContainer) {
        if (
          cardButtonContainer.classList.contains("card__button-container-hide")
        ) {
          cardButtonContainer.classList.remove("card__button-container-hide");
        } else {
          cardButtonContainer.classList.add("card__button-container-hide");
        }
      }
}