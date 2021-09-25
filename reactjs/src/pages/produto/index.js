import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import {Conteudo} from "./styled.js"
import { InputFrete } from "../../components/inputs/styled";
import { BotaoProduct } from "../../components/botoes/styled";
import { useState } from "react";










export default function produto (){


    return (
    <Conteudo>
        <main>
            <Cabecalho />
           
                <div className="conteudo">
                    <div className="container-produts">
                        <div className="produt">
                            <div className="title"><h2>Geladeira Frigobar</h2></div>
                            <div className="imgs-produt">
                                <div className="img-principal"><img src="/assets/images/microondas.jpg" alt="" style={{width: "13em", height: "auto"}}/></div>
                                <div className="seta"><img src="/assets/images/Seta.png" alt="" /></div>
                                <div className="agp-produt">
                                <div className="produt-min"><img src="/assets/images/microondas.jpg" className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img src="/assets/images/microondas.jpg" className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img src="/assets/images/microondas.jpg" className="icon-produt" alt="" /></div>
                                <div className="produt-min"><img src="/assets/images/microondas.jpg" className="icon-produt" alt="" /></div>
                            </div>
                            </div>
                            <div className="preco"><div className="title-preco"> Preço: </div> <span>R$ 1100.09</span> </div>
                            <div>
                                <div className="desc-produt">oieeesdasddasdasddasdadasdasdsadsadasdasfasfdasfafjashdjkhsajkdhaskldjsaklfjaskljfklsajfasklfjasklfjakljfaskljdfsakljfaskljfklasfjaklsfjasdkaskdlsakdlsakdlçaskdlçksalçkdke</div>
                                <div > <button style={{border: "hidden"}} className="mais">Mostrar mais </button></div>
                            </div>
                            <div className="agp-frete">
                                <div className="title-frete">Calcular Frete:</div>
                                <div className="input-frete"><InputFrete  name="oiiiiiiiii"/></div>
                                <div className="botao-frete"><button className="bta-frete"> Calcular </button></div>
                            </div>
                        </div>
                        
                        <div><hr className="traco-produt"></hr></div>
                        <div className="container-info">
                            <div className="perfil">
                                <div className="foto"><img src="/assets/images/foto.svg" alt="" style={{width: "3.5em"}} /></div>
                                <div className="avaliacao">
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-completa.svg" alt="" />
                                <img src="/assets/images/estrela-metade.svg" alt="" />
                                <img src="/assets/images/estrela-vazia.svg" alt="" />
                            </div>
                            <div className="nm-perfil">Roberto de Brunex</div>
                            </div>
                            <div className="agp-info">
                                <div className="info-product">
                                    <div className="title-info">Categoria:</div>
                                    <div className="desc-info">Geladeira</div>
                                </div>
                                <div className="info-product">
                                    <div className="title-info">Produto:</div>
                                    <div className="desc-info">Geladeira</div>
                                </div>
                                <div className="info-product">
                                    <div className="title-info">Preço:</div>
                                    <div className="desc-info">R$1109.10</div>
                                </div>
                            </div>
                            <div className="agp-botao">
                                <BotaoProduct className="bta-info"> Comprar Agora </BotaoProduct>
                                <BotaoProduct className="bta-info"><img src="/assets/images/chat.svg" alt="" /> <span>Negocie!</span></BotaoProduct>
                            </div>
                        </div>
                    </div>
                </div>
         
            <Rodape />
        </main>
    </Conteudo>
    )
}