import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Carrinho from './pages/carrinho';
import TermosServiço from './pages/TermosServiço';
import sobreNos from './pages/sobreNos';
import MeusAnuncios from './pages/meusAnuncios';
import Produto from './pages/produto';
import politicaPrivacidade from './pages/políticaPrivacidade';
import userRegistrado from './pages/homeRegistrado'
import Perfil from './pages/perfil'



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
                <Route path="/politicaDePrivacidade" component={politicaPrivacidade}/>
                <Route path="/userRegistrado" component={userRegistrado}/>
                <Route path="/perfil" component={Perfil}/>

            </Switch>
        </BrowserRouter>
    )
}