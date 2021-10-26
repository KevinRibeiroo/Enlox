import Cabecalho from "../../components/cabecalho"

import { Conteudoprodut } from "./styled"
import { InputCadastrar, TextareDesc, InputTipo, InputPreco, InputImage, InputLocal } from "../../components/inputs/styled"
import {BotaoCdstr, InserirAnuncio} from '../../components/botoes/styled';
import { useState } from "react";

export default function CadastrarProduto () {


    let file = document.getElementsByClassName('upload');
    const [imgproduto, setImgproduto] = useState('');
    console.log(file)


    
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
                            <div className="label">Escolha sua categoria</div>
                         
                            <div className="agp-botao">
                                <BotaoCdstr>Eletronicos</BotaoCdstr>
                                <BotaoCdstr>Mobilia</BotaoCdstr>
                                <BotaoCdstr>Beleza</BotaoCdstr>
                                <BotaoCdstr>Esportes</BotaoCdstr>
                                <BotaoCdstr>Construções</BotaoCdstr>
                                <BotaoCdstr>Brinquedos</BotaoCdstr>
                                <BotaoCdstr>Auto-Peças</BotaoCdstr>
                                <BotaoCdstr style={{borderBottom: "none"}}>Outros</BotaoCdstr>
                            </div>
                        </div>
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
                            <InputImage type="file" className="upload"   accept="image/*" />

                        </div>

                        
                        <div className="agp-input">
                            <div className="label">Localização</div>
                            <InputLocal placeholder="Localização do produto" />
                        </div>


                        <InserirAnuncio style={{alignSelf: "flex-end"}}> Inserir Anuncio</InserirAnuncio>
                    </div>

        </div>
          
        </Conteudoprodut>
    )
}