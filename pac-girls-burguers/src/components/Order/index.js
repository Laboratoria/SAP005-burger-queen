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
  //const menu = useSelector((state) => state.order.menu);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   console.log(menu);
  // }, [menu]);

  const handleOrderClick = () => {
    setShow(!show);
  };

  const handleProductChange = (key, type) => {
    dispatch({
      type: "CHANGE_PRODUCT",
      payload: { key, type },
    });
  };

  const sendOrder = async () => {
    try {
      const body = {
        client,
        table,
        products: productsItem.map((item) => ({
          id: Number(item.id),
          qtd: item.qtd,
        })),
      };
      if (client === "" || table === "") {
        alert("preencha o nome do cliente e a mesa");
      } else {
        const data = await api.postOrders(body);
        alert("pedido enviado para cozinha");
        window.location.href = "/saloon";
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

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
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price)}{" "}
                  |
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.price * item.qt)}
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
              sendOrder();
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
