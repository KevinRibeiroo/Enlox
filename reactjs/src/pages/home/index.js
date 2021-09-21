import Cabecalho from "../../components/cabecalho"




export default function Home(){
    return(
        <hContainer>
            <Cabecalho />
            <div className = "hSubcabecalho">
                <div className = "hCategorias">
                    <div className = "hEletronicos">
                        <div></div>
                        <div>ELETRÔNICOS</div>
                    </div>

                    <div className = "hMobilia">
                        <div></div>
                        <div>MOBÍLIA</div>
                    </div>

                    <div className = "hBeleza">
                        <div></div>
                        <div>BELEZA</div>
                    </div>

                    <div className = "hEsportes">
                        <div></div>
                        <div>ESPORTES</div>
                    </div>

                    <div className = "hConstrucao">
                        <div></div>
                        <div>CONSTRUÇÃO</div>
                    </div>

                    <div className = "hBrinquedos">
                        <div></div>
                        <div>BRINQUEDOS</div>
                    </div>

                    <div className = "hAutopecas">
                        <div></div>
                        <div>AUTO-PEÇAS</div>
                    </div>

                    <div className = "hOutros">
                        <div></div>
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




        </hContainer>
    )
}