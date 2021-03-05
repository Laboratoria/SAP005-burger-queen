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

  const [order, setOrder] = useState([])
  const [orderProduct, setOrderProduct] = useState([])
  const [list, setList] = useState([])

  const [open, setOpen] = React.useState(false);
  const [itemIdOrder, setItemIdOrder] = useState();
  
  
  const orderId = useCallback (() => {
    
    fetch(`https://lab-api-bq.herokuapp.com/orders/${itemIdOrder}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
    })       
    
    .then((response) => response.json())
      .then((data) => {
        const productItem = data.Products
        setOrderProduct(productItem)
        setOrder(data)

      });
    
  },[tokenLocal, itemIdOrder])

  function orderPut () {
    
    fetch(`https://lab-api-bq.herokuapp.com/orders/${itemIdOrder}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'accept': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
      body: JSON.stringify(order)
    })       
    
    .then((response) => console.log(response.json()))
  }

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
        const dados = data.filter(product => product.status === 'done')
        console.log(dados)
        setList(dados)    
      });
    
  }, [tokenLocal])

  useEffect(() => {
    Kitchen()
  }, [Kitchen])

  useEffect(() => {
    orderId()
    
  }, [itemIdOrder])

  const handleOpen = (e) => {
    e.preventDefault()
    const product = e.target.parentNode;
    const idProduct = Number(product.getAttribute('id'))

    setItemIdOrder(idProduct)  
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='done'>
      <NavBar/>  
      <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">  

        {list.map (function (product, index) {
          const updateAt = new Date(product.updatedAt);
          const createdAt = new Date(product.createdAt);//data format
          const subt = Math.abs(updateAt) - createdAt;//numero absoluto
          const minutes = Math.floor(subt / 1000 / 60);//retorna o menor número inteiro 

          return(
            <div  key={index} id={product.id}>   
                <button  type='button' className={classes.submitMenuItems} onClick={handleOpen} 
                cursor='pointer'>Pedido n° {product.id} <br></br> Status:  {product.status.replace('done', 'Pronto')} </button>
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
                <Fade in={open}  style={{overflowX : 'auto',fontSize: '14px'}} >
                  <div className={classes.submitMenuCardsModal} status={product.status}>
                    <span><p>Pedido n° {order.id} <br></br> Cliente:{order.client_name} <br></br>Mesa: {order.table}<br></br>Status:{product.status.replace('done', 'Pronto')} Tempo : {minutes} min</p> </span>
                    <span>{orderProduct.map (function (item, index) {
                      return(
                        <div key={index}>
                          <p>{item.name}</p>
                          <p>{item.qtd}</p>
                          <p>{item.flavor === 'null' ? '' : item.flavor}</p>
                          <p>{item.complement === 'null' ? '' : item.complement }</p> 
                        </div> 
                      )
                    })}</span>
                  </div>
                </Fade>
              </Modal>  
            </div>          
          )
        })}
      </Grid>
    </div>
  )
}

export default Kitchen;