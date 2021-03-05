import React from "react";
import {
  Container,
  ProductInfoArea,
  ProductName,
  ProductType,
  ProductItem,
  ClientName,
  ProductQuantity,
  Table,
  Status,
  Waiter,
  ButtonToDo,
} from "./styled";
export default ({ client_name, status, user_id, table, Products, onClick }) => {
  return (
    <Container>
      <ProductInfoArea>
        <ClientName>Cliente: {client_name}</ClientName>
        <Table>Mesa: {table}</Table>
        <Status>Status: {status}</Status>
        <Waiter>Garçon: {user_id}</Waiter>
        <ProductType>
          Pedido:
          {Products &&
            Products.map((product, index) => (
              <ProductItem key={index}>
                <ProductName>Item: {product.name + " "}</ProductName>
                <ProductQuantity>Qtd: {" " + product.qtd}</ProductQuantity>
              </ProductItem>
            ))}
          <ButtonToDo onClick={onClick}>Preparar</ButtonToDo>
        </ProductType>
      </ProductInfoArea>
    </Container>
  );
};
