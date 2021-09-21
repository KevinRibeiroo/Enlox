import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"



export default function Home(){
    return(
        <hContainer>
            <Cabecalho />
            <div className = "hSubcabecalho">
                <div className = "hCategorias">
                    <div className = "hEletronicos">
                        <div className = "hElipse">
                            <img src="/assets/images/celular.jpg" alt="" />
                        </div>
                        <div>ELETRÔNICOS</div>
                    </div>

                    <div className = "hMobilia">
                        <div className = "hElipse"></div>
                        <div>MOBÍLIA</div>
                    </div>

                    <div className = "hBeleza">
                        <div className = "hElipse"></div>
                        <div>BELEZA</div>
                    </div>

                    <div className = "hEsportes">
                        <div className = "hElipse"></div>
                        <div>ESPORTES</div>
                    </div>

                    <div className = "hConstrucao">
                        <div className = "hElipse"></div>
                        <div>CONSTRUÇÃO</div>
                    </div>

                    <div className = "hBrinquedos">
                        <div className = "hElipse"></div>
                        <div>BRINQUEDOS</div>
                    </div>

                    <div className = "hAutopecas">
                        <div className = "hElipse"></div>
                        <div>AUTO-PEÇAS</div>
                    </div>

                    <div className = "hOutros">
                        <div className = "hElipse"></div>
                        <div>OUTROS</div>
                    </div>
                    
                </div>
                <div className = "hPesquisar">
                    <div className = "hProcurando">
                        <input type = "text" placeholder =  "Digite o que está procurando..."/>
                    </div>
                    <div className = "hSimbolo">
                        <div className = "hLupa"></div>
                        <div className = "hPesquisar">Pesquisar</div>
                    </div>
                </div>
            </div>



            <Rodape />
        </hContainer>
    )
}