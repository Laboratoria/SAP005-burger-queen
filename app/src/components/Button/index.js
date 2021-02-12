/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({
  type,
  className,
  onClick,
  buttonText,
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
