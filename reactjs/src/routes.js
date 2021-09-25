import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Carrinho from './pages/carrinho';
import TermosServiço from './pages/TermosServiço';
import sobreNos from './pages/sobreNos';
import MeusAnuncios from './pages/meusAnuncios';
import Produto from './pages/produto';




export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/termosServiço" component={TermosServiço}/>
                <Route path="/sobreNos" component={sobreNos} /> 
                <Route path="/meusAnuncios" component={MeusAnuncios}/>
                <Route path="/produto" component={Produto}/>
            </Switch>
        </BrowserRouter>
    )
}