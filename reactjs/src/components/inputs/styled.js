import styled from "styled-components";





const InputFrete = styled.input `
width: 12.2em;
background: #808080;
border-radius: 7px;
border: none;
height: 1.9em;
outline: none;

background-image: url('/assets/images/inserir CEP.svg');
background-repeat: no-repeat;
background-position-y: center;
background-position-x: 1em;
:focus {
    background-image: none;
}
`

const InputChat = styled.textarea`
background: #B0BDC6;
border-radius: 12px;
width: 35em;
border: none;

background-image: url('/assets/images/Digite uma mensagem.svg');
background-repeat: no-repeat;
background-position-y: center;
background-position-x: 1em;
:focus {
    background-image: none;
}
`


export { InputFrete,    InputChat }