import styled from "styled-components";

export const OrderArea = styled.div`
  background-color: #136713;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  bottom: 0;
  right: 30px;
`;
export const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  height: 50px;
  cursor: pointer;
`;
export const OrderBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  color: #fff;
`;

export const OrderIcon = styled.img`
  width: 23px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`;
export const OrderText = styled.div`
  flex: 1;
  color: #fff;
  font-size: 17px;
`;

export const ProductsArea = styled.div``;
export const ProductItem = styled.div`
  display: flex;
  margin: 10px;
`;
export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
  border-radius: 10px;
`;
export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;
export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const ProductPrice = styled.div`
  font-size: 13px;
`;
export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQtIcon = styled.img`
  width: 13px;
  height: auto;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin: 0px 5px;
`;
export const ProducSend = styled.button`
  border: 0;
  outline: none;
  background-color: #073c07;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 40px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
`;

export const TotalPrice = styled.div`
  font-size: 13px;
 display: flex;
 align-items: center;

`;
