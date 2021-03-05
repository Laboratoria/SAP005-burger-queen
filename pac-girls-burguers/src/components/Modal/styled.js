import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.status ? "flex" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  max-width: 100vw;
  max-height: 95vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 50px;
  overflow: auto;
`;
