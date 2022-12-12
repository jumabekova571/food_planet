import React from 'react'

const ArrowLeftIcon = ({ size = 12, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 6.03947H10M10 6.03947L5.71429 1M10 6.03947L5.71429 11"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

export default ArrowLeftIcon