import React from 'react';

export default function Button({ name, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
    >{name}</button>
  )
}