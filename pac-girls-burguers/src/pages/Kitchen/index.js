import React, { useEffect, useState } from "react";
import api from "../../api";
import { Container, Titulo, ProductArea, ProductList } from "./styled";
import Header from "../../components/Header";
import OrderItem from "../../components/OrderItem";
export default () => {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrder();
  }, []);

  async function getOrder() {
    const orders = await api.getOrders();
    setOrder(orders);
    console.log(orders);
  }

  return (
    <Container>
      <Header />

      <ProductArea>
        <ProductList>
          <Titulo> PENDENTES</Titulo>
          {order.length > 0 &&
            order.map((item, index) => (
              <OrderItem
                client_name={item.client_name}
                status={item.status}
                user_id={item.user_id}
                table={item.table}
                Products={item.Products}
                key={index}
              />
            ))}
        </ProductList>
        <ProductList>
          <Titulo>EM PREPARO</Titulo>
        </ProductList>
        <ProductList>
          <Titulo>PRONTOS</Titulo>
        </ProductList>
      </ProductArea>
    </Container>
  );
};
