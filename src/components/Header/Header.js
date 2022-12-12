import React from 'react'
import Cart from '../Cart/Cart'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import clsx from 'clsx'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className='container'>
      <div className={styles.header}>
        <Logo />
        <div className={styles.headerRight}>
          <Navigation />
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default Header