import Cabecalho, { usuLogado } from "../../components/cabecalho";
import  Rodape  from "../../components/rodape/index";
import { Conteudo } from "./styled";
import { InputChat } from "../../components/inputs/styled";
import { useEffect, useState } from "react";
import Api from "../../service/api";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = new Api();





export default function Chat (props) {

    const nav = useHistory();



    if (Cookies.get('usuario-logado') === undefined) {
      nav.push('/login');
    }


    let usuarioLogado = usuLogado() || {};
    const [ idUsu ] = useState(usuarioLogado.id_usuario);

    const [msgText, setMsgText] = useState('');

    const [chatUsu, setChatUsu] = useState([]);

    //const [msg, setMsg] = useState([]);


    const [ usuario ] = useState(props.location.state);

    const [chat, setChat] = useState([]);

    const [idChatUsu, setIdChatUsu] = useState('');

    

    const [chatUsuEspecifico, setChatUsuEspecifico] = useState(null);


    const listarUsuChats = async () => {

        const r = await api.listarChatUsu(idUsu);


           setChatUsu(r);
            
    } 

    useEffect(() => {
       listarUsuChats();
    }, [])


    useEffect(() => {
        listarChatEspecif()
       
    },[idChatUsu] )

    const listarChatEspecif = async () => {
        const r = await api.listarChatEspecifico(idChatUsu);

        setChatUsuEspecifico(r);
        
    }


    
    const listarMsgs = async (id) => {

        console.log('listar msgs id: ' + id)
        const r = await api.listarMsg(id);

        setChat(r);
    }

    const enviarMsg = async  (msg2) => {
        const r = await api.inserirMsg(idUsu, idChatUsu, msg2);



        // console.log(r);
        listarMsgs(idChatUsu);
    }

    const setarIdChatUsu = async (id) => {
        setIdChatUsu(id);


        listarMsgs(id)
    }


    // console.log(idChatUsu)
    // console.log(chatUsuEspecifico)
    // console.log(chat)
    /*{idUsu != chatUsu.id_usuario_comprador ? chatUsu.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : chatUsu.id_usuario_comprador_infoa_enl_usuario.nm_usuario }*/
      
    console.log(chatUsu)
    if (chatUsu.length !== 0) {
    return (
            <Conteudo>
                <ToastContainer />
                <main>
                
                    <Cabecalho />
   
                    <div className="container-chat">
                  
                      <div className="conversas">
                        {!chatUsu ? '' : chatUsu.map((X) => 
                            <div className="conversa" onClick={() => setarIdChatUsu(X.id_chat_usuario)}>
                                
                          
                           
                                <div className="img-perfil"><img src={idUsu === X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.img_foto : X.id_usuario_comprador_infoa_enl_usuario.img_foto} alt="" /></div>
                                <div className="text">
                                    <div className="nm-produt">cade o nome do produto?</div>

                                    
                                    <div className="nm-vendedor">{idUsu === X.id_usuario_comprador ? X.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : X.id_usuario_comprador_infoa_enl_usuario.nm_usuario}</div>
                                   
                                  

                                    <div className="last-mensage">oxi fi sae dae</div>
                                </div>
                                  
                            </div>
                            )} 
                        </div>
                       {!chatUsuEspecifico ? <div></div>
                       :
                        <div className="chat">
                        
                            <div className="config-chat">
                                <div className="perfil-chat">
                                <div className="imgs-perfil">
                                    <div className="foto-usuario"><img src={idUsu === chatUsuEspecifico.id_usuario_comprador ? chatUsuEspecifico.id_usuario_vendedor_infoa_enl_usuario.img_foto : chatUsuEspecifico.id_usuario_comprador_infoa_enl_usuario.img_foto} alt="" /></div>
                                    <div className="foto-usuario"><img src={idUsu !== chatUsuEspecifico.id_usuario_comprador ? chatUsuEspecifico.id_usuario_vendedor_infoa_enl_usuario.img_foto : chatUsuEspecifico.id_usuario_comprador_infoa_enl_usuario.img_foto} alt="" /></div>
                                </div>
                                <div className="nm-vendedor2" title={idUsu !== chatUsuEspecifico.id_usuario_comprador ? chatUsuEspecifico.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : chatUsuEspecifico.id_usuario_comprador_infoa_enl_usuario.nm_usuario}>{chatUsuEspecifico.id_usuario_vendedor_infoa_enl_usuario.nm_usuario.length > 20 || chatUsuEspecifico.id_usuario_comprador_infoa_enl_usuario.nm_usuario.length > 20 ? idUsu !== chatUsuEspecifico.id_usuario_comprador ? chatUsuEspecifico.id_usuario_vendedor_infoa_enl_usuario.nm_usuario.substr(0, 20) + '...' : chatUsuEspecifico.id_usuario_comprador_infoa_enl_usuario.nm_usuario.substr(0, 20) + '...'
                                : idUsu !== chatUsuEspecifico.id_usuario_comprador ? chatUsuEspecifico.id_usuario_vendedor_infoa_enl_usuario.nm_usuario : chatUsuEspecifico.id_usuario_comprador_infoa_enl_usuario.nm_usuario}</div>
                                
                                </div>
                                <div className="agp-config">
                                    <div className="bta-config"> Vizualizar perfil</div>
                                    <div className="bta-config"> Vizualizar produto</div>
                                </div>
                            </div>
                        
                        <div className="box-chat">
                        
                            <div className="msgs">
                            {chat.map((item) =>
                        
                            <div className={item.id_usuario !== idUsu ? "msg2" : "msg"}>{item.ds_mensagem} </div>
         

                            )} 
                            </div>
                           
                            <div className="enviar-msg">
                                <div className="emoji"><img src="/assets/images/emoji.svg" alt="" /></div>
                                <div className="digit-msg"><InputChat value={msgText} onChange={(e) => setMsgText(e.target.value)} /></div>
                                <div className="arquivo"><input type="file" className="document" /></div>
                                <div className="enviar" ><button style={{border: "none", backgroundColor: "white"}} onClick={() => enviarMsg(msgText)} ><img src="/assets/images/msg.svg" alt="" /></button></div>
                            </div>
                            
                        </div>
                        </div>
}
                 
                </div>
                
                <Rodape />
                </main>

            </Conteudo>
    )} 
    
   else if (chatUsu.length === 0) {
        return <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}><div style={{width: "100%"}}><Cabecalho /></div> <h1>vc ainda não possui chats</h1> 
         <img style={{width: "17em"}} src="https://c.tenor.com/U2i5zqRo5bkAAAAM/sad-cry.gif" alt="" /></div>
    }
}