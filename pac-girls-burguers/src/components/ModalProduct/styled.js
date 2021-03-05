import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  padding: 20px;
`;

export const ProductsArea = styled.div`
  display: flex;
  height: 200px;
`;

export const ProductsButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Button = styled.button`
  border: 0;
  outline: none;
  background-color: #073c07;
  box-shadow: 4px 5px 0px #999;
  border-radius: 10px;
  color: #FFFAFA;
  font-size: ${(props) => (props.small ? "13px" : "22px")};
  font-weight: bold;
  padding: ${(props) => (props.small ? "5px 10px" : "10px 20px")};
  margin-left: 10px;
  cursor: pointer;
`;

export const ProductsPhoto = styled.img`
  width: 200px;
  border-radius: 10px;
`;
export const ProductsInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ProductsDetails = styled.div`
  height: 50px;
`;

export const ProductsQuantityArea = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const ProductsName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
export const ProductsComplements = styled.div`
  font-size: 14px;
`;
export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: #073c07;
  border-radius: 5px;
`;
export const ProductQtImage = styled.img`
  width: 24px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;
export const ProductQtText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #FFFAFA;
 
`;
export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
