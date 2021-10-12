import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import {UContainer} from '../cadastroUsuario1/styled.js'
export default function CadastroDeUsuario3(){
    return(
        <UContainer>
            <Cabecalho/>
            <div className = "UAzul"></div>
            <div className = "UBranco"></div>
            <div className= "UConteudo">
                <img className="UAnimacao1" src='/assets/images/LinhaAnimada.svg' alt=''/>
                <div className = "UTitulo">Cadastre-se</div>
                <img className="UAnimacao2" src='/assets/images/LinhaAnimada.svg' alt=''/>
                <div className = "UDados">Número:
                    <input type="text"/>
                </div>

                <div className = "UDados">Cvc:
                    <input type="text"/>
                </div>

                <div className = "UDados">Banco:
                    <input type="text"/>
                </div>

                <div className = "UDados">Bandeira:
                    <input type="text"/>
                </div>

                <button>Cadastrar</button>
            </div>
            <Rodape/>
        </UContainer>
    )
}