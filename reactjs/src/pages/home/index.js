import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Cookies from "js-cookie";
import {HContainer,HCarrossell} from './styled.js';
import {useHistory} from 'react-router-dom';



import Api from "../../service/api";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const api = new Api();



export default function Home(){

 

    const [idCarrossel,setIdCarrossel] = useState();

    const [produtos, setProdutos] = useState([]);

    const [nmProduto, setNmProduto] = useState('');
    const [imgProduto, setImgProduto] = useState('');
    const [preco, setPreco] = useState(0);
    const [avaliacao, setAvalicao] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [descricao, setDescricao] = useState('');


    
    var bibbox = document.querySelector('.hbox');
    var setaEsq = document.querySelector('.HRotacionada');
    
    var nScroll = 100;
    
    

    //func para scrool p direita na seta
    async function myDireita(idCarrossel){
        var n = document.querySelector('.hbox').offsetWidth * 3;
        document.querySelectorAll(HCarrossell)[idCarrossel].scrollLeft+= parseInt(n);
        setIdCarrossel();
       
    }

    //func para scrool p esquerda na seta
    async function myEsquerda(idCarrossel){
        var n = document.querySelector('.cs-hidden').offsetWidth;
        document.querySelectorAll(HCarrossell)[idCarrossel].scrollLeft-= parseInt(n);
        setIdCarrossel();
         
    }
    //até aqui pro carrossel funfar





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
  
    //HSeta atrapalhando o hover de hcomprar
   
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
                    
                    <HCarrossell>
                    <div className = "HSetas"> 
                            <img className = "HRotacionada" onClick={() => myEsquerda(0)} src = "/assets/images/Seta.png" alt=""/> 
                            <img  onClick={() => myDireita(0)} src = "/assets/images/Seta.png" alt=""/> 
                    </div>
                        
                        <div id="autoWidth" class="cs-hidden">
                            
                            {produtos.map((item)=>
                                <Link to={{pathname: "/produto", state: item}}>  
                                <div class="item-a">
                                


                                <div className="hbox">
                                    <div className="himagem">
                                        
                                        <img className="himagem2" src={item.ds_imagem1} alt="touch"/>
                                        <div className="hsobreposicao">
                                            <div className="hcomprar">Comprar</div>
                                        </div>
                                    </div>
                    
                                    <div className="hdetalhes">
                                        <div className="htitulo">{item.nm_produto}</div>
                                        <div className="hprecode">R${parseFloat(item.vl_preco) + parseFloat(item.nr_desconto)}</div>
                                        <div className="hprecopor">R${item.vl_preco}</div>
                                    </div>

                                </div>
                                </div>
                                
                                </Link>
                            
                            )}      
                
                        </div>
                    </HCarrossell>
                    
                </div>

                <div className = "HFaixa">
                    <div className = "HEspecificacao">Vistos Recentemente</div>
                    <HCarrossell>
                    <div className = "HSetas"> 
                            <img className = "HRotacionada" onClick={() => myEsquerda(1)} src = "/assets/images/Seta.png" alt=""/> 
                            <img  onClick={() => myDireita(1)} src = "/assets/images/Seta.png" alt=""/> 
                    </div>
                        
                        <div id="autoWidth" class="cs-hidden">
                            
                            {produtos.map((item)=>
                                <Link to={{pathname: "/produto", state: item}}>  
                               

                                <div className="hbox">
                                    <div className="himagem">
                                        
                                        <img className="himagem2" src={item.ds_imagem1} alt="touch"/>
                                        <div className="hsobreposicao">
                                            <div className="hcomprar">Comprar</div>
                                        </div>
                                    </div>
                    
                                    <div className="hdetalhes">
                                        <div className="htitulo">{item.nm_produto}</div>
                                        <div className="hprecode">R${parseFloat(item.vl_preco) + parseFloat(item.nr_desconto)}</div>
                                        <div className="hprecopor">R${item.vl_preco}</div>
                                    </div>

                                
                                </div>
                                
                                </Link>
                            
                            )}

                                    
                
                        </div>
                    </HCarrossell>
                
            </div>



                <div className = "HFaixa">
                    <div className = "HEspecificacao">Recomendados</div>
                    <HCarrossell>
                    <div className = "HSetas"> 
                            <img className = "HRotacionada" onClick={() =>myEsquerda(2)} src = "/assets/images/Seta.png" alt=""/> 
                            <img  onClick={() =>myDireita(2)} src = "/assets/images/Seta.png" alt=""/> 
                    </div>
                        
                        <div id="autoWidth" class="cs-hidden">
                            
                            {produtos.map((item)=>
                                <Link to={{pathname: "/produto", state: item}}>  
                                <div class="item-a">
                                


                                <div className="hbox">
                                    <div className="himagem">
                                        
                                        <img className="himagem2" src={item.ds_imagem1} alt="touch"/>
                                        <div className="hsobreposicao">
                                            <div className="hcomprar">Comprar</div>
                                        </div>
                                    </div>
                    
                                    <div className="hdetalhes">
                                        <div className="htitulo">{item.nm_produto}</div>
                                        <div className="hprecode">R${parseFloat(item.vl_preco) + parseFloat(item.nr_desconto)}</div>
                                        <div className="hprecopor">R${item.vl_preco}</div>
                                    </div>

                                </div>
                                </div>
                                
                                </Link>
                            
                            )}

                                    
                
                        </div>
                    </HCarrossell>
                
            </div>
            </div>

            <Rodape />
            </HContainer>
    )
}

