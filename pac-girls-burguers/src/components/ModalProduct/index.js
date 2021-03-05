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
    addOrderKitchen();
  };

  const addOrderKitchen = () => {
    dispatch({
      type: "ADD_ORDER",
      payload: { data },
    });
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
        <Button
          onClick={() => {
            handleAddToOrder();
          }}
        >
          Adicionar a Comanda
        </Button>
      </ProductsButtons>
    </Container>
  );
};

// const handleAddKitchen=()=>{
//   dispatch({
//     type: "ADD_PRODUCTS",
//     payload: { data, qt },
//   });
// }
