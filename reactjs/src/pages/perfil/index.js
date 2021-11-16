import Container from './styled.js'
import Cookies, { set } from 'js-cookie'
import { useHistory } from 'react-router'
import Api from '../../service/api'
import { useEffect, useState } from 'react';

const api = new Api();

function usuLogado(){
    if (Cookies.get('usuario-logado') !== undefined){
let logado = Cookies.get('usuario-logado');
let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}}





export default function Perfil() {

    let ususLogado = usuLogado() || {}
   

    const [usuario, setUsuario]= useState([])
    const [idUsu] = useState(ususLogado.id_usuario)
    const [foto, setFoto] = useState('')
    const [fotinha, setFotinha] = useState(ususLogado.img_foto)
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [nick, setNick] = useState('')
    const [endereco, setEndereco] = useState('')
    console.log(idUsu)
    console.log(email)

    async function listUsu(id) {
        let r = await api.listarUsu(idUsu)
    }

    function preview(img) {
        if(foto) {
             return URL.createObjectURL(foto);    
        } else {
            return pegarImg()
        }
    }

    

    function selectFile() {
        let input = document.getElementsById("file-input");
        input.click();
    }

    console.log(preview())


    const getUsu = async() =>   {
        let g= await api.listarUsu(idUsu)
        setUsuario(g)
    } 

    useEffect(() => {getUsu()}, []);

    const home = async() => {
       nav.push('/')
    }


    const nav = useHistory();


    const logoof = async () => {
        Cookies.remove('usuario-logado')
        nav.push('/login')
    }

    async function editEmail() {
        let resp = await api.alterarEmail(usuario.id_usuario, email)
        console.log(resp)
    }

    async function editNumero() {
        let resp = await api.alterarNumero(usuario.id_usuario, num)
        console.log(resp)
    }

    async function editNome() {
        let resp = await api.alterarNick(usuario.id_usuario, nick)
        console.log(resp)
    }

    async function editEnd() {
        let resp = await api.alterarEndereco(usuario.id_usuario, endereco)
        console.log(resp)
    }

    async function editPic() {
        let gab = await api.editarFoto(usuario.id_usuario, foto)
        console.log(gab)

        let login = await api.logarr(ususLogado.ds_email, ususLogado.ds_senha);
        Cookies.set('usuario-logado', JSON.stringify(login));
    }
 
    async function listarImg() {
        let gab = await api.listarFoto()
        setFoto()
        return gab 
    }

    function pegarImg() {

        if (foto.includes('http'))
        return foto
        else 
        return `https://enloxx.herokuapp/usuariozin?imagem=${usuario.img_foto}`
    }

    console.log(foto)
    

    if (Cookies.get('usuario-logado') === undefined) {
      nav.push('/');
    }

    return (
        <Container>
    <div className='gab-pai'>
        <div className='gab-cabec'>
            <div className='gab-logo' onClick={home}> <img src='/assets/images/logo.svg' alt='' /></div>
            <div className='gab-btn-sair' onClick={logoof}> <img src='/assets/images/sair.svg' alt='' /></div>
        </div>
        <div className='gab-conteudo'>
            <div className='gab-form1'>
                <div className='gab-email'>EMAIL: {usuario.ds_email} <input type="text"  onChange={e => setEmail(e.target.value)} placeholder="Alterar Email"></input> <img src='/assets/images/iconalterar.png' alt='' onClick={() => editEmail()} /> </div>
                <div className='gab-numero'>NÚMERO: {usuario.nr_celular} <span className='gab-img1'><img src='/assets/images/verificado.svg' alt=''  /></span> <span className='gab-verif'>VERIFICADO</span> <input type="text"  onChange={e => setNum(e.target.value)} placeholder="Alterar Número"></input> <img src='/assets/images/iconalterar.png' alt='' onClick={() => editNumero()} /> </div>
                <div className='gab-conect'><span className='gab-img2'><img src={preview()} alt='' /></span>{usuario.nm_usuario} <input type="text"  onChange={e => setNick(e.target.value)} placeholder="Alterar Nome de usuário"></input> <img src='/assets/images/iconalterar.png' alt='' onClick={() => editNome()} /> </div>
                <div className='gab-email'>ENDEREÇO: {usuario.nm_rua} <input type='text' onChange={e => setEndereco(e.target.value)} placeholder="Alterar Endereço"></input> <img src='/assets/images/iconalterar.png' alt='' onClick={() => editEnd()} /> </div>
            </div>
            <div gab-form2>
                <div className='gab-foto'>
                    <label for='file-input' >
                    <img src={preview()} alt='' />
                    <img src='/assets/images/editar.png' alt='' className='imgbraba'  />
                    </label>
                   
                    <input id='file-input' type='file' accept='image/*'  onChange={e => setFoto(e.target.files[0])} />
                </div>
                <div>
                    <button onClick={() => editPic()} > SALVAR FOTO DE PERFIL</button>
                </div>
                <div className='gab-info'>
                    <div className='gab-nome'  ><span>NICK DE USUÁRIO:</span> {usuario.nm_usuario}  </div>
                    <div className='gab-sobrenome'><span>NOME:</span> {usuario.nm_nome}  </div>
                    <div className='gab-cpf'><span>CPF:</span>  {usuario.ds_cpf} </div>
                </div>
                
            </div>
            <div>
                <div className='gab-endereco'>
                    <table>
                    <tr>
                        <th>MEUS CARTÕES</th>
                    </tr>
                    <tr>
                       <td className='gab-celula'> | {usuario.nm_rua + ", Nº" + usuario.nr_casa}</td>
                    </tr>
                   
                    </table>
                </div>
                <div className='gab-enderecoa'>
                    <div className='gab-end1'>ADICIONAR CARTÃO</div>
                    <div className='gab-endsvg'><img src='/assets/images/mais.svg' alt='' /> </div> 
                </div>
            </div>
        </div>
    </div>
    </Container>   
    )
    }

    