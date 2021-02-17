import React from 'react';

export default function Input({
  inputRequired,
  inputName,
  inputClassName,
  inputId,
  inputType,
  inputValue,
  inputMinLength,
  inputPlaceholder,
  inputOnChange
}) {
  return (
    <input
      required={inputRequired}
      name={inputName}
      className={inputClassName}
      id={inputId}
      type={inputType}
      value={inputValue}
      minLength={inputMinLength}
      placeholder={inputPlaceholder}
      onChange={inputOnChange}
    />
  )
}
