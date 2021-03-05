import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";

import {
  OrderArea,
  OrderHeader,
  OrderBody,
  OrderIcon,
  OrderText,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
  ProductQtText,
  ProducSend,
} from "./styled";

export default ({ client, table }) => {
  const productsItem = useSelector((state) => state.order.products);
  const menu = useSelector((state) => state.order.menu);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  const handleOrderClick = () => {
    setShow(!show);
  };

  const handleProductChange = (key, type) => {
    dispatch({
      type: "CHANGE_PRODUCT",
      payload: { key, type },
    });
  };

  async function sendOrder() {
    try {
      const sendProducts = await api.postOrders(client, table, menu);
      console.log(sendProducts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (productsItem.length === 0) {
      setShow(false);
    }
  }, [productsItem.length]);

  return (
    <OrderArea>
      <OrderHeader onClick={handleOrderClick}>
        <OrderText>Comanda ({productsItem.length})</OrderText>
        {show && <OrderIcon src="/assets/down.png" />}
      </OrderHeader>
      <OrderBody show={show}>
        <ProductsArea>
          {productsItem.map((item, index) => (
            <ProductItem key={index}>
              <ProductPhoto src={item.image}></ProductPhoto>
              <ProductInfoArea>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>
                  R${item.price.toFixed(2)} | R$
                  {(item.price * item.qt).toFixed(2)}
                </ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon
                  onClick={() => {
                    handleProductChange(index, "-");
                  }}
                  src="/assets/minus.png"
                />
                <ProductQtText>{item.qt}</ProductQtText>
                <ProductQtIcon
                  onClick={() => {
                    handleProductChange(index, "+");
                  }}
                  src="/assets/plus.png"
                />
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>

        {productsItem.length > 0 ? (
          <ProducSend
            onClick={() => {
              sendOrder(menu);
            }}
          >
            Enviar Pedido
          </ProducSend>
        ) : (
          <></>
        )}
      </OrderBody>
    </OrderArea>
  );
};
