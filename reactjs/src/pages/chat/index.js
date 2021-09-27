import Cabecalho from "../../components/cabecalho";
import  Rodape  from "../../components/rodape/index";
import { Conteudo } from "./styled";
import { InputChat } from "../../components/inputs/styled";

export default function Chat() {
    return (
            <Conteudo>
                <main>
                    <Cabecalho />
                    <div className="container-chat">
                        <div className="conversas">
                            <div className="conversa">
                                <div className="img-perfil"><img src="/assets/images/foto.svg" alt="" /></div>
                                <div className="text">
                                    <div className="nm-produt">Geladeira Frigobar</div>
                                    <div className="nm-vendedor">Roberto Brunex</div>
                                    <div className="last-mensage">oxi fi sae dae</div>
                                </div>
                            </div>
                        </div>
                        <div className="chat">
                            <div className="config-chat">
                                <div className="perfil-chat">
                                <div className="imgs-perfil">
                                    <div className="foto-vendedor"><img src="/assets/images/foto.svg" alt="" style={{width: "38px"}}/></div>
                                    <div className="foto-usuario"><img src="/assets/images/perfil.svg" alt="" /></div>
                                </div>
                                <div className="nm-vendedor">Roberto Brunex</div>
                                <div className="last-acess">Ultimo acesso ontem as 17:45</div>
                                </div>
                                <div className="agp-config">
                                    <div className="bta-config"> Vizualisar perfil</div>
                                    <div className="bta-config"> Vizualisar produto</div>
                                </div>
                            </div>
                        
                        <div className="box-chat">
                            <div className="msg">bom dia adorei o produto</div>
                            <div className="msg">Oxi tio sae dae</div>
                            <div className="enviar-msg">
                                <div className="emoji"><img src="/assets/images/emoji.svg" alt="" /></div>
                                <div className="digit-msg"><InputChat /></div>
                                <div className="arquivo"><input type="file" className="document" /></div>
                                <div className="enviar"><img src="/assets/images/msg.svg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodape />
                </main>
            </Conteudo>
    )
}