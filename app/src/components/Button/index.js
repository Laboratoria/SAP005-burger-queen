/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({ onClick, type, className, buttonText }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
    >
      {buttonText}
    </button>
  );
}
