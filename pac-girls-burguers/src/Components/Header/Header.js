import React from "react";
import styled from "styled-components";
import img from "./logo-pac.png";

const Img = styled.img`
  width: 250px;
`;

const Header = () => {
  return (
    <>
      <Img src={img} />
      <h2>PAC-BURGUER</h2>
    </>
  );
};

export default Header;
