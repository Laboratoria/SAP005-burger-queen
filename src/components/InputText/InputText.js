import React from 'react';

export default function Input({
  divClassName,
  htmlFor,
  labelClassName,
  requiredSpanClassName,
  asteriskSpan,
  labelText,
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
    <div className={divClassName}>
      <label htmlFor={htmlFor} className={labelClassName}>{labelText}
        <span className={requiredSpanClassName}>{asteriskSpan}</span>
      </label>
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
    </div>
  )
}
