import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { FiLogOut } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import Tab from '@material-ui/core/Tab';
import { AiFillSnippets } from "react-icons/ai";

export const SubToolbar = (props) => {
  const history = useHistory();
  const routerHall = () => {
    history.push('/Hall')  }
  const routerKitchen = () => {
    history.push('/Kitchen')
  }

  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return history.push('/')
    }
  }
  return (
    <Box  style={{color: '#cf5e18'}}>
      <LinkTab onClick={() => routerHall()} label="Home" icon={<h3><AiFillHome style={{ color: '#cf5e18' }} /></h3>} href="Hall" />
      <LinkTab onClick={() => routerKitchen()} label="Pedidos" icon={<h3><AiFillSnippets style={{ color: '#cf5e18' }} /></h3>} href="Kitchen" />
      <LinkTab onClick={() => handleLogout()} label="Sair" icon={<h3><FiLogOut style={{ color: '#cf5e18' }} /></h3>} />
    </Box>
  )
};

function LinkTab(props) {
  return (

    <Tab component="a" onClick={(event) => {
      event.preventDefault();
    }}
      {...props} />
  );
}


