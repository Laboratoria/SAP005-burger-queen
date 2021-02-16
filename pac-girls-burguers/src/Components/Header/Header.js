import React from "react";
import styled from "styled-components";
import img from "./logo-pac.png";


const Container = styled.div`
display: flex;
justify-content: center;
justify-items: center;
background: #ea1d2c;
max-width: 100%;
max-height: 70px;
color: white;
`
const Img = styled.img`
  width: 150px;
`;

const Header = () => {
  return (
    <Container>
      <Img src={img} />
      <h2>Pac Burguer</h2>
    </Container>
  );
};

export default Header;
