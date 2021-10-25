import Container from './styled'


export default function CarrinhoItem() {
    return (
        <Container>
        <div className='gab-produto'>
                <div className='gab-imagemprod'><img src='/assets/images/geladeira.svg' alt="" /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'>Geladeira frigobar</span></li>
                        <li><span className='gab-tit2'>Status:</span> Disponível</li>
                        <li><span classname='gab-imgli'><img src='/assets/images/foto.png' alt='' /></span></li>
                        <li><span className='gab-tit2'>Vendido por:</span> Roberto Brunex</li>
                        <li><span className='gab-tit'>Preço: R$10.000</span></li>
                        <li><span className='gab-tit3'>Geledeira frigobar 2020, usada e em otimo estado</span></li>
                    </ul>
                </div>
                <div className='gab-btnprod'>
                <div className='gab-btn-remover'><img src='/assets/images/lixo.svg' alt='' /> Remover produto </div>
                <div className='gab-btn-comprar'><button>Comprar agora</button> </div>
                </div>            
            </div>
            </Container>
    )
}

