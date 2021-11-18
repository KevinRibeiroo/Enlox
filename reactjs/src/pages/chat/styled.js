import styled from "styled-components";






const Conteudo = styled.div`
display: flex;
flex-direction: column;

main {
    display: flex;
    flex-direction: column;
    
    height: 120vh;
}
.container-chat {
    display: flex;

    margin-left: 1em;
    margin-top: 2em;
    margin-bottom: 6em;
}
.conversa {
    display: flex;
    
    width: 24em;
    
    justify-content: flex-start;
    align-items: center;
    border-bottom: solid 1px;
    height: 18vh;
    
}

.chat {
    display: flex;
    flex-direction: column;
 
}
.box-chat {
    display: flex;
    flex-direction: column;

    height: 70vh;
    border-left: solid 1px;
    justify-content: space-between;
    width: 44em;

    
}

.config-chat {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    border-left: solid 1px;
}

.imgs-perfil {
    display: flex;
     
    margin-top: 1em;
    justify-content: space-around;
    width: 6em;
}

.enviar-msg {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px;
    height: 13vh;
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

      margin: 0.5em 2em;
   
      align-self: flex-end;
      padding: 0.5em 0.5em;

    
  }

  .bta-config {
      
  }

  .agp-config {
      width: 30em;
      display: flex;
    justify-Content: space-around;
    align-items: center;
  }

  .msg2 {
      font-family: Roboto Slab;
      color: #CACACA;
      
      background: #808080;
      border-radius: 6px;
     max-height: 10em;
      max-width: 20em;

      margin: 0.5em 2em;
   
      align-self: flex-start;
      padding: 0.5em 0.5em;
      
  }


  .msgs {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-bottom: 0.7em;

   
  }

  .img-perfil {
      display: flex;
      align-self: center;
      margin-left: 1.7em;
      
  }

  .img-perfil > img {
        width: 5.5em;
        border-radius: 2.9em;
        height: 5.5em;
  }


  .text {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
     

    padding-left: 1em;
  }

  .nm-produt {
    font-family: Roboto Slab-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 29px;

    color: #000000;
  }

  .nm-vendedor {
      
font-family: Roboto Slab-Medium;
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 24px;

color: #000000;
  }

  .last-mensage {
    font-family: Roboto Slab;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;

color: #000000;
  }

  .nm-vendedor2 {
    font-family: Roboto Slab-Bold;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 18px;

color: #000000;
  }

  .last-acess {
    font-family: Roboto Slab-Light;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 16px;

color: #000000;
  }

  .perfil-chat {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      height: 14vh;
      margin-left: 1em;
  }


  .foto-usuario img{
    width: 2.5em;
    border-radius: 1.5em;
    height: 2.5em;
  }
`


export { Conteudo }