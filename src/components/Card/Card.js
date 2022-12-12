import clsx from 'clsx'
import React from 'react'
import Button from '../Button/Button'
import styles from './Card.module.css'

const Card = ({
  dark = false,
  imageUrl,
  title,
  description,
  price
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        { [styles.dark]: dark }
      )}
    >
      <img className={styles.image} src={imageUrl} alt='burger' />
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>
        {description}
      </p>
      <h4 className={styles.price}>{price} сом</h4>
      <div className={styles.counter}>
        <div className={styles.counterDecrement}>-</div>
        <div className={styles.counterNumber}>1</div>
        <div className={styles.counterIncrement}>+</div>
      </div>
      <Button type={dark ? "primary" : "secondary"}>В корзину</Button>
    </div>
  )
}

export default Card