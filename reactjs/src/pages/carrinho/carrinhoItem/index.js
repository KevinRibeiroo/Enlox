import { useState } from 'react'
import Container from './styled'

export default function CarrinhoItem(props) {


    const [produto] = useState(props.info)

    function remove() {
            props.remover(produto.id_produto)
    }

    return (
        <Container>
        <div className='gab-produto'>
                <div className='gab-imagemprod'><img src={produto.ds_imagem1} alt='' /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'>{produto.nm_produto}</span></li>
                        <li><span className='gab-tit2'>Status:</span>{produto.bt_ativo} </li>
                        <li><span classname='gab-imgli'> </span></li>
                        <li><span className='gab-tit2'>Vendido por:</span>{produto.id_usuario} </li>
                        <li><span className='gab-tit'>Preço: {produto.vl_preco}</span></li>
                        <li><span className='gab-tit3'>{produto.ds_produto} </span></li>
                    </ul>
                </div>
                <div className='gab-btnprod'>
                <div className='gab-btn-remover' onClick={remove}><img src='/assets/images/lixo.svg' alt='' /> Remover produto </div>
                <div className='gab-btn-comprar'><button>Comprar agora</button></div>
                </div>            
            </div> 
            </Container>
    )
}

