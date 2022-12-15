import React from 'react'
import penIcon from '../../assets/icons/pen.svg'
import styles from './ReviewCard.module.css'

const ReviewCard = ({
  imageUrl,
  name,
  text,
  date,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={imageUrl} />
      <p className={styles.name}>{name} <img src={penIcon} alt="edit" /></p>
      <p className={styles.text}>{text}</p>
      <p className={styles.date}>{date}</p>
    </div>
  )
}

export default ReviewCard