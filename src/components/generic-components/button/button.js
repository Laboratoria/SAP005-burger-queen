import React from 'react'

export default function Button({
  name,
  className,
  type,
  onClick
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >{name}</button>
  )
}