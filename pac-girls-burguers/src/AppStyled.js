import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #136713;
  width: 80px;
`;

export const PageBody = styled.div`
  display: flex;
  flex: 1;
  background-color: #136713;
  overflow-y: auto;
  background-image: url("/assets/bg.png");
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #136713;
  color: #FFFAFA;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 50px;
  outline: none;
 `;
//  #424242
