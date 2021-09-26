
import { Link } from "react-router-dom"
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import Container from './styled'


export default function MeusAnuncios(){
    return(
        <Container>
            <Cabecalho />
            <div className="agp">
              <div className="img-agp"><img src="/assets/images/microondas.jpg" alt="" /></div>
              <div className="texto1"> 
                  <div className="nm_produto">Micro-ondas</div>
                  <div className="preço"> preço: R$350.00</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios"><b>Como funciona?</b></Link></div> 
                  </div>

                 <div className="butoes"> 
                  <button className="editar"> Editar </button>
                  <button className="excluir"> Excluir </button>
                 </div>    
          </div>
            
            <hr/>

            <div className="agp">
              <div className="img-agp"><img src="/assets/images/microondas.jpg" alt="" /></div>
              <div className="texto1"> 
                  <div className="nm_produto">Micro-ondas</div>
                  <div className="preço"> preço: R$350.00</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios"><b>Como funciona?</b></Link></div> 
                  </div>

                 <div className="butoes"> 
                  <button className="editar"> Editar </button>
                  <button className="excluir"> Excluir </button>
                 </div>    
          </div>

          <hr/>
          <div className="agp">
              <div className="img-agp"><img src="/assets/images/microondas.jpg" alt="" /></div>
              <div className="texto1"> 
                  <div className="nm_produto">Micro-ondas</div>
                  <div className="preço"> preço: R$350.00</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios"><b>Como funciona?</b></Link></div> 
                  </div>

                  <div className="butoes"> 
                  <button className="editar"> Editar </button>
                  <button className="excluir"> Excluir </button>
                 </div>    
          </div>
          
          <hr/>

          <div className="agp">
              <div className="img-agp"><img src="/assets/images/microondas.jpg" alt="" /></div>
              <div className="texto1"> 
                  <div className="nm_produto">Micro-ondas</div>
                  <div className="preço"> preço: R$350.00</div>
                  </div>
                  <div className="premium">
                     <div className="texto"><b>Destacar anuncio</b></div>
                     <div className="comoFunciona"> <Link to="/meusAnuncios"><b>Como funciona?</b></Link></div> 
                  </div>

                 <div className="butoes"> 
                  <button className="editar"> Editar </button>
                  <button className="excluir"> Excluir </button>
                 </div>    
          </div>

            <Rodape />
     </Container>
     )}