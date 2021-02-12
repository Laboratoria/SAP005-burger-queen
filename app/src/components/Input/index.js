/* eslint-disable react/prop-types */
import React from 'react';

export default function Input({
  divWrapClassName,
  labelHtmlFor,
  labelClassName,
  labelText,
  inputRequired,
  inputType,
  inputName,
  inputValue,
  inputChecked,
  inputPlaceholder,
  inputClassName,
  inputOnChange,
}) {
  return (
    <div className={divWrapClassName}>
      <label htmlFor={labelHtmlFor} className={labelClassName}>
        {labelText}
      </label>
      <input
        required={inputRequired}
        type={inputType}
        name={inputName}
        value={inputValue}
        checked={inputChecked}
        placeholder={inputPlaceholder}
        className={inputClassName}
        onChange={inputOnChange}
      />
    </div>
  );
}
