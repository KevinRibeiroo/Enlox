import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import {UContainer} from './styled'
import Api from '../../service/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const api = new Api();

export default function CadastroDeUsuario1(){

    const [nm_usuario, setNm_usuario] = useState('');
    const [ds_cpf, setDs_cpf] = useState('');
    const [ds_email, setDs_email] = useState('');
    const [ds_senha, setDs_senha] = useState('');
   
    const test = async () => {
             await api.cadastrarUsuario(nm_usuario, ds_cpf, ds_email, ds_senha)
    }




    return(
        <UContainer>
            <Cabecalho/>
            <div className = "UAzul"></div>
            <div className = "UBranco"></div>
            <div className= "UConteudo">
                <img className="UAnimacao1" src='/assets/images/LinhaAnimada.svg' alt=''/>
                <div className = "UTitulo">Cadastre-se</div>
                <img className="UAnimacao2" src='/assets/images/LinhaAnimada.svg' alt=''/>
                <div className = "UDados">Nome:
                    <input type="text"/>
                </div>

                <div className = "UDados">CPF:
                    <input type="text"  value={ds_cpf} onChange={e => setDs_cpf(e.target.value)}/>
                </div>

                <div className = "UDados">Email:
                    <input type="text"  value={ds_email} onChange={e => setDs_email(e.target.value)}/>
                </div>

                <div className = "UDados">Usuário:
                    <input type="text"  value={nm_usuario} onChange={e => setNm_usuario(e.target.value)}/>
                </div>

                <div className = "UDados">Senha:
                    <input type="text" value={ds_senha} onChange={e => setDs_senha(e.target.value)}/>
                </div>
                <Link to="/cadastroDeUsuario2">
                <button>Próximo</button>
                </Link>
            </div>
            <Rodape/>
        </UContainer>
    )
}