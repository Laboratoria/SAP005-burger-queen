import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Home(){
  const history = useHistory();
  const routerMenu = () => {
    history.push('/Menu')
  }
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <h1>Hall</h1>
          <div>
              <Button variant="contained" color="gray" onClick={routerMenu}>
                + Novo Pedido
              </Button>
              <Button variant="contained" color="gray">
                Pendentes
              </Button>
            </div>
            <p>
              <img src={logo} alt="logo"/>
            </p>
            <p>
              <Link to="/">Sair</Link>
            </p>
        </Container>      
        </React.Fragment>

    );
  }

  
  export default Home;