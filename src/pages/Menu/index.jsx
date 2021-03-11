import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Grid, Container, Button, Snackbar } from '@material-ui/core'; 
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStyles } from '../../style.js';
import Copyright from '../../components/Copyright';
import { Alert, Logo }  from '../../components/Alert';
import NavBar from '../../components/NavBar';

const Menu = () => {
  const classes = useStyles();
  const history = useHistory();

  const tokenLocal = localStorage.getItem('token');
  const [list, setList] = useState([]);
  const [listMap, setListMap] = useState([]); 

  const [order, setOrder] = useState({});
  const [productPrices, setProductPrices] = useState(0);
  const [totalOrder, setTotalOrder] = useState([]);

  const [openAlert, setOpenAlert] = useState(false);
  const [messageError, setMessageError] = useState('');

  const clearHall = () => {
    history.push('/Hall');
  };

  const listBreakFast = () => {
    const productsBreakfast = list.filter(itens => itens.type===('breakfast'));
    setListMap(productsBreakfast); 
  };

  const listHamburguer = () => {
    const productsHamburguers = list.filter(itens => itens.sub_type===('hamburguer'));
    setListMap(productsHamburguers);
  };

  const listDrinks = () => {
    const productsDrinks = list.filter(itens => itens.sub_type===('drinks'));
    setListMap(productsDrinks);
  };

  const calculatorOrder = () => {
    setProductPrices(totalOrder.reduce((acumulado, product) => acumulado + (product.qtd*Number(product.price)), 0));
  };

  const orderUpdate = (product) => {
    const newArray = totalOrder;
    newArray.push(product);
    setTotalOrder(newArray);
  };

  useEffect(()=>{
    console.log(totalOrder);
  },[totalOrder]);

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      const dados = data.map(elem =>  ({...elem, disabled: false}));
      setList(dados);
    });
  }, [tokenLocal]);

  function sendOrder () {
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `${tokenLocal}`,
      },
      body: JSON.stringify({
        'client': `${order.client}`,
        'table': `${order.table}`,
        'products':
        totalOrder.map((product) => (
          {
            'id': Number(product.id),
            'qtd': Number(product.qtd),
          }
        )),
      }),
    })
    .then(() => {
      clearHall();
    });
  } ;

  function ascendQuantity (product,index) {
    if(product.name === totalOrder[index].name){
      totalOrder[index].qtd++;
      setTotalOrder([...totalOrder]); 
      calculatorOrder();
    }
  };

  function downQuantity (product, index) {
    if(product.name === totalOrder[index].name && product.qtd === 1){
      setListMap(prevListMap => {
        return prevListMap.map(prevElem => prevElem.id === product.id ? {...prevElem, disabled: false } : prevElem);
      })
      totalOrder.splice(index, 1);
      setTotalOrder([...totalOrder]);
      calculatorOrder();
    }else if (product.name === totalOrder[index].name) {
      totalOrder[index].qtd--;
      setTotalOrder([...totalOrder]);
      calculatorOrder(); 
    }
  };

  function validadeInputs(){
    const table = (order.table);
    const client = (order.client);
    if ( client === undefined || table === undefined ){
      const error = 'Preencha os campos corretamente';
      setMessageError(error);
      setOpenAlert(true);
    }
    else {
      sendOrder();   
    };   
  };

  const HandleOrder = (e) => {
    e.preventDefault()
    
    const product = e.target.parentNode;

    const idProduct = Number(product.getAttribute('id'));
    const nameProduct = product.getAttribute('name');
    const priceProduct = product.getAttribute('price');
    const flavorProduct = product.getAttribute('flavor');
    const complementProduct = product.getAttribute('complement');
    
    setListMap(prevListMap => {
      return prevListMap.map(prevElem => prevElem.id === idProduct ? {...prevElem, disabled: true } : prevElem);
    });

    const orderTemplate = {
      id: idProduct,
      name: nameProduct,
      price: priceProduct,
      flavor: flavorProduct,
      complement: complementProduct,
      qtd: 1,
    };

    orderUpdate(orderTemplate);
    calculatorOrder();
  };

  const handleClose = (reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpenAlert(false);
	};

  return (
    <Grid>
      <NavBar/> 
      <Container className={classes.displayMenu}>
        <div className={classes.displayOrder} >
          <form  className={classes.paperTable} noValidate autoComplete="off" >
            <Input className = {classes.inputTableName} placeholder="Nome" fullWidth inputProps={{ 'aria-label': 'description' }} type='text'
              name='nome'
              required
              onChange={(event) =>
                setOrder({ ...order, client: event.target.value })
            }/>
            <Input className = {classes.inputTableName} placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} type='text'
              name='mesa'
              required
              onChange={(event) =>
                setOrder({ ...order, table: event.target.value })
            }/>
          </form>
          {totalOrder.map((product, index) => (
            <div key={index} >
              <AddCircleIcon value='+' type='button' border='none' onClick={ () => {ascendQuantity (product,index)}}/>
              <span>{product.qtd }</span>
              <RemoveCircleIcon  value='-' type='button' onClick={() => {downQuantity (product, index)}}/>
              <span>{product.name} </span>
              <span>{product.flavor === 'null' ? '' : product.flavor} </span>
              <span>{product.complement === 'null' ? '' : product.complement }</span>
              <span> R$ {product.price},00  </span> 
            </div>
          ))} 
          <div>
          <p> Total Pedido: R$ {productPrices}</p>
          <Button className={classes.buttonCancel}variant="outlined" color="primary" onClick={() => clearHall()}>Cancelar</Button>
          <Button className={classes.buttonOk}variant="outlined" color="primary"onClick={() => validadeInputs()}>Enviar para cozinha</Button>
        </div>
        </div>
        <div className={classes.displayMenuButton}>
        <button onClick={listBreakFast} className={classes.submitMenuType}>Café da manhã</button>
            <button onClick={listHamburguer} className={classes.submitMenuType}>Hamburguers</button>
            <button onClick={listDrinks} className={classes.submitMenuType} >Bebidas</button>
            <div className={classes.displayItensButton}>
            {listMap.map((product) => (
              <div key={product.id} id={product.id} name={product.name} flavor={product.flavor} complement={product.complement} price={product.price}>
                <button className={classes.submitMenuItems} disabled={product.disabled} onClick ={HandleOrder}>{product.name} {product.flavor} {product.complement}<br></br>R$ {product.price},00  </button>
              </div>)
            )}
            </div>
        </div>
      </Container>
      <p className='colorW'><Copyright/></p>
      <Snackbar anchorOrigin={ {vertical: 'top', horizontal: 'center' }} open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert className = {classes.inputAlert}  onClose={handleClose} severity='error'> {messageError} </Alert>
      </Snackbar>
    </Grid>
  );
};
export default Menu;