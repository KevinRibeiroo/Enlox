import { Rodape } from "./styled"
import { Link } from "react-router-dom"

export default function rodape(){
    return (
        <footer style={{backgroundColor: "#E7E6E1", }}>
            <Rodape>
                <div className="sobre-empresa"><Link to = "/politicaDePrivacidade" className="navegacao"><div className="info">Política de Privacidade</div></Link>
                <div className="info">Política de Cookies</div>
                <Link to="/termosServiço" className="navegacao"><div className="info">Termos & Condições </div></Link>
                <Link to="/sobreNos" className="navegacao"><div className="info" style={{width: "4em"}}>Sobre Nós</div></Link></div>

                <div className="informacoes-contato"><div className="contato"><div className="icon"><img src="/assets/images/linkedin.png" alt="" /></div>
                <div className="icon"><a href="https://www.facebook.com/Enlox-113071324497026"><img src="/assets/images/face.png" alt="" /></a></div>
                <div className="icon"><img src="/assets/images/twitter.png" alt="" /></div>
                <div className="icon"><a href="https://www.instagram.com/enlox_tcc/"><img src="/assets/images/insta.png" alt="" /></a></div>
                <div className="icon"><img src="/assets/images/zap.svg" alt="" /></div></div>
                <div style={{marginTop: "0.5em"}}> <img src="/assets/images/logo.svg" alt="" style={{width: "4em" }}/> <span> Copyright © 2021-2021 Enlox Company S.L. All rights reserved </span></div></div>
            </Rodape>
        </footer>
    )
}