import { Container } from "./styled"
import { Link } from "react-router-dom"
import Cookies from "js-cookie";
//import Api from "../../service/api";
import { useState } from "react";
import Api from "../../service/api";
//import { useHistory } from "react-router";



const api = new Api();

function usuLogado(){
    if (Cookies.get('usuario-logado') !== undefined){
let logado = Cookies.get('usuario-logado');



let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;

}
}






export default function Cabecalho(){

    
    //const nav = useHistory();
    

    let usuarioLogado = usuLogado() || {};

    //const [idUsu] = useState(usuarioLogado.id_usuario);
    const [nmUsu] = useState(usuarioLogado.nm_usuario)
    const [imgUsu, setImgUsu] = useState([])


   
    const usuarioo = async () => {
        const r = await api.listarUsu(usuarioLogado.id_usuario);
        setImgUsu(r);
    }


    function pegarImg() {

        if (usuarioLogado.img_foto.includes('http'))
        return usuarioLogado.img_foto
        else 
        return `http://localhost:3030/usuariozin?imagem=${usuarioLogado.img_foto}`
    }

//    console.log(Cookies.get('usuario-logado'))

    return (
        <header style={{backgroundColor: "#E7E6E1"}}>
            <Container>
                <div className="icons-cabecalho"><Link to = "/" className="navegacao"><div className="icon"><img src="/assets/images/casa 1.svg" alt="" /></div>
                <div className="icon-text">Início</div></Link></div>

                {Cookies.get('usuario-logado') === undefined   ? <div className="icons-cabecalho"><Link to = "/login" className="navegacao"> <div className="icon"><img src="/assets/images/user.svg" alt="" /></div>
                <div className="icon-text"> Login </div></Link></div>
                :<div className="icons-cabecalho"><Link to = "/perfil" className="navegacao"> <div className="icon"><img src={pegarImg()} alt="" style={{borderRadius: "50%", width: "3em"}} /></div>
                <div className="icon-text"> {nmUsu != null && nmUsu.length >= 15 ? nmUsu.substr(0, 15) + '...' : nmUsu}</div></Link></div>}
                
                <div className="icons-cabecalho"><Link to = "/cadastrarProduto" className="navegacao"><div className="icon"><img src="/assets/images/produto.svg" alt="" /> </div>
                <div className="icon-text">Anunciar</div></Link></div>
                <Link to = "/" className="navegacao"><div> <img src="/assets/images/logo.svg" alt="" /> </div></Link>
                <div className="icons-cabecalho"><Link to = "/meusAnuncios" className="navegacao"><div className="icon"><img src="/assets/images/megaphone 1.svg" alt="" /> </div>
                <div className="icon-text">Meus anúncios</div></Link></div>
                <div className="icons-cabecalho"><Link to="/carrinho" className="navegacao"><div className="icon"><img src="/assets/images/carrinho.svg" alt="" /></div>
                <div className="icon-text">Carrinho</div></Link></div>
                <div className="icons-cabecalho"><Link to = "/chat" className="navegacao"><div className="icon"><img src="/assets/images/chatt.svg" alt="" /></div>
                <div className="icon-text">Chat</div></Link></div>
            </Container>
        </header>
    )
}


export {usuLogado}