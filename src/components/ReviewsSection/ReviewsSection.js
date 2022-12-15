import React from 'react'

import Ellipse from '../../assets/img/burgers/Ellipse.svg'
import ReviewCard from '../ReviewCard/ReviewCard'
import styles from './ReviewsSection.module.css'

const items = [
  {
    id: '1',
    image: Ellipse,
    title: ' Сергей',
    description: `Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)`,
    date: '02.07.2020',
  }, {
    id: '2',
    image: Ellipse,
    title: ' Сергей',
    description: `Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!`,
    date: '02.07.2020',
  }, {
    id: '3',
    image: Ellipse,
    title: ' Сергей',
    description: `Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!`,
    date: '02.07.2020',
  }, {
    id: '4',
    image: Ellipse,
    title: ' Сергей',
    description: `Хочу поблагодарить за бургер !Очень вкусненький в меру остренький)
    Спасибо,удивили!)`,
    date: '02.07.2020',
  },
]

const ReviewsSection = () => {
  return (
    <div className='mb-5 pb-5'>
      <h2 className={styles.sectionTitle}>Отзывы</h2>
      <div className='row'>
        {items.map(item => (
          <div key={item.id} className="col-3">
            <ReviewCard
              key={item.id}
              imageUrl={item.image}
              name={item.title}
              text={item.description}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsSection