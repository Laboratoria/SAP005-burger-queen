import React from "react";

export default function Input ({name,type, value, placeholder, onChange}){
  return(
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
  )
}
