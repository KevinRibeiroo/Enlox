import { useState } from 'react'
import Container from './styled'


export default function CarrinhoItem(props) {


    const [produto, setProduto] = useState(props.info)

    function remove() {
            props.remover(produto.id)
    }

    return (
        <Container>
        <div className='gab-produto'>
                <div className='gab-imagemprod'><img src='/assets/images/geladeira.svg' alt="" /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'>{produto.titulo}</span></li>
                        <li><span className='gab-tit2'>Status:</span>{produto.estado} </li>
                        <li><span classname='gab-imgli'>{produto.imagem} </span></li>
                        <li><span className='gab-tit2'>Vendido por:</span>{produto.vendedor} </li>
                        <li><span className='gab-tit'>Preço: {produto.preco}</span></li>
                        <li><span className='gab-tit3'>{produto.desc} </span></li>
                    </ul>
                </div>
                <div className='gab-btnprod'>
                <div className='gab-btn-remover' onClick={remove}><img src='/assets/images/lixo.svg' alt='' /> Remover produto </div>
                <div className='gab-btn-comprar'><button>Comprar agora</button> </div>
                </div>            
            </div>
            </Container>
    )
}

