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
import Icon from '@material-ui/core/Icon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


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
    .then(()=>  Kitchen()
    )
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
        const dados = data.filter(product => product.status === 'done'|| product.status === 'delivered' )
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

  const handleCompleted = (e) => {
    window.confirm("O pedido foi concluido?")
    e.preventDefault()

    setOrder(order.status = 'delivered')

    console.log(order) 

    orderPut ()

  };  

function calculateTime(product) {
  let updateAt = new Date(product.updatedAt);
  let createdAt = new Date(product.createdAt);//data format
  let subt = Math.abs(updateAt - createdAt);//numero absoluto
  let minutes = Math.floor(subt / 1000 / 60);//retorna o menor número inteiro
  console.log(minutes);
  return minutes;
}


  return (
    <div className='done'>
      <NavBar/>  
      <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">  
      
        {list.map (function (product, index) {
          return(
            <div  key={index} id={product.id}>   
                <button  type='button' className={classes.submitMenuItems} onClick={handleOpen} 
                cursor='pointer'>Pedido n° {product.id} <br></br>Tempo Produção : {calculateTime(product)} min<br></br> {product.status.replace('done', 'Pronto')} </button>
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
                    <span><p>Pedido n° {order.id} <br></br> Cliente:{order.client_name} <br></br>Mesa: {order.table}<br></br>Status:{product.status.replace('done', 'Pronto')} </p> </span>
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
                    <Button variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<Icon>send</Icon>} onClick={handleCompleted}>Entregue
                    </Button> 
                  </div>
                </Fade>
              </Modal>  
            </div>          
          )
        })}
      </Grid>
      <Link to="/Hall"><ArrowBackIosIcon className={classes.arrowMenu} color="disabled" fontSize="large"/></Link>
      <Copyright />
    </div>
    
  )
}


export default Kitchen;