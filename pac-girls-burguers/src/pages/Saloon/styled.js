import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
`;

export const CategoryArea = styled.div`
  color: white;
  margin-top: 20px;
`;

export const CategoryList = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const ProductArea = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
export const Input = styled.input`
  outline: none;
  width: 200px;
  height: 20px;
  font-size: 16px;
  padding: 10px;
  border: 1 px solid #000;
  border-radius: 10px;
  margin: 10px;
`;

export const Label = styled.label`
  color: #fffafa;
`;

export const ContainerInput = styled.div`
  display: flex;

  align-items: center;
  padding: 20px 0px;
`;

export const Select = styled.select`
  width: 430px;
  height: 50px;
  font-size: 16px;
  border: 2 px solid #000;
  border-radius: 10px;
  margin: 10px;
`;

export const Option = styled.option`
  font-size: 16px;
  font-weight: bold;
  color: #073c07;
`;
