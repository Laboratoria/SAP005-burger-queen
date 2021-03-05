import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const ProductArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin: 10px;
`;

export const Titulo = styled.div`
  color: #fffafa;
  background-color: #073c07;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:15px;
`;
