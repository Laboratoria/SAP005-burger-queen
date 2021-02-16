import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-bootstrap/Modal'
// import Logo from "../components/logo"

const ModalMessage = (props) => { 
  return (
    <div className="back">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
            <Logo />
          </Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <p className="modal-text">
            User successfully registered!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalMessage;