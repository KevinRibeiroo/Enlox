
import { Link } from "react-router-dom"
import Cabecalho, { usuLogado } from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import Modal from "../ModalEditarProduto";
import Container from './styled'


import Cookies from "js-cookie";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import Api from '../../service/api';
import { useState, React, useEffect } from 'react';
import rodape from "../../components/rodape";


const api = new Api();



export default function MeusAnuncios(){



    const nav = useHistory();


    let usuarioLogado = usuLogado() || {};
    const [ idUsu ] = useState(usuarioLogado.id_usuario);


    if (Cookies.get('usuario-logado') === undefined) {
      nav.push('/login');     
    }



    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState (0);
    const [exibirModal, setExibirModal] = useState({ show: false });
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [preco, setPreco] = useState('')
    const [descProduto, setDescProduto] = useState('')
    const [imagem, setImagem] = useState('')  
    const [imagem2, setImagem2] = useState('')  
    const [imagem3, setImagem3] = useState('')  
    const [imagem4, setImagem4] = useState('')  
    const [idProduto, setIdProduto] = useState('')  
 

    async function listar(){
        setLoading(true);

        let r = await api.listarMeusprodutos( idUsu );
        console.log(r);
        setProduto(r);
        setTotalPaginas(r);

        setLoading(false);
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

   
    async function editar(item) {
        setExibirModal({ show: true })

        setNome(item.nm_produto)
        setCategoria(item.id_categoria)
        setPreco(item.vl_preco)
        setDescProduto(item.ds_produto)
        
        setImagem(item.ds_imagem1)
        setImagem2(item.ds_imagem2)
        setImagem3(item.ds_imagem3)
        setImagem4(item.ds_imagem4)
        setIdProduto(item.id_produto)
    }



   


    const editarProduto = async () => {
        let r = await api.alterar(idProduto, nome, categoria, preco, descProduto)

        console.log(r)

        listar();
    }
    
    useEffect(() => {
        listar();
    }, [])

  
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
                                             <input type="file" accept=".png, .jpg, .jpeg"/>
                                            </div>

                                         </div>
                                       </div>
                                     </div>
                                     
                                     <div class="button-create"> <button onClick={ () => editarProduto()}> Salvar</button> </div>
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

                 <div className="botoes" >
                  <button onClick={ () => editar(item)} > 
                  
                    editar
       
                  </button>
                  
                  <button onClick={ () => remover(item) } className="excluir"> Excluir </button>
                 </div>    
          </div>
        )}

            <Rodape/>
     </Container>
     )}

      