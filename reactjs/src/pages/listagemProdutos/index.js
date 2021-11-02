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
    const[idCategoria,setIdCategoria] = useState(props.location.state);
 
  
      const mostrarProduto = async () => {

        const r = await api.listarProdutoCategoria(idCategoria);
        console.log();

        setProdutos(r);
            
    } 

    useEffect(()=>{
        mostrarProduto();
    },[])

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