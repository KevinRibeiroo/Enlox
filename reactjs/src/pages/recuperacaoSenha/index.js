import { RContainer } from './styled.js';
import Rodape from "../../components/rodape";

import {Link,useHistory} from 'react-router-dom';
import { useState } from 'react';
import Api from '../../service/api.js';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new Api();

export default function RecuperacaoSenha() {
    const [email,setEmail]=useState('');
    
    const nav = useHistory();

    async function recuperar() {
        const r = await api.recuperarSenha(email)
        if(r.data.status==="ok"){
            nav.push('/resetar')
           console.log("foi")
        }else{toast.error(`${r.error}`)}
    }

    
    return(
        <RContainer>
           <ToastContainer/>
            <div className="RBox">
                <Link className="RDefinir" to = "/"><div className="imagem"> <img src="/assets/images/logo.svg" alt=""/></div></Link>
                <div className = "RTitulo">Recuperação de Senha</div>
                <div className = "RDigite">Digite seu email:<input type="text" value={email} onChange={e => setEmail(e.target.value)}/></div>
                <div className="REnvie" onClick= {recuperar}>Enviar</div>
                <div className="RTexto">** Dentro de alguns instantes, a Enlox enviará um código de acesso.</div>
            </div>

            <Rodape/>
        </RContainer>
    )
  
    
}