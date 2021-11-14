import { useEffect, useState } from 'react'
import Container from './styled'
import Api from '../../../service/api'
import { Link, useHistory } from 'react-router-dom'

const api = new Api()

export default function CarrinhoItem(props) {

    const nav = useHistory();

    const [produto] = useState(props.info)
    const [usuario, setUsuario] = useState([])

    function remove() {
            props.remover(produto.id_produto)
    }

    useEffect(() => {
        mostrarUsu(produto.id_usuario)
    })
    const mostrarUsu = async(id) =>  {
    const g = await api.listarUsu(id)
    
    setUsuario(g )
    }

    return (
        <Container>
        <div className='gab-produto'>
                <div className='gab-imagemprod'><img src={produto.ds_imagem1} alt='' /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit' >{produto.nm_produto}</span></li>
                        <li><span className='gab-tit2'>Status: </span>{produto.bt_ativo} </li>
                        <li><span className='gab-tit2'>Vendido por: </span>{usuario.nm_usuario} </li>
                        <li><span className='gab-tit'>Preço: {produto.vl_preco}</span></li>
                        <li><span className='gab-tit3'>{produto.ds_produto} </span></li>
                    </ul>
                </div>
                <div className='gab-btnprod'>
                <div className='gab-btn-remover' onClick={remove}><img src='/assets/images/lixo.svg' alt='' /> Remover produto </div>
                <Link  to={{pathname:"/compra", state: produto}}><div className='gab-btn-comprar'>  <button>Comprar agora</button></div> </Link>
                </div>            
            </div> 
            </Container>
    )
}

