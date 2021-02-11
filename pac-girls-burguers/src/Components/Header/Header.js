import React from 'react'
import styled from 'styled-components'
import img from "./logo-pac.png"

const Img = styled.img`
    width: 300px;
`

const Header = () => {
    return (
       <>
       <Img src={img}/>
       
       </>
    )
}

export default Header
