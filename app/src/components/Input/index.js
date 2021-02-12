/* eslint-disable react/prop-types */
import React from 'react';

export default function Input({
  labelInputDiv,
  htmlFor,
  labelClassName,
  label,
  required,
  type,
  inputName,
  value,
  checked,
  placeholder,
  inputClassName,
  onChange,
}) {
  return (
    <div className={labelInputDiv}>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <input
        required={required}
        type={type}
        name={inputName}
        value={value}
        checked={checked}
        placeholder={placeholder}
        className={inputClassName}
        onChange={onChange}
      />
    </div>
  );
}
