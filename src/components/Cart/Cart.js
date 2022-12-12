import React from 'react'
import CartIcon from '../Icons/CartIcon'
import styles from './Cart.module.css'

const Cart = ({count = 1}) => {
  return (
    <a className={styles.cart}>
      <CartIcon/>
      <span className={styles.cartCounter}>{count}</span>
    </a>
  )
}

export default Cart