import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import {UContainer} from './styled'
export default function CadastroDeUsuario2(){
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
                        <input type="text"/>
                    </div>

                    <div className = "UDados">Número:
                        <input type="text"/>
                    </div>
                </div>
                <div className = "UDados">Bairro:
                    <input type="text"/>
                </div>

                <div className = "UDados">Cidade:
                    <input type="text"/>
                </div>

                <div className = "UDados">Cep:
                    <input type="text"/>
                </div>

                <button>Próximo</button>
            </div>
            <Rodape/>
        </UContainer>
    )
}