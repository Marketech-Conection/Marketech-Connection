import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import Footer from './Components/Footer'
import Home from './pages/Home'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes;