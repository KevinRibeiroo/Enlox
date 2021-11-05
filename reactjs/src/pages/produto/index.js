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



import Api from "../../service/api";
import { useHistory } from "react-router";
const api = new Api();

export default function Produto (props){

        const nav = useHistory();
        console.log(nav)
       
     
      const [produto] = useState(props.location.state);
      const [usu, setUsu] = useState([]);
      
      const [test43] = useState(produto);

      console.log(test43)
      let usuarioLogado = usuLogado() || {};

      const [idUsu] = useState(usuarioLogado.id_usuario);

    

     

    useEffect(() => {
        mostrarUsuario(produto.id_usuario);
    });

    const mostrarUsuario = async (id) => {
        const r = await api.listarUsu(id);
        setUsu(r);
    }

    
    const InserirChat = async () => {
        
        const r = await api.inserirChatUsu(idUsu, produto.id_usuario )
        

        console.log(r)
    }

    console.log(usu);

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

    return (
    <Conteudo>
        <main>
            <Cabecalho />
           
                <div className="conteudo">
                    <div className="container-produts">
            
                        <div className="produt">
                            <div className="title"><h2 >{produto.nm_produto}</h2></div>
                            <div className="imgs-produt">
                                <div className="img-principal"><img src={produto.ds_imagem1} alt="" style={{width: "13em", height: "auto"}}/></div>
                                <div className="seta"><img src="/assets/images/Seta.png" alt="" /></div>
                                <div className="agp-produt">
                                <div className="produt-min"><img src={produto.ds_imagem1} className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img src={produto.ds_imagem2} className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img src={produto.ds_imagem3} className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img src={produto.ds_imagem4} className="icon-produt" alt="" /></div>
                            </div>
                            </div>
                            <div className="preco"><div className="title-preco"> Preço: </div> <span>R$ {produto.vl_preco}</span> </div>
                            <div>
                                <div className="desc-produt">{produto.ds_produto}</div>
                                <div > <button style={{border: "hidden"}} className="mais">Mostrar mais </button></div>
                            </div>
                            <div className="agp-frete">
                                <div className="title-frete">Calcular Frete:</div>
                                <div className="input-frete"><InputFrete  name="oiiiiiiiii"/></div>
                                <div className="botao-frete"><button className="bta-frete"> Calcular </button></div>
                            </div>
                        </div>
                        
                        <div><hr className="traco-produt"></hr></div>
                        <div className="container-info">
                            <div className="perfil">
                                <div className="foto"><img src={usu.img_foto} alt="" style={{width: "3.5em"}} /></div>
                                <div className="avaliacao">
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-metade.svg" alt="" />
                                <img src="/assets/images/estrela-vazia.svg" alt="" />
                            </div>
                            <div className="nm-perfil">{usu.nm_usuario}</div>
                            </div>
                            <div className="agp-info">
                                <div className="info-product">
                                    <div className="title-info">Categoria:</div>
                                    <div className="desc-info">Geladeira</div>
                                </div>
                                <div className="info-product">
                                    <div className="title-info">Produto:</div>
                                    <div className="desc-info">{produto.nm_produto}</div>
                                </div>
                                <div className="info-product">
                                    <div className="title-info">Preço:</div>
                                    <div className="desc-info">R$ {produto.vl_preco}</div>
                                </div>
                            </div>
                            <div className="agp-botao">
                                <BotaoProduct className="bta-info" > <Link to={{pathname:"/compra", state: produto}}> Comprar Agora </Link></BotaoProduct>
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