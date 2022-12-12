import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.css'

const Button = ({ type = "primary",children, className, ...props }) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        { [styles.secondary]: type === "secondary" }
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button