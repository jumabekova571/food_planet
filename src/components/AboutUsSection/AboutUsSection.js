import busIcon from '../../assets/icons/bus.svg'
import salatIcon from '../../assets/icons/salat.svg'
import menuIcon from '../../assets/icons/menu.svg'
import mapPinIcon from '../../assets/icons/map-pin.svg'
import styles from './AboutUsSection.module.css'
import AboutUsCard from '../AboutUsCard/AboutUsCard'

const items = [
  {
    id: '1',
    image: busIcon,
    title: 'Мгновенная доставка',
    description: `Доставим заказанную вами
    еду за 30 минут + напиток в подарок`,
  }, {
    id: '2',
    image: salatIcon,
    title: 'Свежие продукты доставка',
    description: `Вся продукция хранится в хороших условиях тем самым продливая срок хранения`
  }, {
    id: '3',
    image: menuIcon,
    title: 'Уникальное меню',
    description: `Ежедневно мы обновляем наше 
    меню и том числе коктейльное`,
  }, {
    id: '4',
    image: mapPinIcon,
    title: 'Доставка',
    description: `Мы быстро доставляем вашу еду по указанному адресу`,
  },
]

const AboutUsSection = () => {
  return (
    <div>
      <h2 className={styles.sectionTitle}>Почему выбирают нас:</h2>
      <div className='row'>
        {items.map(item => (
          <div key={item.id} className="col-3">
            <AboutUsCard
              imageUrl={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUsSection