import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { OrderResume } from '../order-resume/index.js';
import { Breakfast } from '../MenuBreackfast/Breackfast.js';
import { AllDay } from '../MenuDinner/Dinner.js';
import Button from '@material-ui/core/Button';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Theme } from '@material-ui/core';
import Color from 'color';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      value={`value-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div" style={{marginTop: '1rem'}}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}



function LinkTab(props) {
  

  return (

    <Tab  component="a" onClick={(event) => {
        event.preventDefault();}}
      {...props}
    />


  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
}));

export const Menu = (props) => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('https://lab-api-bq.herokuapp.com/products/', {
      method: 'GET',
        headers: {
          'Authorization': token,
        },
      })
      .then(result => result.json())
        .then(result => {
          if (result.code && result.code === 401) {
            result = [];
          }
          setProducts(result)
        }).catch(() => {setProducts([])})
  }, []);


  const formatApi = () => {
    let newResponse = {
      "breakfast": [],
      "all-day": {
        "hamburguer": [],
        "side": [],
        "drinks": [],
      },
    };
    
    products.forEach((product) => {
      if (product.type === "breakfast") {
        newResponse['breakfast'].push(product);
        return;
      }
      if (product.sub_type === "side" || product.sub_type === "drinks") {
        newResponse['all-day'][product.sub_type].push(product);
        return;
      }
      newResponse['all-day'][product.sub_type].push(product);
      return;
      
    })
    return newResponse;
  }

  const dataProducts = formatApi();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box className={classes.root}>
      
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs"
        >
          <LinkTab label="Café da manhã"  icon={<EmojiFoodBeverageIcon style={{ color: '#259ad9' }}/>} href="#breakfast" {...a11yProps(0)} />
          <LinkTab label="Almoço e Janta" icon={<FastfoodIcon style={{ color: '#259ad9' }}/>}  href="#all-day" {...a11yProps(1)} />
          <LinkTab label="Pedido Resumido" icon={<AttachMoneyIcon style={{ color: '#259ad9' }}/>}  href="#order-resume" {...a11yProps(2)} />

          <LinkTab label="Pedido Resumido" icon={<AttachMoneyIcon  style={{ color: '#259ad9' }} />}  href="#order-resume" {...a11yProps(3)} />
        </Tabs>
         

      <TabPanel value={value} index={0}>
        <Breakfast menu={dataProducts['breakfast']} addProductToQuote={props.addProductToQuote} products={props.products} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <AllDay menu={dataProducts['all-day']} addProductToQuote={props.addProductToQuote} products={props.products} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <OrderResume addProductToQuote={props.addProductToQuote} products={props.products} client={props.client} table={props.table} total={props.total} />
      </TabPanel>
      


      <TabPanel value={value} index={3}>
        <OrderResume addProductToQuote={props.addProductToQuote} products={props.products} client={props.client} table={props.table} total={props.total} />
      </TabPanel>

    </Box>
  );
}