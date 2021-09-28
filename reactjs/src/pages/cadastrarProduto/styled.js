import styled from "styled-components"




const Conteudoprodut = styled.div `
display: flex;
flex-direction: column;


.upload {
        display: flex;
        color: transparent !important;
     
       
        width: 3em;
        height: 3em;
       
    }


    .upload::-webkit-file-upload-button {
        visibility: hidden;
      }
      .upload::before {
        content: url('/assets/images/adc-foto.svg');
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
      .upload:hover::before {
       border: none;
      }
      .upload:active::before {
        background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
      }
`

export { Conteudoprodut }