import React from 'react'
import logoSvg from '../../assets/icons/logo.svg'
import logoWhiteSvg from '../../assets/icons/logo-white.svg'
import styles from './Logo.module.css'

const Logo = ({ white = false }) => {
  return (
    <div className={white ? styles.logoWhite : styles.logo}>
      <img className={styles.logoImage} src={white ? logoWhiteSvg : logoSvg} alt="Food Planet Logo" />
      <div>
        <div className={styles.logoTitle}>food planet</div>
        <div className={styles.logoSubtitle}>Планета вкусной еды</div>
      </div>
    </div>
  )
}

export default Logo