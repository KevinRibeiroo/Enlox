
import { Link } from "react-router-dom"
import Cabecalho, { usuLogado } from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import Modal from "../ModalEditarProduto";
import Container from './styled'

import Cookies from "js-cookie";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from "react-router";
import Api from '../../service/api';
import { useState, React, useEffect } from 'react';
const api = new Api();



export default function MeusAnuncios(){



    const nav = useHistory();


    let usuarioLogado = usuLogado() || {};
    const [ idUsu ] = useState(usuarioLogado.id_usuario);


    if (Cookies.get('usuario-logado') === undefined) {
      nav.push('/');
    }



    const [produto, setProduto] = useState([]);
    console.log(produto)
    const [exibirModal, setExibirModal] = useState({ show: false });
    console.log(exibirModal)
    const [nome, setNome] = useState('')
    console.log(nome)
    const [categoria, setCategoria] = useState('')
    console.log(categoria)
    const [preco, setPreco] = useState('')
    console.log(preco)
    const [descProduto, setDescProduto] = useState('')
    console.log(descProduto)
    const [estoque, setEstoque] = useState('')
    console.log(estoque)
    const [imagem, setImagem] = useState('')  
    console.log(imagem)
 
    async function listar(){

        let r = await api.listarMeusprodutos(idUsu);
        console.log(r);
        setProduto(r);
    }

    async function remover (id) {

        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que quer remover o produto ${id.nm_produto} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.removerProduto(id.id_produto);           
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

   
 

    const editarProduto = async (id) => {
        const r = await api.editar(id, nome, categoria, preco, descProduto, estoque, imagem)

        console.log(r)
    }
    
    useEffect(() => {
        listar();
    },      [])

    return(
        <Container>
            <Cabecalho />

     <Modal options={exibirModal}>
        <div>
        <main>
             <div className="conteudo">
             <div class="body-right-box">
                            <div class="new-student-box">

                                <div class="text-new-student">
                                    <div class="bar-new-student"></div>
                                    <div class="text-new-student"> Editar produto </div>
                                </div>

                                <div class="input-new-student"> 
                                    <div class="input-left">
                                        <div class="agp-input"> 
                                            <div class="name-product"> Nome: </div>
                                            <input class="input" type="text"  value={nome} onChange={e => setNome(e.target.value)}/>
                                        </div> 
                                        <div class="agp-input">
                                            <div class="name-product"> Preço: </div>
                                            <input class="input" type="text"  value={preco} onChange={e => setPreco(e.target.value)}/>
                                        </div>
                                        <div class="agp-input">
                                            <div class="number-product"> Categoria: </div>
                                            <input class="input" type="text"  value={categoria} onChange={e => setCategoria(e.target.value)} /> 
                                        </div>
                                        <div class="agp-input">
                                            <div class="number-product"> Estoque: </div>
                                            <input class="input" type="text"  value={estoque} onChange={e => setEstoque(e.target.value)}/> 
                                        </div>
                                        <div class="text">
                                          <div class="desc">Descrição:</div>
                                          <textarea class="descTextarea" type="text"  value={descProduto} onChange={e => setDescProduto(e.target.value)} ></textarea>

                                        </div>
                                    </div>
                                    </div>
                                    <div className="input-right">
                                     <div  className="agp-img">
                                       <div class="img-product"> Imagem: </div>
                                       <div class="box">
                                        <div className="upload">
                                             <div className= "icon"><img src="/assets/images/upload-icon-20631.png" alt=""/></div>
                                            <div className="x"> 
                                             <div className="arraste">arraste o seu arquivo </div> 
                                             <div className="ou">ou</div>
                                             <input type="file" accept=".png, .jpg, .jpeg"  value={imagem} onChange={e => setImagem(e.target.value)}/>
                                            </div>

                                         </div>
                                       </div>
                                     </div>
                                     
                                     <div class="button-create"> <button onClick={ () => editarProduto(produto.id_produto) }> Salvar</button> </div>
                                    </div>
                            </div>
                    </div>
                </div>
                </main>
        </div>
      </Modal>
       {produto.map((item) => 
          <div className="agp">
             <div className="img-agp"><img src={item.ds_imagem1} alt=""/></div>
              <div className="texto1"> 
                  <div className="nm_produto">{item.nm_produto}</div>
                  <div className="preço"> {item.vl_preco}</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios" className="linkk"><b>Como funciona?</b></Link></div> 
                  </div>

                 <div className="botoes"> 
                  <button onClick={() => setExibirModal({ show: true })}>
                    editar
                  </button>
                  <button onClick={ () => remover(item) } className="excluir"> Excluir </button>
                 </div>    
          </div>
        )}

            <Rodape/>
     </Container>
     )}
      