
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";

//import Cookies from "js-cookie";
import {HContainer,HCarrossell} from './styled.js';
//import {useHistory} from 'react-router-dom';



import {CarrosselComp} from '../../components/carrossel';

import Api from "../../service/api";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { useHistory } from "react-router";
//import Cookies from "js-cookie";
const api = new Api();





export default function Home(props){
    
  
    
  
     const [idCarrossel,setIdCarrossel] = useState();
     console.log(idCarrossel)



    const [produtosDesc, setProdutosDesc] = useState([]);
    //const [produtosRec, setProdutosRec] = useState([]);
    //const [produtosReco, setProdutosRecom] = useState([]);
    
    const [pesquisar, setPesquisar] =useState("");
    
    const [nmProduto, setNmProduto] = useState('');

    console.log(nmProduto)
   // const [imgProduto, setImgProduto] = useState('');
    const [preco, setPreco] = useState(0);
    console.log(preco)
   // const [avaliacao, setAvaliacao] = useState(0);

    //const [imgProduto, setImgProduto] = useState('');
    //const [avaliacao, setAvaliacao] = useState(0);

    const [desconto, setDesconto] = useState(0);
    console.log(desconto)
    const [descricao, setDescricao] = useState('');
    console.log(descricao)

    console.log(preco);
    console.log(nmProduto);
    console.log(desconto);
    console.log(descricao);
    

    // var bibbox = document.querySelector('.hbox');
    // var setaEsq = document.querySelector('.HRotacionada');
    
    // var nScroll = 100;

    /*var bibbox = document.querySelector('.hbox');
    var setaEsq = document.querySelector('.HRotacionada');
    
    var nScroll = 100;*/
    
    

   
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


    //mostrar produtos com desconto: Faixa de Ofertas do Dia
    async function produtosOfertados(){
        const r = await api.listarProduto();
        var nova=[];
        for(let i=0;i<r.length;i++){
            
            if(r[i].nr_desconto !== 0 && r[i].bt_ativo){
                nova.push(r[i])   
            }
       }
       
       /* ordem crescente descontos
       var desconto = nova.map((i)=>i.nr_desconto);
       function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
       desconto=desconto.sort(comparaNumeros);
       console.log(desconto);
       */
      console.log("ugsdgydgye")
      console.log(nova)
       setProdutosDesc(nova);
    }

    
    async function editarProduto(item){
        setNmProduto(item.nm_produto);
        setPreco(item.vl_preco);
        setDescricao(item.ds_produto);
        setDesconto(item.nr_desconto);
    }

    //console.log(editarProduto)

    


    useEffect(() => {
        //const q = produtos.map(i => i.nr_desconto)
        
        produtosOfertados();       
        
    }, [])
  
    //HSeta atrapalhando o hover de class hcomprar
   
    return(
       <HContainer>
            <Cabecalho/>
            <div className = "HSubCabecalho">
                <div className = "HCategorias">

                    <div className = "HEletronicos"><Link to= {{pathname:"/listagemProdutos", state:1}} className="hlinks" >
                     
                        <div className = "HElipse">
                            <img src="/assets/images/Eletronicos.png" alt="" />
                        </div>
                        <div>ELETRÔNICOS</div></Link>
                    </div>

                    <div className = "HMobilia"><Link to= {{pathname:"/listagemProdutos", state:2}} className="hlinks" >
                        <div className = "HElipse">
                            <img src="/assets/images/Mobília.png" alt="" />
                        </div>
                        <div>MOBÍLIA</div></Link>
                    </div>

                    <div className = "HBeleza"><Link to= {{pathname:"/listagemProdutos",state:3}} className="hlinks" >
                        <div className = "HElipse">
                            <img src="/assets/images/Beleza.png" alt="" />
                        </div>
                        <div>BELEZA</div></Link>
                    </div>

                    <div className = "HEsportes"><Link to= {{pathname:"/listagemProdutos",state:4}} className="hlinks" >
                        <div className = "HElipse">
                            <img src="/assets/images/Esportes.png" alt="" />
                        </div>
                        <div>ESPORTES</div></Link>
                    </div>

                    <div className = "HConstrucao"><Link to= {{pathname:"/listagemProdutos",state:5}} className="hlinks" >
                        <div className = "HElipse">
                            <img src="/assets/images/Construção.png" alt="" />
                        </div>
                        <div>CONSTRUÇÃO</div></Link>
                    </div>

                    <div className = "HBrinquedos"><Link to= {{pathname:"/listagemProdutos",state:6}} className="hlinks" >
                        <div className = "HElipse Brinquedo">
                            <img src="/assets/images/Brinquedos.png" alt="" />
                        </div>
                        <div>BRINQUEDOS</div></Link>
                    </div>

                    <div className = "HAutopecas"><Link to= {{pathname:"/listagemProdutos",state:7}} className="hlinks" >
                        <div className = "HElipse">
                            <img src="/assets/images/Auto-peças.png" alt="" />
                        </div>
                        <div>AUTO-PEÇAS</div></Link>
                    </div>

                    <div className = "HOutros"><Link to= {{pathname:"/listagemProdutos",state:8}} className="hlinks" >
                        <div className = "HElipse">
                            <img src="/assets/images/Outros.png" alt="" />
                        </div>
                        <div>OUTROS</div></Link>
                    </div>
                    
                </div>
                <div className = "HPesquisar">
                    <div className = "HProcurando">
                        <input type = "text" value={pesquisar} onChange={(i) => setPesquisar(i.target.value) } placeholder =  "Digite o que está procurando..."/>
                    </div>
                    <Link to= {{pathname:"/listagemProdutos",state:pesquisar}} className="hlinks" >
                    <div className = "HSimbolo">
                        <div className = "HLupa"><img src="/assets/images/Pesquisarp.svg" alt="" /></div>
                    </div></Link>
                </div>
            </div>

            <div className = "HCorpo">


                <div className = "HFaixa">
                    <div className = "HEspecificacao">Ofertas Oferecidas</div>
                    
                    <HCarrossell>
                    <div className = "HSetas"> 
                            <img className = "HRotacionada" onClick={() => myEsquerda(0)} src = "/assets/images/Seta.png" alt=""/> 
                            <img  onClick={() => myDireita(0)} src = "/assets/images/Seta.png" alt=""/> 
                    </div>
                        
                        <div id="autoWidth" class="cs-hidden">
                            
                            {produtosDesc.map((item)=>
                                <Link to={{pathname: "/produto", state: item}} className="icon-carrosel" >  
                                <CarrosselComp info={item}/>
                                
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
                            
                            {produtosDesc.map((item)=>
                                <Link to={{pathname: "/produto", state: item}} className="icon-carrosel" >  
                                <CarrosselComp info={item}/>
                                
                                </Link>
                            
                            )}      
                
                        </div>
                    </HCarrossell>
                
            </div>



                <div className = "HFaixa">
                    <div className = "HEspecificacao">Recomendados</div>
                    <HCarrossell>
                    <div className = "HSetas"> 
                            <img className = "HRotacionada" onClick={() => myEsquerda(2)} src = "/assets/images/Seta.png" alt=""/> 
                            <img  onClick={() => myDireita(2)} src = "/assets/images/Seta.png" alt=""/> 
                    </div>
                        
                        <div id="autoWidth" class="cs-hidden">
                            
                            {produtosDesc.map((item)=>
                                <Link to={{pathname: "/produto", state: item}} className="icon-carrosel" >  
                                <CarrosselComp info={item}/>
                                
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