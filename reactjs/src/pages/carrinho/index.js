import Container from './styled'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape/index.js'
import CarrinhoItem from '../carrinho/carrinhoItem/index.js'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'

export default function Carrinho() {

    useEffect(carregarCarrinho, [])

    const [produtos, setProdutos] = useState([])

    
    function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho')
        carrinho = carrinho !== undefined
        ? JSON.parse(carrinho)
        : [] 
        setProdutos(carrinho)
    }

    function removerProduto(id) {
        let carrinho = produtos.filter(item => item.id_produto !== id)
        Cookie.set('carrinho', JSON.stringify(carrinho))
        
        setProdutos([...carrinho])
    }


    return(
       <Container>
           <Cabecalho> </Cabecalho>
            <div className='gab-meucarrinho'> <h1>Meu Carrinho</h1></div> 
            <div className='gab-btn-comprartodos'><button><span>Comprar todos</span></button></div>
            <div className='gab-retfundo'>

            {produtos.map(item =>    
            <CarrinhoItem key={item.id}
            info={item}
            remover={removerProduto}  />
            )}
                 </div>
             <Rodape></Rodape>
            </Container>          
    
    )
}