import { Rodape } from "./styled"


export default function rodape(){
    return (
        <footer style={{backgroundColor: "#E7E6E1", height: "12vh"}}>
            <Rodape>
                <div className="sobre-empresa"><div className="info">Política de Privacidade</div>
                <div className="info">Política de Privacidade</div>
                <div className="info">Política de Privacidade</div>
                <div className="info">Política de Privacidade</div></div>

                <div className="informacoes-contato"><div className="contato"><div className="icon"><img src="/assets/images/linkedin.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/face.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/twitter.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/insta.png" alt="" /></div>
                <div className="icon"><img src="/assets/images/zap.svg" alt="" /></div></div>
                <div> <img src="/assets/images/logo.svg" alt="" style={{width: "4em" }}/> <span> Copyright © 2021-2021 Enlox Company S.L. All rights reserved </span></div></div>
            </Rodape>
        </footer>
    )
}