import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Home from './pages/Home'
import Lojas from './pages/Lojas'
import shoppingCart from './pages/shoppingCart'
import Produtos from './pages/products'
import Produto from './pages/Product'
import Servicos from './pages/Serviços'
import ServicosWeb from './pages/serviçosDaPagina'
import Erro from './pages/Erro'
import Salvos from './pages/Salvos'
import Compra from './pages/Compra'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/lojas" component={Lojas}/>
                <Route exact path="/carrinho" component={shoppingCart} />
                <Route exact path="/serviços" component={Servicos} />
                <Route exact path="/serviços/:id" component={ServicosWeb}/>
                <Route exact path="/lojas/:id" component={Produtos}/>
                <Route exact path="/lojas/:idShop/:idProduct" component={Produto}/>
                <Route exact path="/salvos" component={Salvos}/>
                <Route exact path="/compra" component={Compra}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;