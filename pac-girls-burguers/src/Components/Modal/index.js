import React from "react";
import { Container, ModalBody } from "./styled";

const Modal = ({ status, children, setStatus }) => {
  const handleModalClick = ({ target }) => {
    if (target.classList.contains("modalBg")) {
      setStatus(false);
    }
  };

  return (
    <Container className="modalBg" status={status} onClick={handleModalClick}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};

export default Modal;

{
  /* <Modal status={modalStatus} setStatus={setModalStatus}>
Conteúdo do modal
</Modal> */
}
