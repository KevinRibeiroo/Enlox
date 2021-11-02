// página de listagem de produtos pelo id_categoria
//ao clicar em determinada categoria na home, é redirecionado p cá

import { useEffect, useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape' 
import Api from '../../service/api';



import{Link} from 'react-router-dom';
const api = new Api();


export default function ListagemProdutos(){

    const [produtos, setProdutos] = useState([]);
    const[idCategoria,setIdCategoria] = useState();

    

      const mostrarProduto = async () => {

        const r = await api.listarProdutoCategoria(2);


           setIdCategoria(r);
            
    } 


    /*const mostrarProduto = async (id) => {
        const r = await api.listarProdutoCategoria(idCategoria);

        setChat(r);
    }*/

    useEffect(()=>{
        mostrarProduto();
    },[])

    return(
        <div>
           
            <Cabecalho/>
                <div>
                    {produtos.map((i)=>
                    <Link to ={{pathname:"/produto", state: i}}>
                        <div><img src={i.ds_imagem1} alt=""/></div>
                    </Link>
                    
                        )}
                </div>
            <Rodape/>
        </div>
    )
    
}