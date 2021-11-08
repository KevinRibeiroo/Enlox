
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
                    <div className="fx2">
                        <div className="agp-fx2">
                                    <div className="agp-texto2">
                                        <div className="title"><h2>Geladeira Frigobar</h2></div>
                                    </div>
                                    <div className="agp-img">
                                        <div className="img-principal"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                        <div className="seta"><img alt="" src="/assets/images/seta.png"/></div>
                                            <div className="agp-min">   
                                                <div className="little-img"><img alt="" src={produto.ds_imagem1} /></div>
                                                <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                                <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                                <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                            </div>   
                                    </div>
                                    <div className="preco"><div className="title-preco"> Preço: </div> <span>R$ 1381.09</span> </div>
                                    <div className="desc-product">Geledeira frigobar 2020, usada e em otimo estado</div>


                                <div className="agp-total">
                                    <div className="x"><div className="title-agp"> Produto </div> <span>R$ 1.381.09</span> </div>
                                    <div className="frete"><div className="title-frete"> Frete </div> <span>gratis</span> </div>
                                    <div className="x"><div className="title-agp"> SubTotal</div> <span>R$ 1381.09</span> </div>
                                    <hr/>
                                    <div className="total"><div className="title-total"> Total </div> <span>4x de R$ 345.25 </span> </div>
                                </div>
                        </div>
                    </div>
                </div>
            <Rodape />
        </Container>
    )
}