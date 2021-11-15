import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import{CContainer,CCorpo} from './styled'

import Api from '../../service/api';
import { useState } from 'react';


import mask from 'react-input-mask';

import axios from 'axios';
const api = new Api();


export default function CadastroUsuario() {
    
    const[nome,setNome] = useState('');
    const [cpf, setCpf] = useState(null);
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState(null);
    const [nasc,setNasc] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [rua, setRua]= useState('');
    const[num, setNum]= useState(null);
    const[cidade,setCidade]= useState('');
    const[cep,setCep]= useState(null);
    //const[img,setImg]= useState('');
   

    const[cepp,setCepp]=useState('');
    const[local,setLocal]=useState({});

    const inserirUsuario = async () => {
            let r = await api.cadastrarUsuario(usuario,nome,cpf,celular,email,senha,nasc,cep,num,cidade,rua)
            
            console.log(r)

             Clean();
    }

    function Clean(){
        setNome('');
        setCpf(0);
        setEmail('');
        setCelular(null);
        setNasc('');
        setUsuario('');
        setSenha('');
        setRua('');
        setNum(null);
        setCidade('');
        setCep(null);
        //setImg('');
    }


    async function pesquisarCep(){
        const r = await axios.get(`https://viacep.com.br/ws/${cepp}/json/`);
        setLocal(r.data);
    }



    return(
        <CContainer>
            <Cabecalho/>
                <div className="CCorpo">
                    <div className = "CBox">
                        <div className="CTitulo">Cadastre-se</div>
                        <div className="CInputs">

                            <div className="CRow">
                                <div className="CColumn">
                                    <div className="a" >Nome:<input type="text"  value={nome} onChange={e => setNome(e.target.value)}/></div>
                                    <div className="a" >CPF:<input type="text" id="idcpf" autocomplete="off" maxLength="14" value={cpf} onChange={e => setCpf(e.target.value)}/></div>
                                </div>

                                <div className="CColumn">
                                    <div>Celular:<input type="tel"value={celular} onChange={e => setCelular(e.target.value)}/></div>
                                    <div>Nascimento:<input type="date" value={nasc} onChange={e => setNasc(e.target.value)}/></div>
                                </div>
                                
                            </div>


                            <div className="CRow">
                                <div className="CColumn">
                                    <div>Cep:<input type="text" value={cep} onChange={e => setCep(e.target.value)}/></div>
                                    <div>Rua:<input type="tel" value={rua} onChange={e => setRua(e.target.value)}/></div>
                                </div>

                                <div className="CColumn">
                                    <div>Cidade:<input type="text" value={cidade} onChange={e => setCidade(e.target.value)}/></div>
                                    <div>Número:<input type="number" value={num} onChange={e => setNum(e.target.value)}/></div>
                                </div>
                                
                            </div>



                            <div className="CRow">
                                <div className="CColumn">
                                    <div>Email:<input type="email" value={email} onChange={e => setEmail(e.target.value)}/></div>
                                    <div>Usuário:<input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/></div>
                                </div>

                                <div className="CColumn">
                                    <div>Senha:<input type="password" value={senha} onChange={e => setSenha(e.target.value)}/></div>
                                    <div>Foto de Perfil:<input type="file" /></div>
                                </div>
                                
                            </div>

                            <div className="CBotao"><button onClick={inserirUsuario}>Cadastrar</button></div>
                        </div>
                    </div>
                </div>

            <Rodape/>
        </CContainer>
    )
}