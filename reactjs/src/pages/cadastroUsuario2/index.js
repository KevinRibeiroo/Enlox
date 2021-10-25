import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import {UContainer} from './styled'
import { useState } from 'react';
import Api from '../../service/api';
 const api = new Api();



export default function CadastroDeUsuario2(){



    const [ds_cep, setDs_cep] = useState('');
    const [nr_casa, setNr_casa] = useState(''); 
    const [ds_complemento, setDs_complemento] = useState(''); 
    



    const cadastrarUsu = async () => {
        const r = await api.cadastrarUsuario(ds_cep, nr_casa, ds_complemento);

        console.log(r)
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
                <div className='roww'>
                    <div className = "UDados">Rua:
                        <input type="text" value={ds_complemento} onChange={e => setDs_complemento(e.target.value)}/>
                    </div>

                    <div className = "UDados">Número:
                        <input type="text" value={nr_casa} onChange={e => setNr_casa(e.target.value)}/>
                    </div>
                </div>
                <div className = "UDados">Bairro:
                    <input type="text" value={ds_cep} onChange={e => setDs_cep(e.target.value)}/>
                </div>

                <div className = "UDados">Cidade:
                    <input type="text"  value={ds_cep} onChange={e => setDs_cep(e.target.value)}/>
                </div>

                <div className = "UDados">Cep:
                    <input type="text" value={ds_cep} onChange={e => setDs_cep(e.target.value)}/>
                </div>

                <button onClick={cadastrarUsu}>Próximo</button>
            </div>
            <Rodape/>
        </UContainer>
    )
}