import { RContainer } from './styled.js';
import Rodape from "../../components/rodape";

import {Link,useHistory} from 'react-router-dom';
import { useState } from 'react';
import Api from '../../service/api.js';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new Api();

export default function Resetar(props) {
    const [codigo,setCodigo]=useState('');
    const [validado,setValidado]=useState(false);
    const [novaSenha, setNovaSenha] = useState('');


    const nav = useHistory();
    
    async function validarCodigo() {
        const r = await api.inserirCodigo(props.location.state.email,codigo);
        if(r.error){
            setValidado(false);
            toast.error(`${r.error}`);
            
        }else{ 
            console.log(props.location.state.email)        
            setValidado(true);
            toast.dark("Código validado com sucesso.")
        }
    }


    async function alterarSenha() {
        const r = await api.mudarSenha(codigo,props.location.state.email,novaSenha);

        if (r.error) {
            toast.error(`${r.error}`); 
          } else {
            alert("Senha alterada com sucesso.");
            nav.push('/login');
          }

    }
    const entrar = (event) => {
        if (event.key === 'Enter') {
            validarCodigo()
        }
    }

    const entrarFinal = (event) => {
        if (event.key === 'Enter') {
            alterarSenha()
        }
    }

    
    
    return(
        <RContainer>
           <ToastContainer/>
            <div className="RBox">
                <Link className="RDefinir" to = "/"><div className="imagem"> <img src="/assets/images/logo.svg" alt=""/></div></Link>
                <div className = "RTitulo">Recuperação de Senha</div>
                <div className = "RDigite">Digite o código:<input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} onKeyPress={entrar}/></div>
                <div className="REnvie" onClick= {validarCodigo}>Enviar</div>
                <div className="RTexto">** Digite o código de acesso no campo acima enviado ao seu email.</div>
            </div>

            <br/>


            {validado && 

                <div className="RBox">
                    <Link className="RDefinir" to = "/"><div className="imagem"> <img src="/assets/images/logo.svg" alt=""/></div></Link>
                    <div className = "RTitulo">Altere sua senha</div>
                    <div className = "RDigite">Nova senha:<input type="text" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} onKeyPress={entrarFinal}/></div>
                    <div className="REnvie" onClick= {alterarSenha}>Alterar</div>
                </div>

            }

            <Rodape/>
        </RContainer>
    )
        }