import clsx from 'clsx'
import React from 'react'
import styles from './Navigation.module.css'
import phoneSvg from '../../assets/icons/phone.svg'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <a className={clsx(styles.navLink, styles.active)}>Главное</a>
      <a className={clsx(styles.navLink, styles.dropdown)}>Меню</a>
      <a className={styles.navLink}>Доставка</a>
      <a className={styles.navLink}>Контакты</a>
      <a href='tel:+996500405988' className={clsx(styles.navLink, 'd-flex align-items-center gap-2')}>
        <img src={phoneSvg}/>
        +996500405988
      </a>
    </nav>
  )
}

export default Navigation