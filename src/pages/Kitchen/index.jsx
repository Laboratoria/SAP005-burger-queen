import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'; 
import {Copyright, useStyles, NavBar, NewTaskInput, ListItem} from '../../components.js';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

function Kitchen (){
  const classes = useStyles();
  const tokenLocal = localStorage.getItem('token');
  const [list, setList] = useState([])
  const [open, setOpen] = React.useState(false);



  const Kitchen = useCallback (() => {
    
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
    })       
    
    .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dados = data.filter(product => product.status === 'pending')
        setList(dados)
        
      });
    
  }, [tokenLocal])

  useEffect(() => {
    Kitchen()
  }, [Kitchen])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className='pending'>
      <NavBar/>  
      <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">  

        {list && list.map (function (product, index) {
          return(
            <div  key={index}>
              <span>
                <button type='button' className={classes.submitMenuItems} onClick={handleOpen} cursor='pointer'>Cliente {product.client_name} Qtd {product.table} {product.id} Status {product.status} Horário {product.createdAt}</button>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}> 
                <Fade in={open} overflow="scroll" style={{overflowX : 'auto',fontSize: '14px'}} >
                <span> {product.Products.map(function(item) {
                  console.log(item)
                  return(
                    <div className={classes.submitMenuCardsModal} key={item.id}>
                      <span >
                      x {item.qtd } 
                      {item.name}  
                      {item.flavor === 'null' ? '' : item.flavor} 
                      {item.complement === 'null' ? '' : item.complement } </span>  
                    </div>                          
                  )})}
                </span>
              </Fade>
              </Modal>
              </span>
            </div>
            
            
          )
        })}
      </Grid>
    </div>
  )
}

export default Kitchen;