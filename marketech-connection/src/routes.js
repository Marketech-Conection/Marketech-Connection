import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Lojas from './pages/Lojas'
import shoppingCart from './pages/shoppingCart'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/lojas" component={Lojas}/>
                <Route exact path="/carrinho" component={shoppingCart} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes;