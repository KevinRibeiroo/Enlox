import { Container } from "./styled"
import { Link } from "react-router-dom"
export default function cabecalho(){
    return (
        <header style={{backgroundColor: "#E7E6E1"}}>
            <Container>
                <div className="icons-cabecalho"><Link to = "/home" className="navegacao"><div className="icon"><img src="/assets/images/casa 1.svg" alt="" /></div>
                <div className="icon-text">Início</div></Link></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/user.svg" alt="" /></div>
                <div className="icon-text">Login</div></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/task 1.svg" alt="" /> </div>
                <div className="icon-text">Planos</div></div>
                <Link to = "/home" className="navegacao"><div> <img src="/assets/images/logo.svg" alt="" /> </div></Link>
                <div className="icons-cabecalho"><Link to = "/meusAnuncios" className="navegacao"><div className="icon"><img src="/assets/images/megaphone 1.svg" alt="" /> </div>
                <div className="icon-text">Meus anúncios</div></Link></div>
                <div className="icons-cabecalho"><Link to="/carrinho" className="navegacao"><div className="icon"><img src="/assets/images/carrinho.svg" alt="" /></div>
                <div className="icon-text">Carrinho</div></Link></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/Pesquisar.svg" alt="" /></div>
                <div className="icon-text">Pesquisar</div></div>
            </Container>
        </header>
    )
}