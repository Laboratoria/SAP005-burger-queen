import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Container,
  ProductsArea,
  ProductsPhoto,
  ProductsInfoArea,
  ProductsDetails,
  ProductsQuantityArea,
  ProductsButtons,
  ProductsName,
  ProductsComplements,
  Button,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,
} from "./styled";

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState([]);
  const [menu, setMenu] = useState([]);

  const [qt, setQt] = useState(1);

  useEffect(() => {
    setQt(1);
  }, [data]);

  const handleCancelButton = () => {
    setStatus(false);
  };

  const handleMinusQt = () => {
    if (qt > 1) {
      setQt(qt - 1);
    }
  };

  const handlePlusQt = () => {
    setQt(qt + 1);
  };

  const handleAddToOrder = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { data, qt },
    });
    setStatus(false);
    setOrder([...order, data]);
    const addProducts = order.map((item) => {
      return {
        id: item.id,
        qtd: 1,
      };
    });
    const qtdProducts = addProducts.reduce((idItem, qtdItem) => {
      idItem[qtdItem.id] = idItem[qtdItem.id] || [];
      idItem[qtdItem.id].push(qtdItem);
      return idItem;
    }, Object.create(null));
    const list = [];
    for (const [key, value] of Object.entries(qtdProducts)) {
      list.push({
        id: key,
        qtd: value.length,
      });
    }
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");

    setMenu({ ...menu, client: client, table: table, products: list });

    localStorage.setItem("menu", JSON.stringify(menu));
  };
  return (
    <Container>
      <ProductsArea>
        <ProductsPhoto src={data.image}></ProductsPhoto>
        <ProductsInfoArea>
          <ProductsDetails>
            <ProductsName>{data.name}</ProductsName>
            <ProductsComplements>
              {data.flavor}
              {data.complement && " com " + data.complement}
            </ProductsComplements>
          </ProductsDetails>
          <ProductsQuantityArea>
            <ProductQuantity>
              <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" />
              <ProductQtText>{qt}</ProductQtText>
              <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png" />
            </ProductQuantity>
            <ProductPrice>R${(data.price * qt).toFixed(2)}</ProductPrice>
          </ProductsQuantityArea>
        </ProductsInfoArea>
      </ProductsArea>
      <ProductsButtons>
        <Button small={true} onClick={handleCancelButton}>
          Cancelar
        </Button>
        <Button onClick={handleAddToOrder}>Adicionar a Comanda</Button>
      </ProductsButtons>
    </Container>
  );
};
