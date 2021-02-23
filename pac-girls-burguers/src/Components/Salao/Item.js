import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: none;
  border-radius: 3px;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  border: 1pt solid black;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  width: 150px;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const Item = ({ name, price, flavor, img, complement, onClick }) => {
  return (
    <ContainerCard onClick={onClick}>
      <ItemCard>
        <div>
          <Image src={img} />
        </div>
        <div>
          {name} {flavor} {complement !== null ? <p>com  {complement}</p> : null}
        </div>

        <p>R$ {price.toFixed(2)}</p>
      </ItemCard>
    </ContainerCard>
  );
};

export default Item;
