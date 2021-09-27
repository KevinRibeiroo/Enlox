import { Rodape } from "./styled"
import { Link } from "react-router-dom"

export default function rodape(){
    return (
        <footer style={{backgroundColor: "#E7E6E1", height: "12vh"}}>
            <Rodape>
                <div className="sobre-empresa"><Link to = "/politicaDePrivacidade" className="navegacao"><div className="info">Política de Privacidade</div></Link>
                <div className="info">Política de cookies</div>
                <Link to="/termosServiço" className="navegacao"><div className="info">Termos & condições </div></Link>
                <Link to="/sobreNos" className="navegacao"><div className="info" style={{width: "4em"}}>Sobre Nos</div></Link></div>

                <div className="informacoes-contato"><div className="contato"><div className="icon"><img src="/assets/images/linkedin.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/face.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/twitter.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/insta.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/zap.svg" alt="" /></div></div>
                <div style={{marginTop: "0.5em"}}> <img src="/assets/images/logo.svg" alt="" style={{width: "4em" }}/> <span> Copyright © 2021-2021 Enlox Company S.L. All rights reserved </span></div></div>
            </Rodape>
        </footer>
    )
}