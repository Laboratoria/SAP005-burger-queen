import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  Input,
  Label,
  ContainerInput,
} from "./styled";
import ReactTooltip from "react-tooltip";
import api from "../../api";

import Header from "../../components/Header";
import CategoryItem from "../../components/CategoryItem";
import ProductItem from "../../components/ProductItem";
import Modal from "../../components/Modal";
import ModalProduct from "../../components/ModalProduct";
import Order from "../../components/Order";

export default () => {
  const history = useHistory();
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");

  useEffect(() => {
    const getCategories = () => {
      const catTypes = api.getCategories();
      setCategories(catTypes);
    };
    ReactTooltip.rebuild();
    getCategories();
  }, []);

  useEffect(() => {
    const products = async () => {
      const prodItens = await api.getProducts(activeCategory);
      console.log(prodItens);
      setProductsList(prodItens);
    };

    products();
  }, [activeCategory]);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

  const onChangeClient = ({ target }) => {
    setClient(target.value);
    localStorage.setItem("client", client);
  };
  const onChangeTable = ({ target }) => {
    setTable(target.value);
    localStorage.setItem("table", table);
  };

  return (
    <Container>
      <Header />
      {categories.length > 0 && (
        <CategoryArea>
          Selecione uma categoria
          <CategoryList>
            <CategoryItem
              data={{
                id: 0,
                name: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((item, index) => (
              <CategoryItem
                key={index}
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </CategoryList>
        </CategoryArea>
      )}
      <ContainerInput>
        <Label>Cliente:</Label>
        <Input placeholder="Pac" onChange={onChangeClient} value={client} />
        <Label>Mesa:</Label>
        <Input placeholder="09" onChange={onChangeTable} value={table} />
      </ContainerInput>
      {productsList.length > 0 && (
        <ProductArea>
          <ProductList>
            {productsList.map((item, index) => (
              <ProductItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
            ))}
          </ProductList>
        </ProductArea>
      )}
      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct data={modalData} setStatus={setModalStatus} />
      </Modal>
      <Order />
    </Container>
  );
};
