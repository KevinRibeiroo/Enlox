import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import {UContainer} from './styled'
export default function CadastroDeUsuario1(){
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
                    <input type="text"/>
                </div>

                <div className = "UDados">Email:
                    <input type="text"/>
                </div>

                <div className = "UDados">Usuário:
                    <input type="text"/>
                </div>

                <div className = "UDados">Senha:
                    <input type="text"/>
                </div>

                <button>Próximo</button>
            </div>
            <Rodape/>
        </UContainer>
    )
}