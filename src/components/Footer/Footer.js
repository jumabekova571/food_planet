import React from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <Logo white />
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Footer