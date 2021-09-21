import { Rodape } from "./styled"


export default function rodape(){
    return (
        <footer style={{backgroundColor: "#E7E6E1"}}>
            <Rodape>
                <div className="sobre-empresa"><div className="info">Politica de privacidade</div>
                <div className="info">Politica de privacidade</div>
                <div className="info">Politica de privacidade</div>
                <div className="info">Politica de privacidade</div></div>

                <div className="informações-contato"><div className="linkedin"><img src="/assets/images/linkedin.png" alt="" /></div>
                <div className="linkedin"><img src="/assets/images/linkedin.png" alt="" /></div>
                <div className="linkedin"><img src="/assets/images/linkedin.png" alt="" /></div>
                <div className="linkedin"><img src="/assets/images/linkedin.png" alt="" /></div></div>
            </Rodape>
        </footer>
    )
}