import styled from "styled-components";





const InputFrete = styled.input `
width: 12.2em;
background: #808080;
border-radius: 7px;
border: none;
height: 1.9em;
outline: none;



::placeholder{
  color: black;
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


const InputCadastrar = styled.input`
width: 30em;
height: 5em;


display: flex;

background: rgba(60, 60, 60, 0.1);
border: none;
outline: none;

::placeholder{
    font-family: Stoke;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 45px;
text-align: start;
letter-spacing: 0.1em;

color: #000000;
}

padding-left: 0.5em;
`

const TextareDesc = styled.textarea`
display: flex;

width: 30em;
height: 8em;

padding-left: 0.5em;

::placeholder{
    font-family: Stoke;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 45px;
text-align: start;
letter-spacing: 0.1em;

color: #000000;
}

background: rgba(60, 60, 60, 0.1);
border: none;
outline: none;

:focus {
    background-image: none;
}

`

const InputTipo = styled.select`

width: 25em;
height: 2.7em;

background: rgba(60, 60, 60, 0.1);
border: none;
outline: none;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url('/assets/images/Seta.svg');
    background-repeat: no-repeat;
    background-position-x: 23em;
    background-position-y: center;
    padding-right: 0.5em;

       font-family: Roboto Slab;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;

    padding-left: 0.5em;

    background-size: 0.6em;
`

const InputPreco = styled.input`

    width: 16em;
    height: 2.5em;

    font-family: Roboto Slab;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 34px;
letter-spacing: 0.1em;

color: #000000;

border: none;
outline: none;

padding-left: 0.5em;

background: rgba(60, 60, 60, 0.1);
`

const InputImage = styled.input`

    
background: rgba(60, 60, 60, 0.1);

`

const InputLocal = styled.input`

background: rgba(60, 60, 60, 0.1);

width: 14em;
height: 2.5em;

font-family: Roboto Slab;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 34px;
letter-spacing: 0.1em;

color: #000000;

border: none;
outline: none;

padding-left: 0.5em;

`


const InputLogin = styled.input`
display: flex;
background: #FDFAFA;
border-radius: 1.5em;

width: 25em;
height: 2.7em;

font-family: Roboto Slab;
font-size: 1em;
::placeholder {
font-family: Roboto Slab;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 16px;

color: rgba(0, 0, 0, 0.37);
}
border: none;
outline: none;
padding-left: 1em;
`


const InputImg = styled.input`
width: 30em;
height: 3em;


display: flex;

background: rgba(60, 60, 60, 0.1);
border: none;
outline: none;
border-radius: 1em;
`

export { InputFrete,    InputChat, InputCadastrar, TextareDesc, InputTipo, InputPreco, InputImage, InputLocal, InputLogin, InputImg}