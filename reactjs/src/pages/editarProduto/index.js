
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"

import {Container} from './styled.js';

export default function Home(){
    return(
        <Container>
          <main>
            <Cabecalho/>
             <button className="btn-salvar">salvar</button>
             <div className="conteudo">
                    <div className="group">
                        <div className="agp1">
                            <div className="agp-texto">
                                <div className="title"><h2>Geladeira Frigobar</h2></div>
                                <div className="editar"><img alt="" src="/assets/images/editar.svg"/></div>
                            </div>
                               <div className="agp-img">
                                  <div className="img-principal"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                   <div className="seta"><img alt="" src="/assets/images/seta.png"/></div>
                                     <div className="agp-min">   
                                        <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                        <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                        <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                        <div className="little-img"><img alt="" src="/assets/images/geladeira.svg"/></div>
                                     </div>   
                               </div>
                            <div className="preco"><div className="title-preco"> Preço: </div> <span>R$ 1100.09</span> </div>
                            <div>
                                <div className="desc-produt">Geledeira frigobar 2020, usada e em otimo estado</div>
                                <div >  <button className="mais">Mostrar mais </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            <Rodape />
            </main>
        </Container>
    )
}