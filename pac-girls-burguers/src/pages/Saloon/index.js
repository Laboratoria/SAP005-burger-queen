import React, { useEffect, useState } from "react";
import {
  Container,
  Select,
  Option,
  ProductArea,
  ProductList,
  Input,
  Label,
  ContainerInput,
} from "./styled";
import ReactTooltip from "react-tooltip";
import api from "../../api";

import Header from "../../components/Header";
import ProductItem from "../../components/ProductItem";
import Modal from "../../components/Modal";
import ModalProduct from "../../components/ModalProduct";
import Order from "../../components/Order";
import Loading from "../../components/Loading";

export default (props) => {
  const [productsList, setProductsList] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");
  const [menu, setMenu] = useState([]);
  const [options, setOptions] = useState("breakfast");

  const breakfast =
    productsList.length > 0 &&
    productsList.filter(({ type }) => type === "breakfast");
  const lunch =
    productsList.length > 0 &&
    productsList.filter(({ sub_type }) => sub_type === "hamburguer");
  const drinks =
    productsList.length > 0 &&
    productsList.filter(({ sub_type }) => sub_type === "drinks");
  const side =
    productsList.length > 0 &&
    productsList.filter(({ sub_type }) => sub_type === "side");

  function renderProducts(options) {
    switch (options) {
      case "breakfast":
        return breakfast ? (
          breakfast.map((item, index) => (
            <ProductItem key={index} data={item} onClick={handleProductClick} />
          ))
        ) : (
          <Loading />
        );
      case "lunch":
        return lunch.map((item, index) => (
          <ProductItem key={index} data={item} onClick={handleProductClick} />
        ));
      case "drinks":
        return drinks.map((item, index) => (
          <ProductItem key={index} data={item} onClick={handleProductClick} />
        ));
      case "side":
        return side.map((item, index) => (
          <ProductItem key={index} data={item} onClick={handleProductClick} />
        ));
      default:
    }
  }

  useEffect(() => {
    const products = async () => {
      const prodItens = await api.getProducts();
      console.log(prodItens);
      setProductsList(prodItens);
      ReactTooltip.rebuild();
    };

    products();
  }, []);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
    setMenu(menu);
  };

  const onChangeClient = ({ target }) => {
    setClient(target.value);
  };
  const onChangeTable = ({ target }) => {
    setTable(target.value);
  };

  return (
    <Container>
      <Header></Header>
      <Label>Categorias:</Label>
      <Select
        value={options}
        onChange={(e) => {
          setOptions(e.target.value);
          console.log(e.target.value);
        }}
      >
        <Option value={"breakfast"}>Café da Manhã</Option>
        <Option value={"lunch"}>Lanches</Option>
        <Option value={"side"}>Acompanhamentos</Option>
        <Option value={"drinks"}>Bebidas</Option>
      </Select>
      <ContainerInput>
        <Label>Cliente:</Label>
        <Input
          placeholder="PacBurguer"
          onChange={onChangeClient}
          value={client}
        />
        <Label>Mesa:</Label>
        <Input placeholder="09" onChange={onChangeTable} value={table} />
      </ContainerInput>

      <ProductArea>
        <ProductList>
          {productsList.length > 0 ? renderProducts(options) : <Loading />}
        </ProductList>
      </ProductArea>

      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct
          data={modalData}
          setStatus={setModalStatus}
          client={client}
          table={table}
        />
      </Modal>
      <Order client={client} table={table} />
    </Container>
  );
};
