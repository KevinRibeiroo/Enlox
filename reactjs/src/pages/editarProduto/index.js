import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";

import {Container} from './styled.js';

export default function Home(){
    return(
        <Container>
            <Cabecalho/>
             <button className="btn-salvar">salvar</button>
             <div className="box">
                 <div className="agp1">
                        <div className="product">
                         <div className="titulo">
                            <div className="title"><h2>Geladeira Frigobar</h2></div>
                            <div className="btn-editar"><img alt="" src="/assets/images/editar.svg"/></div>
                         </div>
                            <div className="imgs-product">
                                <div className="img-principal"><img src="/assets/images/geladeira.svg" alt=""/></div>
                                <div className="seta"><img src="/assets/images/Seta.png" alt="" /></div>
                                <div className="agp-product">
                                <div className="product-min"><img  alt="" src="/assets/images/geladeira.svg" /></div>
                                <div className="product-min"><img  alt="" src="/assets/images/geladeira.svg" /></div>
                                <div className="product-min"><img  alt="" src="/assets/images/geladeira.svg" /></div>
                                <div className="product-min"><img  alt="" src="/assets/images/geladeira.svg" /></div>
                            </div>
                            <div className="preco"><div className="title-preco"> Preço: </div> <span>R$ 1381.09</span> </div>
                            <div>
                                <div className="desc-produt">Geledeira frigobar 2020, usada e em otimo estado</div>
                                <div ><button className="mais">Mostrar mais </button></div>
                            </div>
                        </div> 
                     </div>
                 </div>
             </div>
            <Rodape />
        </Container>
    )
}