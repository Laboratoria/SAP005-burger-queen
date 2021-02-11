import React from "react";

export default function Button ({name, type, handleClick}){
  return(
    <button
      type={type}
      onClick={handleClick}
    >{name}</button>
  )
}