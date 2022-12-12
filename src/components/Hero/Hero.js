import styles from './Hero.module.css';
import heroImage from '../../assets/img/hero.png'
import Button from '../Button/Button';
import ArrowLeftIcon from '../Icons/ArrowLeftIcon';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.title}>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
        <p className={styles.subTitle}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
        <Button>Перейти в меню <ArrowLeftIcon /></Button>
      </div>
      <img className={styles.heroImage} src={heroImage} />
    </div>
  )
}

export default Hero