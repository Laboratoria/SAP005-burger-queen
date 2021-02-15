import React from 'react';

export default function Input({
  required,
  name,
  className,
  id,
  type,
  value,
  minLength,
  placeholder,
  checked,
  onChange
}) {
  return (
    <input
      required={required}
      name={name}
      className={className}
      id={id}
      type={type}
      value={value}
      checked={checked}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
