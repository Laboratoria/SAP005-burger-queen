import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Button, Modal, Fade, Icon, Backdrop, Container } from '@material-ui/core';
import { useStyles, NavBar } from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Copyright from '../../services/Copyright';

function Kitchen (){
  const classes = useStyles();
  const history = useHistory();
  const tokenLocal = localStorage.getItem('token');

  const [order, setOrder] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [list, setList] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [itemIdOrder, setItemIdOrder] = useState();

  const routerHall = () => {
    history.push('/Hall');
  };
  
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
        const productItem = data.Products;
        setOrderProduct(productItem);
        setOrder(data);
      });
  },[tokenLocal, itemIdOrder]);

  function orderPut () {
    fetch(`https://lab-api-bq.herokuapp.com/orders/${itemIdOrder}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
      body: JSON.stringify(order),
    })       
    .then((response) => response.json())
    .then(()=>  Kitchen()
    );
  };

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
      const dados = data.filter(product => product.status === 'done'|| product.status === 'Entregue' );
      setList(dados);  
    });
  }, [tokenLocal]);

  useEffect(() => {
    Kitchen();
  }, [Kitchen]);

  useEffect(() => {
    orderId();
  }, [itemIdOrder]);

  function calculateTime(product) {
    let updateAt = new Date(product.updatedAt);
    let createdAt = new Date(product.createdAt);
    let subt = Math.abs(updateAt - createdAt);
    let minutes = Math.floor(subt / 1000 / 60);
    return minutes;
  };

  const handleOpen = (e) => {
    e.preventDefault();
    const product = e.target.parentNode;
    const idProduct = Number(product.getAttribute('id'));

    setItemIdOrder(idProduct);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCompleted = (e) => {
    window.confirm("O pedido foi concluido?");
    e.preventDefault();
    setOrder(order.status = 'Entregue');
    orderPut ();
  };  

  return (
    <Grid>
      <NavBar/>
      <Container>
        <h1 className={classes.displayHPanding}> <ArrowBackIosIcon fontSize="large" onClick={routerHall} /> Ordens</h1>
        <div id='menuList'className={classes.displayPanding} container direction="row" justify="flex-start" alignItems="flex-start">  
          {list.map (function (product, index) {
            return(
            <div  key={index} id={product.id}>   
                <button  type='button' className={classes.submitMenuItemsPending} onClick={handleOpen} 
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
                  <div className={classes.submitMenuCardsModal} style={{overflowX : 'auto',fontSize: '20px'}}  status={product.status}>
                    <span>Pedido n° {order.id}<br></br> Cliente:{order.client_name} <br></br>Mesa: {order.table}<br></br> Status:{product.status.replace('done', 'Pronto')} </span>
                    <span>{orderProduct.map (function (item, index) {
                      return(
                        <div key={index}>
                          <p>{item.qtd} {item.name} {item.flavor === 'null' ? '' : item.flavor} {item.complement === 'null' ? '' : item.complement }</p>
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
        </div>
        
        <p className='colorW'><Copyright/></p>
       
      </Container>
    </Grid>
  )
};
export default Kitchen;