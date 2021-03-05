import React from "react";
import {
  Container,
  ProductPhotoArea,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductType,
  ProductPrice,
  ProductButtonArea,
  ProductButton,
} from "./styled";

export default ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data);
  };
  return (
    <Container onClick={handleClick}>
      <ProductPhotoArea>
        <ProductPhoto src={data.image}></ProductPhoto>
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductType>
          {data.flavor} {data.complement && " com " + data.complement}
        </ProductType>
        <ProductPrice>{Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(data.price)}</ProductPrice>
      </ProductInfoArea>
      <ProductButtonArea>
        <ProductButton src="/assets/next.png"></ProductButton>
      </ProductButtonArea>
    </Container>
  );
};
