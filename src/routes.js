import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../src/pages/Login/index.js';
import Cadastro from '../src/pages/SignUp/index.js'
import AnotarPedidos from '../src/pages/AnotarPedido/index.js';
import PedidosAFazer from '../src/pages/PedidosAFazer/index.js';
import PedidosProntos from '../src/pages/PedidosProntos/index.js';

const userIsLogged = () => {
    const tokenUser = localStorage.getItem('token');
    if (tokenUser != null) {
        return true;
    } else {
        return false;
    }
}

console.log(userIsLogged())



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/Cadastro" component={Cadastro} exact />
                <Route path="/AnotarPedidos" component={AnotarPedidos} exact />
                <Route path="/PedidosAFazer" component={PedidosAFazer} exact />
                <Route path="/PedidosProntos" component={PedidosProntos} exact />
                <Route component={() => <div>Page 404!</div>} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;