import styled from "styled-components"




const Conteudoprodut = styled.div `
display: flex;
flex-direction: column;


height: 230vh;

background: #F5F5F5;

.container {
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
}

.upload {
        display: flex;
        color: transparent !important;

       
       background-size: 125px;
       width: 11.3em;
       height: 10em;
     
       

        
background: rgba(23, 22, 22, 0.3);
border-radius: 10px;
    }


    .upload::-webkit-file-upload-button {
        visibility: hidden;
      }
      .upload::before {
        content: url('/assets/images/adc-img.svg');
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


      .agp-botao {
      display: flex;
      flex-direction: column;
      background: #B0BDC6;
      border: none;
     

      width: 20.3em;

      border-radius: 1em;
      height: 25em;
      align-items: center;
      justify-content: center;
      }

      .label {
        font-family: Roboto Slab-Bold;
font-style: normal;
font-weight: bold;
font-size: 1.3em;
line-height: 47px;
text-align: left;
letter-spacing: 0.1em;

color: #000000;
     
  
}


.title-pag {
  font-family: Stoke;
font-style: normal;
font-weight: normal;
font-size: 3em;
line-height: 3em;
text-align: center;
letter-spacing: 0.1em;

color: #030303;
}


.conteudo-cdstr {
  display: flex;
  flex-direction: column;
  
  background-color: white;
  width: 90%;
  align-self: center;

  padding: 4em;

  height: 190vh;
}

.conteudo-cdstr > div {
  margin: 1.5em 0em;
}

.conteudo-cdstr > input {
  margin: 1.5em 0em;
}
`

export { Conteudoprodut }