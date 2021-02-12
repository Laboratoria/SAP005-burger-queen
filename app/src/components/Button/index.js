/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({ type, onClick }) {
  return (
    <button>
      type={type}
      onClick={onClick}
    </button>
  );
}
