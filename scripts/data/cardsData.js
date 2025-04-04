import agaImage from '../../assets/images/Aga.png'
import notifAppImage from '../../assets/images/NotifApp.png'

let cardsData = [];

let cardsExample = [
    {
      title: 'Напоминание',
      imageSrc: notifAppImage,
      description: 'Данное приложение напоминает про работы, которые вы должны сдать преподавателям в заданные дедлайны'
    },
    {
      title: 'Ага',
      imageSrc: agaImage ,
      description: 'Данное приложение просто бесполезно, оно ничего не делает, лишь занимает место в памяти'
    },
  ]

export {cardsExample, cardsData}