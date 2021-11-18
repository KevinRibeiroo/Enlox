import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Carrinho from './pages/carrinho';
import TermosServiço from './pages/TermosServiço';
import sobreNos from './pages/sobreNos';
import MeusAnuncios from './pages/meusAnuncios';
import Produto from './pages/produto';
import politicaPrivacidade from './pages/políticaPrivacidade';
import recuperacaoSenha from './pages/recuperacaoSenha';
import reset from  './pages/resetar';
import Perfil from './pages/perfil'
import Chat from './pages/chat';

import CadastroDeUsuario from './pages/cadastroUsuario';

import Login from './pages/login';
import Compra from './pages/compra';
import PrAnuncio from './pages/PrimeiroAnuncio';
import CadastrarProduto from './pages/cadastrarProduto';

import ListagemProdutos from './pages/listagemProdutos';




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
                <Route path="/recuperacaoSenha" component={recuperacaoSenha}/>
                <Route path="/resetar" component={reset}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/cadastroDeUsuario1" component={CadastroDeUsuario} />
              
                <Route path="/login"  component={Login} />
                <Route path="/compra" component={Compra} />
                <Route path="/prAnuncio" component={PrAnuncio} />
                <Route path="/cadastrarProduto" component={CadastrarProduto} />
                <Route path="/listagemProdutos" component={ListagemProdutos}/>
            </Switch>
        </BrowserRouter>
    )
}