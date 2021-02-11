import React from 'react';

export default function Button ({name, type, OnSubmit}){
  return(
    <button
      type={type}
      OnSubmit={OnSubmit}
    >{name}</button>
  )
}