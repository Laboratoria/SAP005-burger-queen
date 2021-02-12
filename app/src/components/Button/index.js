/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({ onClick, type }) {
  return (
    <button>
      onClick={onClick}
      type={type}
    </button>
  );
}
