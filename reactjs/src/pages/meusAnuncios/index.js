
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
                     <div className="texto">Destacar anuncio</div>
                     <div className="comoFunciona"> <a href="/meusAnuncios">Como funciona?</a></div> 
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
                     <div className="texto">Destacar anuncio</div>
                     <div className="comoFunciona"> <a href="/meusAnuncios">Como funciona?</a></div> 
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
                     <div className="texto">Destacar anuncio</div>
                     <div className="comoFunciona"> <a href="/meusAnuncios">Como funciona?</a></div> 
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
                     <div className="texto">Destacar anuncio</div>
                     <div className="comoFunciona"> <a href="/meusAnuncios">Como funciona?</a></div> 
                  </div>

                 <div className="butoes"> 
                  <button className="editar"> Editar </button>
                  <button className="excluir"> Excluir </button>
                 </div>    
          </div>

            <Rodape />
     </Container>
     )}