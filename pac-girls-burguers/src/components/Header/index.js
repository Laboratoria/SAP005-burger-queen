import React from "react";
import { Container, Logo, Title } from "./styled";

export default ({ children }) => {
  return (
    <Container>
      <Logo src="/assets/logo-pac.png" />
      <Title>PAC BURGUER</Title>
      {children}
    </Container>
  );
};
