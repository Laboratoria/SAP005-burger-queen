import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFAFA;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  display: flex;
  align-items: center;
  color: #136713;
  cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
  width: 60px;
  height: 70px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductButtonArea = styled.div``;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductType = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
`;

export const ProductPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductButton = styled.img`
  width: 15px;
`;
