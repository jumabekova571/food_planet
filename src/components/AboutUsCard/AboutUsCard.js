import React from 'react'
import styles from './AboutUsCard.module.css'

const AboutUsCard = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p> 
    </div>
  )
}

export default AboutUsCard