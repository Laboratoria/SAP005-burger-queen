import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login.js';
import Cadastro from './pages/Cadastro'
import AnotarPedidos from './pages/AnotarPedido.js';
import PedidosAFazer from './pages/PedidosAFazer.js';
import PedidosProntos from './pages/PedidosProntos.js';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Cadastro" component={Cadastro} exact />
            <Route path="/AnotarPedidos" component={AnotarPedidos} exact />
            <Route path="/PedidosAFazer" component={PedidosAFazer} exact />
            <Route path="/PedidosProntos" component={PedidosProntos} exact />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    )
};

export default Routes;