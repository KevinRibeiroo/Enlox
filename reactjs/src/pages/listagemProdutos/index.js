// página de listagem de produtos pelo id_categoria
//ao clicar em determinada categoria na home, é redirecionado p cá

import { useEffect, useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape' 
import Api from '../../service/api';

import{Link} from 'react-router-dom';

import{LContainer, LConteudo} from './styled';

const api = new Api();


export default function ListagemProdutos(props){
    
    
    const [produtos, setProdutos] = useState([]);
    
    
   
    const[idCategoria] = useState(props.location.state);
    const[p] = useState(props.location.state);//aqui estou recebendo a "variavel state"(na vdd é o estado) da página home
    
      const mostrarProduto = async () => {
       
            //esse if usa os states nuemricos para pegar as categorias da home
            if(typeof(idCategoria)==='number'){
                const r = await api.listarProdutoCategoria(idCategoria);
                console.log();

                setProdutos(r);
            }
            else{//if(typeof(idCategoria)==='string')//esse else usa o state string para pegar a palavra da barra de pesquisa e listar apenas produtos com aquela palavra no titulo(nm_produto)
                let listar = await api.listarProduto();
                setProdutos(listar)
                const nova = [];
                for(let i=0;i<listar.length;i++){
                    
                    //o if abaixo verifica se o que foi escrito na barra de pesquisa
                    //está contido no nome dos produtos
                    if(listar[i].nm_produto.toLowerCase().includes(p.toLowerCase())){
                        //listar = await api.listarProdutoCategoria(idCategoria[i])
                        nova.push(listar[i]);
                        console.log(listar[i])
                         
                    }
                    
                }
                //EXEMPLO:SE BUSQUEI POR C ENTÃO TODOS OS PRODUTOS EM QUE C ESTIVER CONTIDO EM NM_PRODUTO IRÁ SER RETORNADO
                setProdutos(nova)
                if(nova.length===0){
                    window.alert("Desculpe. Não encontramos nada parecido.")
                }
                
                // foi amém
                 //nem sei mais qual a lógica
        
            
    } 

        
    }

    //onClick={()=>barraPesquisa(pesquisar)}


    useEffect(()=>{
        mostrarProduto();
    },)

    return(
        <LContainer>
           
            <Cabecalho/>
                <LConteudo>
                    
                    {produtos.map((i)=>
                      <Link to={{pathname: "/produto", state: i}} className="icon-carrosel" >
                    
                    <div className="lbox">
                        <div className="limagem">
                            
                            <img className="limagem2" src={i.ds_imagem1} alt="touch"/>
                            <div className="lsobreposicao">
                                <div className="lcomprar">Comprar</div>
                            </div>
                        </div>
            
                        <div className="ldetalhes">
                            <div className="ltitulo">{i.nm_produto}</div>
                            <div className="lprecode">R${parseFloat(i.vl_preco) + parseFloat(i.nr_desconto)}</div>
                            <div className="lprecopor">R${i.vl_preco}</div>
                        </div>
            
                    </div>
                    
                    </Link>
                    
                        )}
                </LConteudo>
            <Rodape/>
        </LContainer>
    )
    
}