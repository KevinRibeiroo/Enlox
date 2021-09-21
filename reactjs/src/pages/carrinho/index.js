import Container from './styled'

export default function Carrinho() {
    return(
        <Container>
            <div className='gab-meucarrinho'> <h1>Meu Carrinho</h1></div> 
            <div className='gab-btn-comprartodos'><button>Comprar todos</button></div>
            <div className='gab-retfundo'></div>
            <div className='gab-produto'>
                <div className='gab-imagemprod'><img src='https://brastemp.vtexassets.com/arquivos/ids/220102/Brastemp_Geladeira_BRM44HK_Imagem_3_4_1600x1400.jpg?v=637558497890130000' /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'></span></li>
                        <li><span classname='gab-tit2'>Status:</span> Disponível</li>
                    </ul>
                </div>
                <div className='gab-btn-remover'> </div>
                <div className='gab-btn-comprar'> </div>
            </div>

        </Container>
    )
}