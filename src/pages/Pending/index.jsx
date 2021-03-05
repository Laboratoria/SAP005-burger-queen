import React, {useEffect, useState, useCallback} from 'react'
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles, Copyright, NavBar} from '../../components.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import '../../style.css';

function Pending(){
  const classes = useStyles();
  const tokenLocal = localStorage.getItem('token');
  const [list, setList] = useState([])

  const pendingList = useCallback (() => {
    
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
          const dados = data.filter(product => product.status === 'done')
          setList(dados)
          
        });
      
  }, [tokenLocal])
  
  useEffect(() => {
    pendingList()
  },[pendingList])

  return (
      
      <React.Fragment >
        <NavBar/>
      <Container className='container'>
        <Typography component="div" />
              <Link to="/Hall"><ArrowBackIosIcon className={classes.arrow} color="disabled" fontSize="large"/> </Link>
              <div>
                
            {list && list.map (function (product, index) {
            return(
              <div  key={index}>
                <span>
                  <div>
                    <span>{product.client_name} {product.table}</span>
                    <span>{product.id} </span>
                    <span>{product.status}</span>
                    <span>{product.createdAt}</span>
                  </div>
                  <span>{product.Products.map(function(item) {
                    console.log(item)
                    return(
                      <div key={item.id}>
                        <span>{item.qtd} </span>
                        <span>{item.name} </span> 
                        <span>{item.price} </span>
                        <span>{item.flavor === 'null' ? '' : item.flavor} </span>
                        <span>{item.complement === 'null' ? '' : item.complement } </span>                 
                      </div>                    
                    )})}
                  </span>
                </span>
              </div>
              )
            })}
              </div>
            <Copyright/>
        </Container>      
        </React.Fragment>

    );
  }

  
  export default Pending;

  // function Kitchen (){
  //   const classes = useStyles();
  //   const tokenLocal = localStorage.getItem('token');
  //   const [list, setList] = useState([])
  
  
  
  //   const Kitchen = useCallback (() => {
      
  //     fetch('https://lab-api-bq.herokuapp.com/orders', {
  //       method: 'GET',
  //       headers: {
  //         'accept': 'application/json',
  //         'Authorization': `${tokenLocal}`,
  //       },
  //     })       
      
  //     .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         const dados = data.filter(product => product.status === 'pending')
  //         setList(dados)
          
  //       });
      
  //   }, [tokenLocal])
  
  //   useEffect(() => {
  //     Kitchen()
  //   }, [Kitchen])
  
  //   return (
  //     <div className='pending'>
  //       <NavBar/>  
  //       <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">  
  
  //         {list && list.map (function (product, index) {
  //           return(
  //             <div  key={index}>
  //               <span>
  //                 <div>
  //                   <span>{product.client_name} {product.table}</span>
  //                   <span>{product.id} </span>
  //                   <span>{product.status}</span>
  //                   <span>{product.createdAt}</span>
  //                 </div>
  //                 <span>{product.Products.map(function(item) {
  //                   console.log(item)
  //                   return(
  //                     <div key={item.id}>
  //                       <span>{item.qtd} </span>
  //                       <span>{item.name} </span> 
  //                       <span>{item.price} </span>
  //                       <span>{item.flavor === 'null' ? '' : item.flavor} </span>
  //                       <span>{item.complement === 'null' ? '' : item.complement } </span>                 
  //                     </div>                    
  //                   )})}
  //                 </span>
                  
  //               </span>
  //             </div>
  //           )
  //         })}
  //       </Grid>
  //     </div>
  //   )
  // }
  
  // export default Kitchen;