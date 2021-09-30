import { StyledLogin  } from "./styled"
import { InputLogin } from "../../components/inputs/styled"
import Rodape from "../../components/rodape"
import { BotaoLogin, BotaoGoogle } from "../../components/botoes/styled"
import { Link } from "react-router-dom"




export default function Login () {
    return (
       <StyledLogin>
           <main>
               <div className="container-login">
                   <div className="login">
                   <div className="logo"><img src="/assets/images/logo.svg"  alt="" /></div>
                   <div className="title-login"> Acesse sua Conta </div> 

                   <div className="agp-inputs-login">
                       <div className="agp-inputs">
                           <div className="label-login">Login</div>
                                <InputLogin placeholder="Escreva seu nome de usuario ou email" />
                           </div>
                      
                       <div className="agp-inputs">
                           <div className="label-login">Senha</div>
                                <InputLogin placeholder="Escreva sua senha" />
                           
                       </div>
                   </div>
                   <div className="botao-login"><BotaoLogin> Entrar </BotaoLogin> </div>

                   <div className="text-login">Não tenho conta.Quero me <span><Link to = "/cadastrarUsuario" className="cdstr"> Cadastrar </Link> </span></div>

                   <div className="logar-fora"><BotaoGoogle>Entrar com gmail </BotaoGoogle></div>
                </div>
            </div>
             <Rodape />
           </main>
       </StyledLogin>
    )
}