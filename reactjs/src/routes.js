import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Carrinho from './pages/carrinho';
import TermosServiço from './pages/TermosServiço';
import SobreNos from './pages/sobreNos';
import sobreNos from './pages/sobreNos';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/termosServiço" component={TermosServiço}/>
                <Route path="/sobreNos" component={sobreNos} />
            </Switch>
        </BrowserRouter>
    )
}