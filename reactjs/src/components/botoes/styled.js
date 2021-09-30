import styled from "styled-components"




const BotaoProduct = styled.button`
display: flex;
background: #34D231;
border-radius: 11px;

width: 15em;
height: 2.5em;
border: none;

`

const BotaoCdstr = styled.button`
display: flex;
width: 20em;
height: 3em;
border: none;


background: #B0BDC6;
border-bottom: solid 1px;

justify-content: flex-start;
padding-left: 2em;
align-items: center;

font-family: Roboto Slab;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 34px;
text-align: center;
letter-spacing: 0.1em;

color: #000000;
`




const InserirAnuncio = styled.button`


display: flex;
background: rgba(238, 170, 68, 0.75);
border-radius: 0.6em;


width: 13em;
height: 3em;
border: none;

font-family: Roboto Slab-Bold;
font-style: normal;
font-weight: 500;
font-size: 1em;

align-items: center;
justify-content: center;
letter-spacing: 0.1em;

color: #000000;


cursor: pointer;
`

const BotaoLogin = styled.button`
cursor: pointer;

width: 25em;
height: 3em;
border-radius: 0.8em;
border: none;
outline: none;

background: rgba(238, 170, 68, 0.73);



font-family: Snippet-Regular;
font-style: normal;
font-weight: normal;
font-size: 1.2em;
line-height: 23px;
text-align: center;
letter-spacing: 0.1em;

color: #FFFFFF;

border: 2px solid rgba(253, 245, 245, 0.57);
`


const BotaoGoogle = styled.button`


background-image: url('/assets/images/google.svg');
background-color: white;
background-position-y: center;
background-position-x: 4.5em;


font-family: Snippet-Regular;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 17px;
text-align: center;
letter-spacing: 0.1em;

color: #000000;

width: 25em;
height: 2.9em;

background-repeat: no-repeat;

cursor: pointer;

border: none;

border-radius: 0.4em;
`

export {BotaoProduct, BotaoCdstr, InserirAnuncio, BotaoLogin, BotaoGoogle}