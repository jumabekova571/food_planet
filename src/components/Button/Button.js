import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.css'

const Button = ({
  type = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        {
          [styles.primary]: type === "primary",
          [styles.secondary]: type === "secondary",
          [styles.outlined]: type === "outlined",
        }
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button