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
                     <div className="titulo">Geladeira Frigobar</div>
                 </div>
             </div>
            <Rodape />
        </Container>
    )
}