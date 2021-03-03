import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
