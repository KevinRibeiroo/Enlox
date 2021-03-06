import { StyledLogin  } from "./styled"
import { InputLogin } from "../../components/inputs/styled"
import Rodape from "../../components/rodape"
import { BotaoLogin, BotaoGoogle } from "../../components/botoes/styled"
import { Link } from "react-router-dom"
import Api from "../../service/api"
import { useState } from "react"
import Cookies from 'js-cookie'
import { useHistory } from "react-router"
//import { usuLogado } from "../../components/cabecalho"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const api = new Api();

export default function Login () {

        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');



        const nav = useHistory();


        const logar = async () => {
            const r = await api.logarr(email, senha);
            console.log(email)
            console.log(r)
            console.log(senha)
            
            if(r.error) {
                toast.error(`${r.error}`)
            } else {
                Cookies.set('usuario-logado' ,JSON.stringify(r));
                nav.push('/')
            }}


const entrar = (event) => {
            if (event.key === 'Enter') {
                logar();
            }
        }
    
    return (
       <StyledLogin>
           <ToastContainer />
           <main>
               <div className="container-login">
                   <div className="login">
                   <div className="logo"><img src="/assets/images/logo.svg"  alt="" /></div>
                   <div className="title-login"> Acesse sua Conta </div> 

                   <div className="agp-inputs-login">
                       <div className="agp-inputs">
                           <div className="label-login">Login</div>
                                <InputLogin placeholder="Escreva seu nome de usuario ou email"  type="email" value={email} onChange={e => setEmail(e.target.value)} />
                           </div>
                      
                       <div className="agp-inputs">
                           <div className="label-login">Senha</div>
                                <InputLogin placeholder="Escreva sua senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} onKeyPress={entrar} />
                           
                       </div>
                   </div>
                   

                   <div className="botao-login" id='btn-logar'    ><BotaoLogin onClick={() => logar()} > Entrar </BotaoLogin> </div>

                   <div className="text-login">N??o tenho conta.Quero me <span><Link to = "/cadastroDeUsuario1" className="cdstr"> Cadastrar </Link> </span></div>
                   <Link className="e" to= "/recuperacaoSenha"> <div className="logar-fora esqueci">Esqueci a senha</div></Link>
                   <div className="logar-fora"><BotaoGoogle>Entrar com gmail </BotaoGoogle></div>
                </div>
            </div>
             <Rodape />
           </main>
       </StyledLogin>
    )
}