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

    const [nmProduto, setNmProduto] = useState('');
    const [imgProduto, setImgProduto] = useState('');
    const [preco, setPreco] = useState(0);
    const [avaliacao, setAvalicao] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [descricao, setDescricao] = useState('');



    async function mostrarProduto(){
        let r = await api.listarProduto();
        setProdutos(r);
        console.log(r);
    }

    async function editarProduto(item){
        setNmProduto(item.nm_produto);
        setPreco(item.vl_preco);
        setDescricao(item.ds_produto);
        setDesconto(item.nr_desconto);
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


                <div className = "HFaixa">
                    <div className = "HEspecificacao">Ofertas do Dia</div>
                    <div>
                        <div className = "HCarrossel">

                            <div className = "HSetas"> 
                                <img className = "HRotacionada" src = "/assets/images/Seta.png" alt=""/> 
                                <img src = "/assets/images/Seta.png" alt=""/> 
                            </div>
                            
                            
                            
                            <div className = "HCentro">
                                {produtos.map((item)=>
                                <Link to={{pathname: "/produto",
                                state: item}}>
                                    <div className ="HAnuncio">
                                        <div className = "Hproduto"> <img src = {item.ds_imagem} alt = ""/> </div>
                                        <div className = "Hdescricao">
                                            <div className = "Htitulo">{item.nm_produto}</div>
                                            <div className = "Hdesc">{item.ds_produto}</div>
                                            <div className = "Hpreco">
                                                <div className = "Hpde">{item.vl_preco+item.nr_desconto}</div>
                                                <div className = "Hppor">{item.vl_preco}</div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                )}
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
                          

                            {produtos.map((item) => 
                            <Link to={{pathname: "/produto",
                                        state: item}} >
                                <div className ="HAnuncio">
                                    <div className = "Hproduto"> <img style={{width: "7.5em"}} src={item.ds_imagem} alt = ""/> </div>
                                        <div className = "Hdescricao">
                                            <div className = "Htitulo">{item.nm_produto}</div>
                                            <div className = "Hdesc">{item.ds_produto}</div>
                                            <div className = "Hpreco">
                                                <div className = "Hpde">{item.vl_preco+item.nr_desconto}</div>
                                                <div className = "Hppor">{item.vl_preco}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                )}
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
                                {produtos.map((item)=>
                                <Link to={{pathname: "/produto",
                                state: item}}>
                                    <div className ="HAnuncio">
                                        <div className = "Hproduto"> <img src={item.ds_imagem} alt = ""/> </div>
                                        <div className = "Hdescricao">
                                            <div className = "Htitulo">{item.nm_produto}</div>
                                            <div className = "Hdesc">{item.ds_produto}</div>
                                            <div className = "Hpreco">
                                                <div className = "Hpde">{item.vl_preco+item.nr_desconto}</div>
                                                <div className = "Hppor">{item.vl_preco}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                )}
                            </div>
                            


                            
                        </div>
                    </div>
                </div>
                
    

            <Rodape />
            </HContainer>
    )
}