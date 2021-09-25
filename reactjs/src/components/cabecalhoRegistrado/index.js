import { Container } from "./styled"

export default function cabecalho(){
    return (
        <header style={{backgroundColor: "#E7E6E1"}}>
            <Container>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/casa 1.svg" alt="" /></div>
                <div className="icon-text">Início</div></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/userRegistrado.png" alt="" /></div>
                <div className="icon-text">Login</div></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/task 1.svg" alt="" /></div>
                <div className="icon-text">Planos</div></div>
                <div> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/megaphone 1.svg" alt="" /></div>
                <div className="icon-text">Meus anúncios</div></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/carrinho.svg" alt="" /></div>
                <div className="icon-text">Carrinho</div></div>
                <div className="icons-cabecalho"><div className="icon"><img src="/assets/images/Pesquisar.svg" alt="" /></div>
                <div className="icon-text">Pesquisar</div></div>
            </Container>
        </header>
    )
}