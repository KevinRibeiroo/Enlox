import { Link } from "react-router-dom"

export default function Index(){
    return(
        <div className = "Container">
           <Link to="/home"><b>Home   │</b></Link>
           <Link to="/carrinho"><b>carrinho   │</b></Link>
           <Link to="/termosServiço"><b>Tela termosServiço   │</b></Link>
           <Link to="/sobreNos"><b>Tela Sobre nos   │</b></Link>
           <Link to="/meusAnuncios"><b>Tela Meus Anuncios   │</b></Link>
           <Link to="/produto"><b>Tela Produto   │</b></Link>
           <Link to="/politicaDePrivacidade"><b>Tela politica De Privacidade  │</b></Link>
           <Link to="/userRegistrado"><b>Tela userRegistrado   │</b></Link>
           <Link to="/perfil"><b>Tela perfil   │</b></Link>
           <Link to="/editarProduto"><b>Tela Editar Produto   │</b></Link>
           <Link to="/cadastroDeUsuario"><b>Tela Cadastrar Novo Usuário   │</b></Link>
        </div>
    )
}