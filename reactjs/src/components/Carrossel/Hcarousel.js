import Api from "../../service/api";

import { Link } from "react-router-dom";

import { useState,useEffect } from "react";

import {HCarrossell} from './styled';

const api = new Api();





export default function Hcarousel(){

    var bibbox = document.querySelector('.hbox');
    var setaEsq = document.querySelector('.HRotacionada');
    var cont = document.querySelector(HCarrossell);
    var nScroll = 100;
    
    


    //func para scrool p direita na seta
    async function myDireita(){
    var n = document.querySelector('.hbox').offsetWidth;
    cont.scrollLeft += parseInt(n);
    
    }

    //func para scrool p esquerda na seta
    async function myEsquerda(){
        var n = document.querySelector('.hbox').offsetWidth;
        cont.scrollLeft -= parseInt(n);
        
        }
    

    const [produtos, setProdutos] = useState([]);


    async function mostrarProduto(){
        let r = await api.listarProduto();
        setProdutos(r);
        console.log(r);
    }


        useEffect(() => {
            mostrarProduto();
        }, [])
    
    return(
        
                                      
        <HCarrossell>
           <div className = "HSetas"> 
                <img className = "HRotacionada" onClick={myEsquerda} src = "/assets/images/Seta.png" alt=""/> 
                <img  onClick={myDireita} src = "/assets/images/Seta.png" alt=""/> 
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
        
        
        
    )


 
    
}

