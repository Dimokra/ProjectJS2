export default function likeBut(obj) {
    obj.addEventListener('click', (e) => {
        if (e.target.classList.contains('card__button-static')) {
          e.target.classList.toggle('like-pressed');
          e.target.classList.toggle('like-unpressed');
        }
      
        if (e.target.classList.contains('delete-button')) {
          e.target.closest('.card__container').remove();
        }
      });
}