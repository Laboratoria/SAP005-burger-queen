/* eslint-disable react/prop-types */
import React from 'react';

export default function Input({ name, placeholder, value, onChange }) {
  return (
    <div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
