import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: none;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  border: 1pt solid black;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  width: 100px;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const Name = styled.span``;
const Flavor = styled.span``;
const Complement = styled.span`
  color: red;
`;
const Price = styled.span``;
const Qtd = styled.span``;
const ButtonQtd = styled.span``;

const Item = ({ name, price, flavor, img, complement, onClick, qtd }) => {
  return (
    <ContainerCard onClick={onClick}>
      <ItemCard>
        <Image src={img} />
        <Name>{name}</Name>
        <Flavor>{flavor}</Flavor>
        <Complement>
          {complement !== null ? <p>com {complement}</p> : null}
        </Complement>
        <Price>R$ {price.toFixed(2)}</Price>
        <div>
          {/* <ButtonQtd onClick={onClick}>+</ButtonQtd>
          <Qtd>{qtd}</Qtd> */}
        </div>
      </ItemCard>
    </ContainerCard>
  );
};

export default Item;
