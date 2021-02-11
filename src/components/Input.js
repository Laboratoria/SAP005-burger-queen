import React from "react";

export default function Input ({name,id, type, value, placeholder, checked, onChange, onClick}){
  return(
    <input
      name={name}
      id={id}
      type={type}
      value={value}
      checked={checked}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
    />
  )
}
