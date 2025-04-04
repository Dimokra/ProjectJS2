function createExampleCards(obj, template, parent) {
    obj.forEach(({title, imageSrc, description}) => {
      const cloneCard = template.cloneNode(true)
      cloneCard.querySelector('.card__heading').textContent = title
      cloneCard.querySelector('.card__image').src = imageSrc
      cloneCard.querySelector('.card__description').textContent = description
      parent.appendChild(cloneCard)
    })
  }
  
  export {createExampleCards}