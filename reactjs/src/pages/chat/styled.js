import styled from "styled-components";






const Conteudo = styled.div`
display: flex;
flex-direction: column;

main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
.container-chat {
    display: flex;
}
.conversa {
    display: flex;
    justify-content: space-between;
}

.chat {
    display: flex;
    flex-direction: column;
 
}
.box-chat {
    display: flex;
    flex-direction: column;

    height: 50vh;
}

.config-chat {
    display: flex;
    justify-content: space-around;

}

.imgs-perfil {
    display: flex;
}

.enviar-msg {
    display: flex;
    justify-content: space-around;
}
.document::-webkit-file-upload-button {
    visibility: hidden;
  }
  .document::before {
    content: url('/assets/images/file.svg');
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: hidden;
    border-radius: 3px;
    
    
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
    z-index: 1;
  }
  .document:hover::before {
   border: none;
  }
  .document:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }

  .document {
      color: transparent;
      width: 3.6em;
  }

  .msg {
      font-family: Roboto Slab;
      color: #CACACA;
      
      background: #808080;
      border-radius: 6px;
     max-height: 10em;
      max-width: 20em;
  }

  .bta-config {
      
  }

  .agp-config {
      width: 30em;
      display: flex;
    justify-Content: space-around;
        
  }
`


export { Conteudo }