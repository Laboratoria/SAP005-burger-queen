import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { OrderResume } from '../CloseOrder/CloseOrder.js';
import { Breakfast } from '../MenuBreackfast/Breackfast.js';
import { Dinner, SideSishers, Drinks } from '../MenuDinner/Dinner.js';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} id={`nav-tabpanel-${index}`} aria-labelledby={`nav-tab-${index}`}
      value={`value-${index}`} {...other} >
      {value === index && (
        <Box component="div" style={{ marginTop: '1rem' }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`, 'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (

    <Tab style={{ opacity: '100%', minWidth: '140px' }} component="a" onClick={(event) => {
      event.preventDefault();
    }}
      {...props} />
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
      }).catch(() => { setProducts([]) })
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

      <TableHead style={{ width: '100%' }}>
        <TableRow >
          <Tabs centered indicatorColor="primary" style={{ backgroundColor: '#ffe1ce', borderBottom: '2px solid #2d9bd1', borderRadius: ' 8px 8px 0 0', color: '#cf5e18' }} variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs">
            <LinkTab label="Manhã" icon={<EmojiFoodBeverageIcon style={{ color: '#cf5e18' }} />} href="#breakfast" {...a11yProps(0)} />
            <LinkTab label="Almoço/Janta" icon={<FastfoodIcon style={{ color: '#cf5e18' }} />} href="#all-day" {...a11yProps(1)} />
            <LinkTab label="Extras" icon={<FastfoodOutlinedIcon style={{ color: '#cf5e18' }} />} href="#all-day" {...a11yProps(2)} />
            <LinkTab label="Bebidas" style={{ color: '#259ad9' }} icon={<LocalDrinkIcon style={{ color: '#259ad9' }} />} href="all-day" {...a11yProps(3)} />
            <LinkTab label="Pedidos" style={{ color: '#629c25' }} icon={<MonetizationOnIcon style={{ color: '#629c25' }} />} href="#order-resume" {...a11yProps(4)} />
          </Tabs>
        </TableRow>
      </TableHead>

      <TabPanel style={{ textTransform: 'uppercase', color: 'black' }} value={value} index={0}>
        <Breakfast menu={dataProducts['breakfast']} addProductToQuote={props.addProductToQuote} products={props.products} />
      </TabPanel>

      <TabPanel style={{ textTransform: 'uppercase', color: 'black' }} value={value} index={1}>
        <Dinner menu={dataProducts['all-day']} addProductToQuote={props.addProductToQuote} products={props.products} />
      </TabPanel>

      <TabPanel style={{ textTransform: 'uppercase', color: 'black' }} value={value} index={2}>
        <SideSishers menu={dataProducts['all-day']} addProductToQuote={props.addProductToQuote} products={props.products} />
      </TabPanel>

      <TabPanel style={{ textTransform: 'uppercase', color: 'black' }} value={value} index={3}>
        <Drinks menu={dataProducts['all-day']} addProductToQuote={props.addProductToQuote} products={props.products} />
      </TabPanel>

      <TabPanel style={{ textTransform: 'uppercase', color: 'black' }} value={value} index={4}>
        <OrderResume addProductToQuote={props.addProductToQuote} products={props.products} client={props.client} table={props.table} total={props.total} />
      </TabPanel>

    </Box>

  );
}