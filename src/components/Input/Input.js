import React from 'react';

export default function Input({
  inputRequired,
  inputName,
  inputClassName,
  inputId,
  inputMin,
  inputType,
  inputValue,
  inputMinLength,
  inputChecked,
  inputPlaceholder,
  inputOnChange
}) {
  return (
    <input
      required={inputRequired}
      name={inputName}
      className={inputClassName}
      id={inputId}
      min={inputMin}
      type={inputType}
      value={inputValue}
      minLength={inputMinLength}
      checked={inputChecked}
      placeholder={inputPlaceholder}
      onChange={inputOnChange}
    />
  )
}
