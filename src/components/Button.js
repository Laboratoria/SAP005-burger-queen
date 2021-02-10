import React from "react";

export default function Button ({type, handleClick}){
  return(
    <input
      type={type}
      onClick={handleClick}
    />
  )
}