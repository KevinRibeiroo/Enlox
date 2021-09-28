import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import { Conteudoprodut } from "./styled"
import { InputCadastrar, TextareDesc, InputTipo, InputPreco, InputImage, InputLocal } from "../../components/inputs/styled"


export default function CadasdtrarProduto () {
    return (
        <Conteudoprodut>
            <Cabecalho />
                <div className="container">
                    <div className="title-pag">
                    Insira seu proprio anuncio
                    </div>
                    <div className="conteudo-cdstr">
                        <InputCadastrar placeholder="Insira o nome do produto"/>
                        <TextareDesc placeholder="Insira descrição do produto"/>

                        <div className="agp-input">
                            <div className="label">Tipo</div>
                            <InputTipo placeholder="Selecione">
                                <option>oi</option>
                            </InputTipo>
                        </div>
                        
                        <div className="agp-input">
                            <div className="label">Tipo</div>
                            <InputPreco placeholder="Preço(R$)" />
                        </div>
                        <div className="agp-input">
                            <InputImage type="file" className="upload" />
                        <div>

                        
                        <div className="agp-input">
                            <div className="label">Localização</div>
                            <InputLocal placeholder="Localização do produto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Rodape />
        </Conteudoprodut>
    )
}