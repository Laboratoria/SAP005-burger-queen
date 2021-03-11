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
    const [data, setData] = useState([]);
    const styles = useStyles();
    console.log(cafe)
    console.log(menuAllDay)

    const changePicture = {
        'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG':'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens/public/images/Cafe_Americano.jpeg?raw=true',
        'https://upload.wikimedia.org/wikipedia/commons/4/41/Coffee_with_milk_%28563800%29.jpg':'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens/public/images/Cafe_com_leite.jpeg?raw=true',
        "https://pressfrom.info/upload/images/real/2019/02/08/misto-quente-perfeito-dicas-para-arrasar-no-lanche__78021_.jpg?content=1":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens/public/images/Misto_Quente.jpeg?raw=true',
        "https://media.gazetadopovo.com.br/viver-bem/2019/06/suco-fruta-acucar-risco-morte-768x512-f107f9a0.jpg":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens/public/images/Suco.jpeg?raw=true',
        "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/burger.jpeg?raw=true',
        "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/Burger_duplo.jpeg?raw=true',
        "https://s2.glbimg.com/6TYFXwek9ZpNXFeOzas09KizMKk=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/T/K/Hh8h2GR96v392DAkAqyA/912c9713-321e-4dfd-bca9-888c05c5ce50.jpeg":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/Batata_Frita.jpeg?raw=true',
        "https://www.delonghi.com/Global/recipes/multifry/103.jpg":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/aneis_de_cebola.jpg?raw=true',
        "https://i2.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/Agua.jpeg?raw=true',
        "https://i2.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/Agua_500.jpeg?raw=true',
        "https://www.abcdacomunicacao.com.br/wp-content/uploads/refri.png":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/refrigerante.jpg?raw=true',
        "https://www.abcdacomunicacao.com.br/wp-content/uploads/refri.png":'https://github.com/carinarocha/SAP005-burger-queen/blob/funcionalidade/imagens-restantes/public/images/Refrigerante_700.jpeg?raw=true',
    }
    
    useEffect(()=>{
        if (!data) return

        const products = [...data]
        const productsImageUpdate = products.map((item) => {
            return ({
                ...item, image: changePicture[item.image]
            })
        })
        const cafeDaManha = productsImageUpdate.filter(item => item.type === 'breakfast')
        const allDay = productsImageUpdate.filter(item => item.type === 'all-day')
        setCafe(cafeDaManha)
        setMenuAllDay(allDay)
        console.log(data)
    },[data])

    React.useEffect(() => {
        let requestOptions = {
            method: 'GET',
            headers: {
                accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ',
            },
            redirect: 'follow'
            }
        async function getData() {
            const response = await fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
            const dataDB = await response.json()
            setData(dataDB)
        }
        getData()
    }, [])

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
                    image={product.image}
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