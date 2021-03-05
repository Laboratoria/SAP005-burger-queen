
import React from 'react';
import { useHistory } from 'react-router-dom'
import { StandardButtonPrincipal } from '../../components/StandardButton/CustomButtons';
import { LogoHome } from '../../components/Logos/Logos.js';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const Home = () => {
  const useStyles = makeStyles((theme) => ({
    conteinerPrincipalHome: {

      boxdirection: 'normal !important',
      boxOrient: 'horizontal!important',
      display: 'flex!important',
      flexDirection: 'row!important',
  },

    conteinerSecondary: {
      boxDirection: 'normal !important',
      boxOrient: 'vertical !important',
      boxAlign: 'center !important', 
      boxPack: 'center !important', 
      display: 'flex !important', 
      justifyContent: 'center !important',
      alignItems: 'center !important',
      flexDirection: 'column !important',
      width: '55vw !important',
      backgroundColor: '#cf5e18 !important',
      minHeight: '100vh !important',
  },

    conteinerTertiary: { 
      webkitBoxAlign: 'center !important',
      webkitBoxPack: 'center !important',
      display: 'flex !important', 
      justifyContent: 'center !important', 
      alignItems: 'center !important',
      width: '45vw !important', 

  },
    conteinerQuarticiario: {
      display: 'flex',
      flexDirection: 'column',
  },

  }));
const classes = useStyles();
const history = useHistory();
const routerLogin = () => {
  history.push('/Login')
}
const routerRegister = () => {
  history.push('/Register')
}

return (
  <Box className={classes.conteinerPrincipalHome}>
    <Box className={classes.conteinerSecondary}>
      <LogoHome />
    </Box>
    <Box className={classes.conteinerTertiary}>
      <section className={classes.conteinerQuarticiario}>
        <StandardButtonPrincipal content="Login" onClick={routerLogin} />
        <StandardButtonPrincipal content="Cadastrar" onClick={routerRegister} />
      </section>
    </Box>
  </Box>

)
};
