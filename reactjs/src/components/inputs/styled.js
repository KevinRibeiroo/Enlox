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
width: 42em;
border: none;
height: 3em;
outline: none;
text-align: center;
padding: 0.5em 0.5em;
overflow-y: scroll;
resize: none;


background-image: url('/assets/images/Digite uma mensagem.svg');
background-repeat: no-repeat;
background-position-y: center;
background-position-x: 1em;
:focus {
    background-image: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #B0BDC6;
  height: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6495ED;
  height: 10px;

  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}

`


export { InputFrete,    InputChat }