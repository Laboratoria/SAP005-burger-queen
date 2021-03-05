import React from "react";
import { Container, Logo } from "./styled";

export default ({ children }) => {
  return (
    <Container>
      <Logo src="/assets/logopac.png" />
      {children}
    </Container>
  );
};
