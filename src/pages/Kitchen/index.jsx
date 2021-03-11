import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Container, Modal, Backdrop, Fade, Button, Icon} from '@material-ui/core';
import { useStyles } from '../../style.js';
import Copyright from '../../components/Copyright';
import NavBar from '../../components/NavBar';

function Kitchen () {
  const classes = useStyles();
  const tokenLocal = localStorage.getItem('token');

  const [order, setOrder] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);
  const [list, setList] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [itemIdOrder, setItemIdOrder] = useState();
  const [openConfirm, setOpenConfirm] = React.useState(false);
  
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
        "Content-Type": "application/json",
        'accept': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
      body: JSON.stringify(order),
    })       
    .then((response) => response.json())
    .then(() => {
      handleCloseConfirm();  
      handleClose();
      Kitchen();
    });
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
      const dados = data.filter(product => product.status === 'pending');
      setList(dados);
      handleClose();
      handleCloseConfirm();   
    });
  }, [tokenLocal]);

  useEffect(() => {
    Kitchen();
  }, [Kitchen]);

  useEffect(() => {
    orderId();
  }, [itemIdOrder]);

  const handleOpen = (e) => {
    e.preventDefault();
    const product = e.target.parentNode;
    const idProduct = Number(product.getAttribute('id'));
    setItemIdOrder(idProduct); 
    setOpen(true);
  };

  const handleCompleted = (e) => {
    e.preventDefault();
    setOrder(order.status = 'done');
    orderPut ();
  }; 

   const handleOpenConfirm = (e) => {
    setOpenConfirm(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  }; 

  return (
    <Grid>
      <NavBar/> 
      <Container>
        <h1 className={classes.displayHPanding}> Cozinha <Button variant='outlined' className={classes.link} onClick={Kitchen}>Atualizar</Button></h1>
        <div className={classes.displayPanding}>
          {list.map (function (product, index) {
            return(
              <div  key={index} id={product.id}>   
                <button  type='button' className={classes.submitMenuItemsPending} onClick={handleOpen} 
                cursor='pointer'>Pedido n°{product.id} <br></br> Status:  {product.status.replace('pending', 'Pendente')} </button>
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
                <Fade in={open}  style={{overflowX : 'auto',fontSize: '20px'}} >
                  <div className={classes.submitMenuCardsModal} status={product.status}>
                    <span><p>Pedido n° {order.id} <br></br> Cliente:{order.client_name} <br></br>Mesa: {order.table}<br></br>Status:{product.status.replace('pending', 'Pendente')} </p> </span>
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
                      endIcon={<Icon>send</Icon>} onClick={handleOpenConfirm}>Concluir
                    </Button> 
                  </div>
                </Fade>
              </Modal>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openConfirm}
                onClose={handleCloseConfirm}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}> 
                <Fade in={openConfirm}  style={{overflowX : 'auto',fontSize: '14px'}} >
                  <div className={classes.submitMenuCardsModal} style={{overflowX : 'auto',fontSize: '20px'}}  status={product.status}>
                   <p>Deseja enviar o pedido?</p>
                    <Button variant="contained"
                      color="primary"
                      className={classes.buttonOk}
                      endIcon={<Icon>send</Icon>} onClick={handleCompleted}>Sim
                    </Button> 
                    <Button variant="contained"
                      color="primary"
                      className={classes.buttonCancel}
                      endIcon={<Icon>send</Icon>} onClick={handleCloseConfirm}>Não
                    </Button> 
                  </div>
                </Fade>
              </Modal>    
            </div>          
          )})}
        </div>
      </Container>
      <p className='colorW'><Copyright/></p>
    </Grid>
  );
};

export default Kitchen;