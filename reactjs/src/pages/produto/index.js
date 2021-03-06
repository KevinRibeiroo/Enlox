//import { Link } from "react-router-dom";
import Cabecalho, { usuLogado } from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import {Conteudo} from "./styled.js"
import { InputFrete } from "../../components/inputs/styled";
import { BotaoProduct } from "../../components/botoes/styled";
import { useEffect, useState } from "react";
import Cookie from 'js-cookie';
//import { useState } from "react";

import { Link } from "react-router-dom";

import Cookies from "js-cookie";

import Api from "../../service/api";
import { useHistory } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listarImg } from "../../components/carrossel";
import axios from "axios";

const api = new Api();

export default function Produto (props){
    function pegarImg(img) {

        if (img.includes('http'))
        return img
        else 
        return `http://localhost:3030/usuariozin?imagem=${img}`
    }  

        const nav = useHistory();
        console.log(nav)
       
     
      const [produto] = useState(props.location.state);
      const [usu, setUsu] = useState([]);
      const [trocarImg, setTrocarImg] = useState(0)
      const [test43] = useState(produto);


      const [mostarMais, setMostrar] = useState(0);
      const [loc, setLoc] = useState([]);
      const [vlCep, setVlCep] = useState('');
      const [cep, setCep] = useState(false);

      console.log(test43)
      let usuarioLogado = usuLogado() || {};

      const [idUsu] = useState(usuarioLogado.id_usuario);

        const [categoria, setCategoria] = useState([])

     

   

    const mostrarUsuario = async () => {
        const r = await api.listarUsu(produto.id_usuario);
        setUsu([r]);
    }

  

        const listarCategoria = async () => {
            const r = await api.listarCategorias(produto.id_categoria);
            console.log(r);
            setCategoria(r);
        }

    const InserirChat = async () => {
        if (Cookies.get('usuario-logado') === undefined) {
            nav.push('/login');
            alert('para come??ar um chat ?? necessario estar logado')
          }
        
        const r = await api.inserirChatUsu(idUsu, produto.id_usuario )
        
          if(r.error){
              toast.dark(`${r.error}`);
          }
        console.log(r)
    }

    console.log(produto.id_categoria);

    function comprar() {
        let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                ? JSON.parse(carrinho) 
                : [];
                if (carrinho.some(item => item.id_produto === produto.id_produto) === false)
                carrinho.push({...produto, qtd:1});
                Cookie.set('carrinho', JSON.stringify(carrinho));
                nav.push('/carrinho');

            }


        useEffect(() => {
            listarCategoria();
        }, [])
        console.log(categoria)

        async function buscarCep() {

            let r1 = vlCep.length
    
            if (r1 === 8)
                setCep(true)
    
            const resp = await axios.get(`https://viacep.com.br/ws/${vlCep}/json/`);
            setLoc(resp.data);

            

            
        }

        function valorCep() {
        if(loc.uf === 'SP' || loc.uf !== 'SP'){
            
            if(loc.length === 0){
               return setVlCep('');
            }
            if (loc.uf !== 'SP'){
               return setVlCep('R$45.58')
            }
            setVlCep('R$ 35.58')
        }
        
        
    }
    
    useEffect(() => {
        mostrarUsuario();
        valorCep();
    },[loc]);
        
    const enviarCep = (event) => {
        if (event.key === 'Enter') {
            buscarCep();
        }
    }

    console.log(loc)
    return (
    <Conteudo>
        <ToastContainer />
        <main>
            <Cabecalho />
           
                <div className="conteudo">
                    <div className="container-produts">
            
                        <div className="produt">
                            <div className="title"><h2 >{produto.nm_produto}</h2></div>
                            <div className="imgs-produt">
                                <div className="img-principal"><img  onClick={() => setTrocarImg(0)} src={listarImg( trocarImg === 0 ? produto.ds_imagem1 : trocarImg === 1 
                                ? produto.ds_imagem2 : trocarImg === 2 ? produto.ds_imagem3 : trocarImg === 3 ? produto.ds_imagem4 : produto.ds_imagem1)} alt="" style={{width: "13em", height: "auto"}}/></div>
                              
                                <div className="agp-produt">
                                <div className="produt-min"><img onClick={() => setTrocarImg(0)} src={listarImg( produto.ds_imagem1)} className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img onClick={() => setTrocarImg(1)} src={listarImg(trocarImg === 1 ? produto.ds_imagem1 :produto.ds_imagem2)} className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img onClick={() => setTrocarImg(2)} src={listarImg(trocarImg === 2 ? produto.ds_imagem1 :produto.ds_imagem3)} className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img onClick={() => setTrocarImg(3)} src={listarImg(trocarImg === 3 ? produto.ds_imagem1 :produto.ds_imagem4)} className="icon-produt" alt="" /></div>
                            </div>
                            </div>
                            <div className="preco"><div className="title-preco"> Pre??o: </div> <span>R$ {produto.vl_preco}</span> </div>
                            <div>
                                { mostarMais === 0 ?
                                <div>
                                <div className="desc-produt">{produto.ds_produto}</div>
                                <div > <button style={{border: "hidden"}} className="mais" onClick={() => setMostrar(1)} >Mostrar mais </button></div>
                                </div>
                                : <div>
                                <div className="desc-produt2">{produto.ds_produto}</div>
                                <div > <button style={{border: "hidden"}} className="mais" onClick={() => setMostrar(0)}>Mostrar menos </button></div>
                                </div>
                                }   
                            </div>
                            <div className="agp-frete">
                                <div className="title-frete">Calcular Frete:</div>
                                <div className="input-frete"><InputFrete placeholder="Inserir CEP" value={vlCep} onChange={e => setVlCep(e.target.value)} onKeyPress={enviarCep} /></div>
                                <div className="botao-frete"><button className="bta-frete" onClick={() => buscarCep()} > Calcular </button></div>
                            </div>
                        </div>
                        
                        <div><hr className="traco-produt"></hr></div>
                        <div className="container-info">
                        {usu.map((x) => 
                            <div className="perfil">
                           
                                <div className="foto"><img src={listarImg(x.img_foto)} alt="" style={{width: "3.5em"}} /></div>
                            
                                <div className="avaliacao">
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-metade.svg" alt="" />
                                <img src="/assets/images/estrela-vazia.svg" alt="" />
                            </div>
                            <div className="nm-perfil">{x.nm_usuario}</div>
                            </div>
                            )}
                            <div className="agp-info">
                                <div className="info-product">
                                    <div className="title-info">Categoria:</div>
                                    <div className="desc-info">{categoria.nm_categoria}</div>
                                </div>
                                <div className="info-product">
                                    <div className="title-info">Produto:</div>
                                    <div className="desc-info">{produto.nm_produto}</div>
                                </div>
                                <div className="info-product">
                                    <div className="title-info">Pre??o:</div>
                                    <div className="desc-info">R$ {produto.vl_preco}</div>
                                </div>
                            </div>
                            <div className="agp-botao">
                                <BotaoProduct className="bta-info" > <Link className="vamo-negociar"  to={{pathname:"/compra", state: produto}}> Comprar Agora </Link></BotaoProduct>
                                <BotaoProduct className="bta-info" onClick={comprar} > Adicionar ao Carrinho </BotaoProduct>
                                <BotaoProduct className="bta-info" onClick={InserirChat}><Link className="vamo-negociar" to = {{pathname: '/chat',
                                                                                                      state: test43                }}><img src="/assets/images/chat.svg" alt="" /> <span>Negocie!</span></Link></BotaoProduct>
                            </div>
                        </div>
                    </div>
                </div>
         
            <Rodape />
        </main>
    </Conteudo>
    )
}