import styled from 'styled-components';

const RContainer = styled.div`
height: 100vh;
background-color:rgb(188,191,80,60%);
display: flex;
flex-direction: column;
.oie{display:flex;flex-direction:row;justify-content:center;align-items:center;}
.RBox{height:70%; width: 40%; background-color:#fff;
display: flex;
flex-direction: column;
justify-self: center;
align-self: center;
margin:4em 0em;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
padding: 3em;
margin-right: 2em;
.imagem{display:flex; flex-direction:column; justify-self:center;align-self:center;margin-bottom:2em;cursor: pointer;}
.RTitulo{
    text-align:center;
    font: 2em Roboto slab-ExtraBold;
    color:#355775; 
}
.RDigite{width:22em;margin:3em 0em 2em 0em;font:1em Arial;}
input{margin-left:1em;width:60%;}
.REnvie{ display:flex; flex-direction:column;
    justify-self:center;align-self:center;
    border-radius:20px;
    background-color:#355775;
    padding:0.5em 1em;
    color:white;
    font-family:Arial;
    width:8em;
    text-align:center;
    cursor: pointer;}

    .RDefinir{height:10em;width:14em; display:flex; flex-direction:column; justify-self:center;
        align-self:center;
    margin-bottom:-2em;}
}
.RTexto{font:0.8em Roboto Slab-Light;margin-top:1em;text-align:center;}
`
export{RContainer}