import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Home from './pages/Home'
import Lojas from './pages/Lojas'
import shoppingCart from './pages/shoppingCart'
import Servicos from './pages/Serviços'
import Produtos from './pages/products'
import ServicosWeb from './pages/serviçosDaPagina'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/lojas" component={Lojas}/>
                <Route exact path="/carrinho" component={shoppingCart} />
                <Route exact path="/serviços" component={Servicos} />
                <Route exact path="/lojas/produtos" component={Produtos}/>
                <Route exact path="/serviços/serviçosDaPagina" component={ServicosWeb}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;