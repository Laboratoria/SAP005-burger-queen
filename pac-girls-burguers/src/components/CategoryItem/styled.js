import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.active === props.id ? "#FFF" : "#AAE09A"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease 0.3s; 
`;
export const CategoryImage = styled.img`
  width: 55px;
  height: 55px;
`;
