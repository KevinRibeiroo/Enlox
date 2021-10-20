
import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import Container from './styled'

import Api from '../../service/api';
import { useState, React, useEffect } from 'react';
const api = new Api();


export default function MeusAnuncios(){

    const [produto, setProduto] = useState([]);
   
    async function listar(){

        let r = await api.listarProduto();
        console.log(r);
        setProduto(r);

    }

    useEffect(() => {
        listar();
    },   [])


    return(
        <Container>
            <Cabecalho />

       {produto.map((item) => 
          <div className="agp">
              <div className="img-agp"><img src={item.ds_imagem}/></div>
              <div className="texto1"> 
                  <div className="nm_produto">{item.nm_produto}</div>
                  <div className="preço"> {item.vl_preco}</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios"><b>Como funciona?</b></Link></div> 
                  </div>

                 <div className="butoes"> 
                  <button /*onClick={ () => editar() }*/className="editar"> Editar </button>
                  <button /*onClick={ () => remover() }*/ className="excluir"> Excluir </button>
                 </div>    
          </div>
        )}

            <Rodape />
     </Container>
     )}
     