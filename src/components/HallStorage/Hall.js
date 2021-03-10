import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Button, AppBar, Toolbar, CardHeader, CardMedia, CardContent} from '@material-ui/core';
import {Card, CardActions} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {Typography, TextField, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import { findByLabelText } from '@testing-library/dom';


const useStyles = makeStyles((theme)=>({
    root:{
        background: 'linear-gradient(45deg,#333, #999)',
        border: 0,
        borderRadius: 5,
    },
    toolbar:{
        justifyContent: 'space-between',
        background: '#242424b2',
    },
    card:{
        width: 345,
        textAlign: 'center',
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

function Hall() {
    const history = useHistory()
    const routerCafe=()=>{
        sessionStorage.setItem("nameCliente", nameClient)
        sessionStorage.setItem("table", table)

        history.push('/hall/cafe')
    }

    const routerAllDay=()=>{
        sessionStorage.setItem("nameClient", nameClient)
        sessionStorage.setItem("table", table)
    
        history.push('/hall/allday')
    }

    const [nameClient, setNameClient] = useState([]);
    const [table, setTable] = useState('');
    const [nome, setNome] = useState('');
    const [role, setRole] = useState('');
    const [menu, setMenu] = useState([]);
    const [pedidos, setPedidos] = useState ([]);
    const [menuAllDay, setMenuAllDay] = useState ([]);
    const [cafe, setCafe] = useState ([]);
    const styles = useStyles();


    useEffect(() => { let myHeaders = new Headers();
        myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ");
    
        let raw = "";
    
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
        .then(response => response.json())
        .then(result => {
            const cafeDaManha = result.filter(item => item.type === 'breakfast')
            const allDay = result.filter(item => item.type === 'all-day')
            console.log(cafeDaManha)
            setCafe(cafeDaManha)
            setMenuAllDay(allDay)
        })
        .catch(error => console.log('error', error));},[])

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        history.push('/');
    }

    function add (produto) {
        produto.qtd = 1
        console.log(produto)
        setPedidos(prevPedidos => {
        return [... prevPedidos, produto]
        })
    }

    function addQtd (index) {
        const copyPedidos = [...pedidos]
        copyPedidos[index].qtd++
        setPedidos(copyPedidos)
        console.log(pedidos)
    }

    function removeQtd (index) {
        const copyPedidos = [...pedidos]
        copyPedidos[index].qtd--
        setPedidos(copyPedidos)
    }

    function sendOrder (){
        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ"
            },
            body: JSON.stringify({
                "client": nameClient,
                "table": table,
                "products":
                pedidos.map((item) => (
                {
                    "id": Number(item.id),
                    "qtd": Number(item.qtd)
                }
                ))
            })
        })
        .then((response) => response.json())
        .then((json) => {
        console.log(json)
        })
    }

    return (
        <Grid container direction='column'>
            <Grid item>
                <AppBar position='static'>
                    <Toolbar className={styles.toolbar}>
                        <Button onClick={ ()=> setMenu (cafe) } >
                            Café da manhã 
                        </Button>
                        <Button onClick={ ()=> setMenu (menuAllDay) }>
                            Resto do dia 
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={(e) => logout(e)} 
                            className="logout"
                        >
                            Sair
                        </Button>
                    </Toolbar>
                </AppBar>
            </Grid>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={9}>
        <Grid container direction='row' justify='center'>
        {menu && menu.map(product => (
            <Card className={styles.card}>
                <CardHeader 
                    action={
                    <IconButton aria-label="Add">
                        {product.qtd}
                        <ShoppingCartIcon />
                    </IconButton>
                    }
                    title={product.name}
                />
                <CardMedia className={styles.media}
                    image='https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif'
                />
                <CardContent>
                    <Typography 
                        variant="body2"
                        color="textPrimary" 
                        component="p"
                    >
                    {/*{product.flavor}*/}
                    {/*{product.complement}*/}
                    </Typography>
                    <Typography
                        variant="body2" 
                        color="textSecondary" 
                        component="p"
                    >
                    R${product.price},00
                    </Typography>
                </CardContent>
                {pedidos && pedidos.map((product, index) => (
                <CardActions disableSpacing>
                    <IconButton aria-label="add product"
                        value={product.id} 
                        onClick = { () => addQtd (index)}
                    >
                        {product.name}
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="remove product" 
                        onClick = { () => removeQtd (index)}
                    >
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </CardActions>
                ))}
                <Button 
                    disabled = {product.qtd && product.qtd != 0}
                        onClick = { () => add (product)}
                    >
                        Adicionar
                </Button>
                <Button 
                    size='small'
                    color='secondary'
                    onClick={sendOrder}
                >
                    Enviar pedido 
                </Button>
            </Card>
        ))}
        </Grid>
        <TextField 
            className={styles.root} 
            type="text"  
            label="Cliente: "  
            value={nameClient} 
            onChange={(event) => setNameClient(event.target.value)} 
        />
        <div />
        <TextField 
            className={styles.root} 
            type="number" 
            label="Mesa: " 
            value={table} 
            onChange={(event) => setTable(event.target.value)}
        />
        </Grid>
        <Grid item xs={false} sm={2} />
    </Grid>
    )
}

export default Hall;