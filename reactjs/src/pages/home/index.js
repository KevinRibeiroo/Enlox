import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Cookies from "js-cookie";
import {HContainer} from './styled.js';
import {useHistory} from 'react-router-dom';
import Api from "../../service/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




const api = new Api();





export default function Home(){

 

   
    const [produtos, setProdutos] = useState([]);

    const [nmProduto, setNmPrroduto] = useState('');
    const [imgProduto, setImgProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [avaliacao, setAvalicao] = useState('');
    const [descricao, setDescricao] = useState('');

    const mostrarProduto = async () => {
        const r = await api.listarProduto();
        setProdutos(r);
    } 

    useEffect(() => {
        mostrarProduto();
    }, [])
  
    
   
    return(
        <HContainer>
            <Cabecalho/>
            <div className = "HSubCabecalho">
                <div className = "HCategorias">

                    <div className = "HEletronicos">
                        <div className = "HElipse">
                            <img src="/assets/images/Eletronicos.png" alt="" />
                        </div>
                        <div>ELETRÔNICOS</div>
                    </div>

                    <div className = "HMobilia">
                        <div className = "HElipse">
                            <img src="/assets/images/Mobília.png" alt="" />
                        </div>
                        <div>MOBÍLIA</div>
                    </div>

                    <div className = "HBeleza">
                        <div className = "HElipse">
                            <img src="/assets/images/Beleza.png" alt="" />
                        </div>
                        <div>BELEZA</div>
                    </div>

                    <div className = "HEsportes">
                        <div className = "HElipse">
                            <img src="/assets/images/Esportes.png" alt="" />
                        </div>
                        <div>ESPORTES</div>
                    </div>

                    <div className = "HConstrucao">
                        <div className = "HElipse">
                            <img src="/assets/images/Construção.png" alt="" />
                        </div>
                        <div>CONSTRUÇÃO</div>
                    </div>

                    <div className = "HBrinquedos">
                        <div className = "HElipse Brinquedo">
                            <img src="/assets/images/Brinquedos.png" alt="" />
                        </div>
                        <div>BRINQUEDOS</div>
                    </div>

                    <div className = "HAutopecas">
                        <div className = "HElipse">
                            <img src="/assets/images/Auto-peças.png" alt="" />
                        </div>
                        <div>AUTO-PEÇAS</div>
                    </div>

                    <div className = "HOutros">
                        <div className = "HElipse">
                            <img src="/assets/images/Outros.png" alt="" />
                        </div>
                        <div>OUTROS</div>
                    </div>
                    
                </div>
                <div className = "HPesquisar">
                    <div className = "HProcurando">
                        <input type = "text" placeholder =  "Digite o que está procurando..."/>
                    </div>
                    <div className = "HSimbolo">
                        <div className = "HLupa"><img src="/assets/images/Pesquisarp.svg" alt="" /></div>
                    </div>
                </div>
            </div>

            <div className = "HCorpo">
                <img  className="HBola" src="/assets/images/Ball.png" alt = ""/>

                <div className = "HFaixa">
                    <div className = "HEspecificacao">Ofertas do Dia</div>
                    <div>
                        <div className = "HCarrossel">
                            <div className = "HSetas"> 
                                <img className = "HRotacionada" src = "/assets/images/Seta.png" alt=""/> 
                                <img src = "/assets/images/Seta.png" alt=""/> 
                            </div>
                            <div className = "HCentro">

                                <div className ="HAnuncio">
                                    <div className = "Hproduto"> <img src = "/assets/images/Camiseta.png" alt = ""/> </div>
                                        <div className = "Hdescricao">
                                            <div className = "Htitulo">Camiseta Levis</div>
                                            <div className = "Htempo">4 meses de uso</div>
                                            <div className = "Hpreco">
                                                <div className = "Hpde">De: R$ 110,00</div>
                                                <div className = "Hppor">Por: R$ 52,99</div>
                                            </div>
                                        </div>
                                </div>

                                <div className = "HAnuncioMeio">
                                    <div className = "HProduto"> <img src = "/assets/images/Celular.png" alt = ""/> </div>
                                    <div className = "HDescricao">
                                        <div className = "HTitulo">Xiaomi Mi A2</div>
                                        <div className = "HTempo">1 ano de uso</div>
                                        <div className = "HPreco">
                                            <div className = "HPde">De: R$ 920,00</div>
                                            <div className = "HPpor">Por: R$ 790,99</div>
                                        </div>
                                    </div>
                                </div>

                                <div className = "HAnuncio">
                                    <div className = "Hproduto"> <img src = "/assets/images/CasaBarbie.png" alt = ""/> </div>
                                    <div className = "Hdescricao">
                                        <div className = "Htitulo">Casa da Barbie</div>
                                        <div className = "Htempo">8 meses de uso</div>
                                        <div className = "Hpreco">
                                            <div className = "Hpde">De: R$ 400,00</div>
                                            <div className = "Hppor">Por: R$ 320,99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className = "HFaixa">
                    <div className = "HEspecificacao">Vistos Recentemente</div>
                    <div>
                        <div className = "HCarrossel">
                            <div className = "HSetas">
                             
                                <img className = "HRotacionada" src = "/assets/images/Seta.png" alt=""/> 
                                <img src = "/assets/images/Seta.png" alt=""/> 
                            </div>
                          
                            <div className = "HCentro">

                            {produtos.map((x) => 
                            <Link to={{pathname: "/produto",
                                        state: x}}>
                                <div className ="HAnuncio">
                                    <div className = "Hproduto"> <img style={{width: "7.5em"}} src ={x.ds_imagem} alt = ""/> </div>
                                        <div className = "Hdescricao">
                                            <div className = "Htitulo">{x.nm_produto}</div>
                                            <div className = "Htempo">{x.ds_produto}</div>
                                            <div className = "Hpreco">
                                                <div className = "Hpde">{x.vl_preco}</div>
                                                <div className = "Hppor">Por: R$ {x.vl_preco}</div>
                                            </div>
                                        </div>
                                </div>
                            </Link>
                                )}

                                <div className = "HAnuncioMeio">
                                    <div className = "HProduto"> <img src = "/assets/images/Celular.png" alt = ""/> </div>
                                    <div className = "HDescricao">
                                        <div className = "HTitulo">Xiaomi Mi A2</div>
                                        <div className = "HTempo">1 ano de uso</div>
                                        <div className = "HPreco">
                                            <div className = "HPde">De: R$ 920,00</div>
                                            <div className = "HPpor">Por: R$ 790,99</div>
                                        </div>
                                    </div>
                                </div>

                                <div className = "HAnuncio">
                                    <div className = "Hproduto"> <img src = "/assets/images/CasaBarbie.png" alt = ""/> </div>
                                    <div className = "Hdescricao">
                                        <div className = "Htitulo">Casa da Barbie</div>
                                        <div className = "Htempo">8 meses de uso</div>
                                        <div className = "Hpreco">
                                            <div className = "Hpde">De: R$ 400,00</div>
                                            <div className = "Hppor">Por: R$ 320,99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className = "HFaixa">
                    <div className = "HEspecificacao">Recomendados</div>
                    <div>
                        <div className = "HCarrossel">
                            <div className = "HSetas"> 
                                <img className = "HRotacionada" src = "/assets/images/Seta.png" alt=""/> 
                                <img src = "/assets/images/Seta.png" alt=""/> 
                            </div>
                            <div className = "HCentro">

                                <div className ="HAnuncio">
                                    <div className = "Hproduto"> <img src = "/assets/images/Camiseta.png" alt = ""/> </div>
                                        <div className = "Hdescricao">
                                            <div className = "Htitulo">Camiseta Levis</div>
                                            <div className = "Htempo">4 meses de uso</div>
                                            <div className = "Hpreco">
                                                <div className = "Hpde">De: R$ 110,00</div>
                                                <div className = "Hppor">Por: R$ 52,99</div>
                                            </div>
                                        </div>
                                </div>

                                <div className = "HAnuncioMeio">
                                    <div className = "HProduto"> <img src = "/assets/images/Celular.png" alt = ""/> </div>
                                    <div className = "HDescricao">
                                        <div className = "HTitulo">Xiaomi Mi A2</div>
                                        <div className = "HTempo">1 ano de uso</div>
                                        <div className = "HPreco">
                                            <div className = "HPde">De: R$ 920,00</div>
                                            <div className = "HPpor">Por: R$ 790,99</div>
                                        </div>
                                    </div>
                                </div>

                                <div className = "HAnuncio">
                                    <div className = "Hproduto"> <img src = "/assets/images/CasaBarbie.png" alt = ""/> </div>
                                    <div className = "Hdescricao">
                                        <div className = "Htitulo">Casa da Barbie</div>
                                        <div className = "Htempo">8 meses de uso</div>
                                        <div className = "Hpreco">
                                            <div className = "Hpde">De: R$ 400,00</div>
                                            <div className = "Hppor">Por: R$ 320,99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>

            <Rodape />
        </HContainer>
    )
}