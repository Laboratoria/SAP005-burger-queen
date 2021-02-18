import React from 'react'
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles, Copyright} from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import '../../style.css';

function Pending(){
  const classes = useStyles();
    return (
      
      <React.Fragment >
      <Container className='container'>
        <Typography component="div" />
          <div>
              <Button type="submit" fullWidth variant="contained" disabled className={classes.submitHall}>
                Pedidos
              </Button>
            </div>
            <p>
              <Link to="/Hall"><ArrowBackIosIcon className={classes.arrow} color="disabled" fontSize="large"/> </Link>
            </p>
            <Copyright/>
        </Container>      
        </React.Fragment>

    );
  }

  
  export default Pending;