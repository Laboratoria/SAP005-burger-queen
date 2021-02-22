import React from "react";
import "../style/modal.css"

const ErrorModal = ({ id = 'modal' ,onClose = () => {}, children }) =>{

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <h2>Opss!</h2>
        <div className="content">{children}</div>
        <button className="close" onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default ErrorModal;

  