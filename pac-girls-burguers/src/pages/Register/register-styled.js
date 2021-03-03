import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;

`;


export const Input = styled.input`
  outline: none;
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1 px solid #000;
  border-radius: 10px;
  margin: 10px;
`;

export const Button = styled.button`
   background-color: #073c07;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.8rem 150px;
  `;

export const Select = styled.select`
  outline: none;
  width: 425px;
  height: 50px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
`;

export const Logo = styled.img`
  width: 400px;
  height: auto;
`;

export const Title = styled.h1`
  color: #073c07;
`;
