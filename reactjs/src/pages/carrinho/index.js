import Container from './styled'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape/index.js'
import CarrinhoItem from '../carrinho/carrinhoItem/index.js'


export default function Carrinho() {
    return(
       <Container>
           <Cabecalho> </Cabecalho>
            <div className='gab-meucarrinho'> <h1>Meu Carrinho</h1></div> 
            <div className='gab-btn-comprartodos'><button><span>Comprar todos</span></button></div>
            <div className='gab-retfundo'>
            <CarrinhoItem />
            <CarrinhoItem />
            <CarrinhoItem />
            <CarrinhoItem />
            <CarrinhoItem />
                 </div>
             <Rodape></Rodape>
            </Container>          
    
    )
}