
import { useState, React, useEffect } from 'react';
import Cabecalho, { usuLogado } from "../../components/cabecalho"
import Rodape from "../../components/rodape"

import Api from '../../service/api'
import {Container} from './styled.js';
import { useHistory } from "react-router";
import Cookies from "js-cookie";

export default function Compra(props){

    const api = new Api();


    const nav = useHistory();



    if (Cookies.get('usuario-logado') === undefined) {
      nav.push('/');
    }


    let ususLogado = usuLogado() || {}

     const [produto] = useState([props.location.state]);
     const [usuario, setUsuario]= useState([])
     const [idUsu] = useState(ususLogado.id_usuario)
     const [trocarImg, setTrocarImg] = useState(0)
     const [cartao, setCartao] = useState('')

/*
     async function editar(item) 

        setCartao()
    }
*/

const getUsu = async() =>   {
    let g = await api.listarUsu(idUsu)
    setUsuario(g)
} 
  
const getCart = async() =>   {
    let h = await api.listarUsu(idUsu)
    setCartao(h)
} 

useEffect(() => {getUsu()}, []);
useEffect(() => {getCart()}, []);

    return(
        <Container>
            <Cabecalho/>
                <div className="container">
                  <div className="fx1"> 
                        <div className="agp-fx1">
                         <div className="agp-texto1">
                            <div className="title"><h2>confirme sua compra</h2></div>
                        <div className="detalhes">
                         <div className="x">Detalhes de Endereço</div>
                         
                          <div className="aaa">  
                                <div className="dentro"><span>{ "│" + usuario.ds_bairro + ", " }{usuario.nm_rua + ", Nº " + usuario.nr_casa}</span></div>
                          </div>
                     
                        </div>
                        <div className="detalhes">
                         <div className="x">detalhes de pagamento</div>
                          <div className="aaa">                             
                                <div className="cartao"><img alt="" src="/assets/images/cartao.svg"/>{usuario.nr_cartao}<div className="master"></div></div>
                                <div className="btn-alterar"><button>alterar cartão</button></div>
                          </div>
                        </div>
                    </div>
                        <div className="btn-comprar"><button>confirmar compra</button></div>
                    </div>
                </div>

                {produto.map((item) => 
                    <div className="fx2">
                        <div className="agp-fx2">
                                    <div className="agp-texto2">
                                        <div className="title"><h2>{item.nm_produto}</h2></div>
                                    </div>
                                    <div className="agp-img">
                                        <div className="img-principal"><img  onClick={() => setTrocarImg(0)} src={trocarImg === 0 ? item.ds_imagem1 : trocarImg === 1 
                                ? item.ds_imagem2 : trocarImg === 2 ? item.ds_imagem3 : trocarImg === 3 ? item.ds_imagem4 : item.ds_imagem1} alt="" style={{width: "13em", height: "auto"}}/></div>                                            <div className="agp-min">   
                                                <div className="little-img"><img onClick={() => setTrocarImg(0)} src={item.ds_imagem1} /></div>
                                                <div className="little-img"><img onClick={() => setTrocarImg(1)} alt="" src={trocarImg === 1 ? item.ds_imagem1 :item.ds_imagem2} /></div>
                                                <div className="little-img"><img onClick={() => setTrocarImg(2)} alt="" src={trocarImg === 2 ? item.ds_imagem1 :item.ds_imagem3} /></div>
                                                <div className="little-img"><img onClick={() => setTrocarImg(3)} alt="" src={trocarImg === 3 ? item.ds_imagem1 :item.ds_imagem4} /></div>
                                            </div>   
                                    </div>
                                    <div className="preco"><div className="title-preco"> Preço: </div> <span>R$ {item.vl_preco}</span> </div>
                                    <div className="desc-product">{item.ds_produto}</div>


                                <div className="agp-total">
                                    <div className="x"><div className="title-agp"> Produto </div> <span>R$ {item.vl_preco}</span> </div>
                                    <div className="frete"><div className="title-frete"> Frete </div> <span>gratis</span> </div>
                                    <div className="x"><div className="title-agp"> SubTotal</div> <span>R$ {item.vl_preco}</span> </div>
                                    <hr/>
                                    <div className="total"><div className="title-total"> Total </div> <span>{item.vl_preco} </span> </div>
                                </div>
                        </div>
                    </div>
                )}
                </div> 
            <Rodape />
        </Container>
    )
}