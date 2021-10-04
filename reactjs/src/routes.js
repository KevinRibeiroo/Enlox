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
import Chat from './pages/chat';
import EditarProduto from './pages/editarProduto';
import Branco from './pages/Branco';
import CadasdtrarProduto from './pages/cadastrarProduto';
import CadastroDeUsuario from './pages/cadastroUsuario';
import Login from './pages/login';
import Compra from './pages/compra';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Branco} />
                <Route path="/home" component={Home} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/termosServiço" component={TermosServiço}/>
                <Route path="/sobreNos" component={sobreNos} /> 
                <Route path="/meusAnuncios" component={MeusAnuncios}/>
                <Route path="/produto" component={Produto}/>
                <Route path="/politicaDePrivacidade" component={politicaPrivacidade}/>
                <Route path="/userRegistrado" component={userRegistrado}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/editarProduto" component={EditarProduto}/>
                <Route path="/cadastrarProduto" component={CadasdtrarProduto} />
                <Route path="/cadastroDeUsuario" component={CadastroDeUsuario} />
                <Route path="/login" component={Login} />
                <Route path="/compra" component={Compra} />
            </Switch>
        </BrowserRouter>
    )
}