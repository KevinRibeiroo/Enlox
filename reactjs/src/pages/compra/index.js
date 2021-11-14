
import { useState } from "react";
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"

import {Container} from './styled.js';
import { useHistory } from "react-router";
import Cookies from "js-cookie";

export default function Compra(props){




    const nav = useHistory();



    if (Cookies.get('usuario-logado') === undefined) {
      nav.push('/');
    }


     const [produto] = useState([props.location.state]);
     //const [cartao, setCartao] = useState('')

/*
     async function editar(item) 

        setCartao()
    }
*/
   
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
                                <div className="dentro">avenida taltal ........... n°......... </div>
                                <div className="btn-alterar"><button>alterar endereço</button></div>
                          </div>
                        </div>
                        <div className="detalhes">
                         <div className="x">detalhes de pagamento</div>
                          <div className="aaa">                             
                                <div className="cartao"><img alt="" src="/assets/images/cartao.svg"/><div className="master">MasterCard</div></div>
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
                                        <div className="img-principal"><img alt="" src={item.ds_imagem1}/></div>
                                        <div className="seta"><img alt="" src="/assets/images/seta.png"/></div>
                                            <div className="agp-min">   
                                                <div className="little-img"><img alt="" src={item.ds_imagem1} /></div>
                                                <div className="little-img"><img alt="" src={item.ds_imagem2} /></div>
                                                <div className="little-img"><img alt="" src={item.ds_imagem3} /></div>
                                                <div className="little-img"><img alt="" src={item.ds_imagem4} /></div>
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