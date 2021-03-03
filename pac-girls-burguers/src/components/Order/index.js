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
  TotalPrice,
} from "./styled";

export default () => {
  const productsItem = useSelector((state) => state.order.products);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(localStorage.getItem("menu"));
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
    const sendProducts = await api.postOrders(menu);
    console.log(sendProducts);
  }

  useEffect(() => {
    if (productsItem.length === 0) {
      setShow(false);
    }
  }, [productsItem.length]);

  return (
    <OrderArea>
      <OrderHeader onClick={handleOrderClick}>
        <OrderIcon src="/assets/cart.png" />
        <OrderText>Comanda ({productsItem.length})</OrderText>
        {show && <OrderIcon src="/assets/down.png" />}
      </OrderHeader>
      <OrderBody show={show}>
        <ProductsArea>
          {productsItem.map((item, index) => (
            <ProductItem key={index}>
              {/* <ProductPhoto src={item.image}></ProductPhoto> */}
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

              {/* <TotalPrice>Total:{} </TotalPrice> */}
            </ProductItem>
          ))}
        </ProductsArea>
        {productsItem.length > 0 ? (
          <ProducSend
            onClick={() => {
              sendOrder(menu);
            }}
          >
            FINALIZAR COMPRA
          </ProducSend>
        ) : (
          <></>
        )}
      </OrderBody>
    </OrderArea>
  );
};
