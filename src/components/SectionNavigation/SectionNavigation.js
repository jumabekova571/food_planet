import clsx from 'clsx'
import React from 'react'
import styles from './SectionNavigation.module.css'

const SectionNavigation = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.navLink}>Пицца</a>
      <a className={clsx(styles.navLink, styles.active)}>Бургер</a>
      <a className={styles.navLink}>Суши</a>
      <a className={styles.navLink}>Роллы</a>
      <a className={styles.navLink}>Салаты</a>
      <a className={styles.navLink}>Десерты</a>
      <a className={styles.navLink}>Напитки</a>
    </nav>
  )
}

export default SectionNavigation