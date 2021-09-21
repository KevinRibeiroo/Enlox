import Container from './styled'

export default function Carrinho() {
    return(
        <Container>
            <div className='gab-meucarrinho'> <h1>Meu Carrinho</h1></div> 
            <div className='gab-btn-comprartodos'><button><span>Comprar todos</span></button></div>
            <div className='gab-retfundo'></div>
            <div className='gab-produto'>
                <div className='gab-imagemprod'><img src='https://brastemp.vtexassets.com/arquivos/ids/220102/Brastemp_Geladeira_BRM44HK_Imagem_3_4_1600x1400.jpg?v=637558497890130000' alt="" /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'>Geladeira frigobar</span></li>
                        <li><span className='gab-tit2'>Status:</span> Disponível</li>
                        <li><img src='' alt='' /></li>
                        <li><span className='gab-tit2'>Vendido por:</span> Roberto Brunex</li>
                        <li><span className='gab-tit'>Preço: R$10.000</span></li>
                        <li><span className='gab-tit3'>Geledeira frigobar 2020, usada e em otimo estado</span></li>
                    </ul>
                </div>
                <div className='gab-btnprod'>
                <div className='gab-btn-remover'><img src='' alt='' /> Remover produto </div>
                <div className='gab-btn-comprar'><button>Comprar agora</button> </div>
                </div>            
            </div>

            <div className='gab-produto'>
                <div className='gab-imagemprod'><img src='https://brastemp.vtexassets.com/arquivos/ids/220102/Brastemp_Geladeira_BRM44HK_Imagem_3_4_1600x1400.jpg?v=637558497890130000' alt="" /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'></span></li>
                        <li><span className='gab-tit2'>Status:</span> Disponível</li>
                        <li><img src='' alt='' /></li>
                        <li><span className='gab-tit2'>Vendido por:</span> Roberto Brunex</li>
                        <li><span className='gab-tit'>Preço: R$10.000</span></li>
                        <li><span className='gab-tit3'>Geledeira frigobar 2020, usada e em otimo estado</span></li>
                    </ul>
                </div>
                <div className='gab-btn-remover'><img src='' alt='' /> Remover produto </div>
                <div className='gab-btn-comprar'><button>Comprar agora</button> </div>
            </div>

            <div className='gab-produto'>
                <div className='gab-imagemprod'><img src='https://brastemp.vtexassets.com/arquivos/ids/220102/Brastemp_Geladeira_BRM44HK_Imagem_3_4_1600x1400.jpg?v=637558497890130000' alt="" /> </div>
                <div className='gab-descprod'>
                    <ul>
                        <li><span className='gab-tit'></span></li>
                        <li><span className='gab-tit2'>Status:</span> Disponível</li>
                        <li><img src='' alt='' /></li>
                        <li><span className='gab-tit2'>Vendido por:</span> Roberto Brunex</li>
                        <li><span className='gab-tit'>Preço: R$10.000</span></li>
                        <li><span className='gab-tit3'>Geledeira frigobar 2020, usada e em otimo estado</span></li>
                    </ul>
                </div>
                <div className='gab-btn-remover'><img src='' alt='' /> Remover produto </div>
                <div className='gab-btn-comprar'><button>Comprar agora</button> </div>
            </div>

        </Container>
    )
}