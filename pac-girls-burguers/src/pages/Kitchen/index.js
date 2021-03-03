import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';

export default () => {
    const history = useHistory();
   

    return (
        <Container>
            <Titulo>Kitchen</Titulo>

          
        </Container>
    );
}