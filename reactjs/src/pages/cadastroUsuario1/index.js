import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import {UContainer} from './styled'
import Api from '../../service/api';
import { useState } from 'react';


const api = new Api();

export default function CadastroDeUsuario1(){

    const[nome,setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [nasc,setNasc] = useState('');
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState('');
    const [rua, setRua]= useState('');
    const[num, setNum]= useState(0);
    const[bairro, setBairro]= useState('');
    const[cidade,setCidade]= useState('');
    const[cep,setCep]= useState(0);
   
    const inserirUsuario = async () => {
            let r = await api.cadastrarUsuario(usuario,nome,cpf,celular,email,senha,nasc,cep,num,bairro,cidade)
            console.log(r)

             Clean();
    }

    function Clean(){
        setNome('');
        setCpf('');
        setEmail('');
        setCelular('');
        setNasc();
        setUsuario('');
        setSenha('');
        setRua('');
        setNum();
        setBairro('');
        setCidade('');
        setCep();
    }

    return(
        <UContainer>
            <Cabecalho />
            <div className = "UAzul"></div>
            <div className = "UBranco"></div>
            <div className= "UConteudo">
                <img className="UAnimacao1" src='/assets/images/LinhaAnimada.svg' alt=''/>
                <div className = "UTitulo">Cadastre-se</div>
                <img className="UAnimacao2" src='/assets/images/LinhaAnimada.svg' alt=''/>
                <div className = "UDados">Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                </div>

                <div className = "UDados">CPF:
                    <input type="text"  value={cpf} onChange={e => setCpf(e.target.value)}/>
                </div>

                <div className = "UDados">Email:
                    <input type="text"  value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className = "UDados">Celular:
                    <input type="text"  value={celular} onChange={e => setCelular(e.target.value)}/>
                </div>

                <div className = "UDados">Nascimento:
                    <input type="text"  value={nasc} onChange={e => setNasc(e.target.value)}/>
                </div>

                <div className = "UDados">Usuário:
                    <input type="text"  value={usuario} onChange={e => setUsuario(e.target.value)}/>
                </div>

                <div className = "UDados">Senha:
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>
                <div className = "UDados">Rua:
                        <input type="text" value={rua} onChange={e => setRua(e.target.value)}/>
                    </div>

                    <div className = "UDados">Número:
                        <input type="text" value={num} onChange={e => setNum(e.target.value)}/>
                    </div>
                
                <div className = "UDados">Bairro:
                    <input type="text" value={bairro} onChange={e => setBairro(e.target.value)}/>
                </div>

                <div className = "UDados">Cidade:
                    <input type="text"  value={cidade} onChange={e => setCidade(e.target.value)}/>
                </div>

                <div className = "UDados">Cep:
                    <input type="text" value={cep} onChange={e => setCep(e.target.value)}/>
                </div>

               
                <button onClick={inserirUsuario}>Cadastrar</button>
               
            </div>
            <Rodape/>
        </UContainer>
    )
}