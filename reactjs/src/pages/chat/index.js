import Cabecalho, { usuLogado } from "../../components/cabecalho";
import  Rodape  from "../../components/rodape/index";
import { Conteudo } from "./styled";
import { InputChat } from "../../components/inputs/styled";
import { useEffect, useState } from "react";
import Api from "../../service/api";
//import Cookies from "js-cookie";

const api = new Api();





export default function Chat (props) {

    let usuarioLogado = usuLogado() || {};
    const [ idUsu ] = useState(usuarioLogado.id_usuario);

    const [msgText, setMsgText] = useState('');

    const [chatUsu, setChatUsu] = useState([]);

    //const [msg, setMsg] = useState([]);

    const [ usuario, setUsuario ] = useState(props.location.state);
    console.log(setUsuario)

    const [chat, setChat] = useState([]);



    const listarUsuChats = async () => {

        const r = await api.listarChatUsu(idUsu);


           setChatUsu(r);
            
    } 


  
    useEffect(() => {
       listarUsuChats();
    }, [])

    
    const listarMsg = async (id) => {
        const r = await api.listarMsg(idUsu, id);

        setChat(r);
    }

    const enviarMsg = async (id, msg2) => {
        const r = await api.inserirMsg(idUsu, id, msg2);

        console.log(r);

    
        listarMsg(id);
    }


    console.log(chatUsu)

    /*{idUsu != chatUsu.id_usuario_comprador ? chatUsu.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : chatUsu.id_usuario_comprador_infoa_enl_usuario.nm_usuario }*/
      
    return (
            <Conteudo>
                <main>
                    <Cabecalho />
                    <div className="container-chat">
                        <div className="conversas">
                        {chatUsu.map((X) => 
                            <div className="conversa">
                                
                          
                           
                                <div className="img-perfil"><img src={idUsu === X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.img_foto : X.id_usuario_comprador_infoa_enl_usuario.img_foto} alt="" /></div>
                                <div className="text">
                                    <div className="nm-produt">{usuario.nm_produto}</div>

                                    
                                    <div className="nm-vendedor">{idUsu === X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : X.id_usuario_comprador_infoa_enl_usuario.nm_usuario}</div>
                                   
                                  

                                    <div className="last-mensage">oxi fi sae dae</div>
                                </div>
                                  
                            </div>
                            )} 
                        </div>
                        {chatUsu.map((X) => 
                        <div className="chat">
                        
                            <div className="config-chat">
                                <div className="perfil-chat">
                                <div className="imgs-perfil">
                                    <div className="foto-usuario"><img src={idUsu === X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.img_foto : X.id_usuario_comprador_infoa_enl_usuario.img_foto} alt="" /></div>
                                    <div className="foto-usuario"><img src={idUsu !== X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.img_foto : X.id_usuario_comprador_infoa_enl_usuario.img_foto} alt="" /></div>
                                </div>
                                <div className="nm-vendedor2" title={idUsu !== X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : X.id_usuario_comprador_infoa_enl_usuario.nm_usuario}>{X.id_usuario_vendedor_infoa_enl_usuario.nm_usuario.length > 20 || X.id_usuario_comprador_infoa_enl_usuario.nm_usuario.length > 20 ? idUsu !== X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.nm_usuario.substr(0, 20) + '...' : X.id_usuario_comprador_infoa_enl_usuario.nm_usuario.substr(0, 20) + '...'
                                : idUsu !== X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : X.id_usuario_comprador_infoa_enl_usuario.nm_usuario}</div>
                                
                                </div>
                                <div className="agp-config">
                                    <div className="bta-config"> Vizualisar perfil</div>
                                    <div className="bta-config"> Vizualisar produto</div>
                                </div>
                            </div>
                        
                        <div className="box-chat">
                        
                            <div className="msgs">
                            {chat.map((item) =>
                        
                            <div className="msg">{item.ds_mensagem} </div>
         

                            )} 
                            </div>
                           
                            <div className="enviar-msg">
                                <div className="emoji"><img src="/assets/images/emoji.svg" alt="" /></div>
                                <div className="digit-msg"><InputChat value={msgText} onChange={(e) => setMsgText(e.target.value)} /></div>
                                <div className="arquivo"><input type="file" className="document" /></div>
                                <div className="enviar" ><button style={{border: "none", backgroundColor: "white"}} onClick={() => enviarMsg(usuario.id_usuario, msgText)} ><img src="/assets/images/msg.svg" alt="" /></button></div>
                            </div>
                            
                        </div>
                        </div>
                    
                        )}
                </div>
                
                <Rodape />
                </main>
            </Conteudo>
    )
}