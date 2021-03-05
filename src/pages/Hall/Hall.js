import React, {  useState } from 'react';
import {  NavBar, useStyles } from "../../components/Header/Hearder.js";
import { Footer } from "../../components/Footer/Footer.js";
import { Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles  } from '@material-ui/core/styles';
import { Menu } from '../../components/Menu/MenuFinal/Menu.js';


    const  Hall = () => {
    const classes = useStyles();
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState({});
  
      const addProductToQuote = (data) => {
      let newObject = {...products};
        if (data.product) {
        delete newObject[data.product.id];
        if (data.product.qtd > 0) {
          newObject[data.product.id] = data.product;
        }
      }
      if (data.cancel) {
        newObject =  {};
        setClient('');
        setTable('');
      }
     
      setTotal(getTotals(newObject));
      setProducts(newObject);
      
    };
  
    const getTotals = (products) => {
      let total = 0;
      for (let index in products) {
        total += products[index].qtd * products[index].price;
      }
      return total;
    };

    const CssTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: 'green',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'yellow',
          },
          '&:hover fieldset': {
            borderColor: 'red',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          },
        },
      },
    })(TextField);

  return (
   
    <div className={classes.HallConteiner}>
       <NavBar />
       
        <Box className={classes.customertable}>
    <Typography component="h1" variant="h4" style={{ paddingRight: '70px', textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
     Cardápio Salão
     </Typography>
     <form className="box-data">
     <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
    Nome do Cliente
     </Typography>
     <CssTextField className={classes.margin} label="Nome do Cliente" type="text" variant="outlined" id="custom-css-outlined-input" required fullWidth value={client} onChange={(event) => setClient(event.target.value)} />
       <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bolder', color: '#ce5f18', marginLeft: '0.5rem' }}>
    Mesa
     </Typography>
  
    <CssTextField className={classes.margin} label="Número da Mesa" type="number"  min="1" max="999" variant="outlined" id="custom-css-outlined-input-numer" required fullWidth value={table} onChange={(event) => setTable(event.target.value)} />
     </form>
  </Box>
  <Menu addProductToQuote={addProductToQuote} products={products} client={client} table={table} total={total} />

       <Footer />
          
    </div>
  )
};

export default Hall;