
import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import Container from './styled'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

    async function remover (id) {

        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que quer remover o produto ${ produto.nm_produto} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.removerProduto(id);           
                        if(r.erro){
                            console.log(`${r.erro}`);
                        } else {
                            console.log('removido')
                            listar();
                        }
                    }
                },
                {
                    label: 'não'
                }
            ]
        })

        listar();
    }

    useEffect(() => {
        listar();
    },   [])

    return(
        <Container>
            <Cabecalho />

       {produto.map((item) => 
          <div className="agp">
             <div className="img-agp"><img src={item.ds_imagem} alt=""/></div>
              <div className="texto1"> 
                  <div className="nm_produto">{item.nm_produto}</div>
                  <div className="preço"> {item.vl_preco}</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios" className="linkk"><b>Como funciona?</b></Link></div> 
                  </div>

                 <div className="butoes"> 
                  <div className="editar"><Link to = "/editarProduto">Editar</Link></div>
                  <button onClick={ () => remover(item.id_produto) } className="excluir"> Excluir </button>
                 </div>    
          </div>
        )}

            <Rodape />
     </Container>
     )}
     