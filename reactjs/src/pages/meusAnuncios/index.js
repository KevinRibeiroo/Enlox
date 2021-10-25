
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
    console.log(produto)

    async function listar(){

        let r = await api.listarProduto();
        console.log(r);
        setProduto(r);

    }

    useEffect(() => {
        listar();
    },   [])

    async function remover (id) {

        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que quer remover o produto ${ produto.ds_produto} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.removerProduto(id);           
                            listar();
                    }
                },
                {
                    label: 'não'
                }
            ]
        })

        listar();
    }


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
                  <button onClick={ () => remover(item.id_produto) } className="excluir"> Excluir </button>
                 </div>    
          </div>
        )}

            <Rodape />
     </Container>
     )}
     