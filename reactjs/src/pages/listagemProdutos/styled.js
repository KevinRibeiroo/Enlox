import styled from 'styled-components';

const LContainer = styled.div`
display: flex;
flex-direction: column;
`
const LConteudo = styled.div`
display: flex;
flex-direction: row;
padding: 2em;
flex-wrap: wrap;

.lbox{
        display: flex;
        flex-direction: column;
        width:22em;
        max-height: 22em;//ver aqui
        box-shadow:inset 0 0 1em rgba(0,0,0,0.2);
        border:1px solid #BCBF50;
        border-radius: 10px;
        //overflow:hidden ;  
        margin: 1em 2em;
        cursor: pointer;
        
        
        
    }.limagem{
    display:flex;
    justify-content: center;
    align-self:center;
    width:160px;height:160px;
    
    position:relative;}
    
    .limagem2{
        width:160px;height:160px;
        object-fit: cover; 
        margin-top: 1em; 
    }
    .limagem:hover{transform:scale(1.5);}
    .ldetalhes{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        padding:1em;
    }
    .ltitulo{
        font: 1em Roboto-Slab;
        font-weight: 600;
    }
    .lprecode{
        text-decoration: line-through;
        font: 0.8em Roboto-Slab;
        color:red;
    }

    .lprecopor{
        color: green;
        font: 1.2em Roboto-Slab;
    }
    .lsobreposicao{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;//rgba(92,92,236,0.6);
        visibility: hidden;
        margin-top: 1em;
        
    }
    .lcomprar{
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: white;
        width: 11.5em;
        height: 2.5em;
        border-radius: 25px;
        font: 1em Roboto-Slab;
        letter-spacing: 0.1em;
        font-weight:700;
        color:#554949;
    }
    .lcomprar:hover{
        background-color:rgb(238,170,68,73%);
        color:#B0BDC6;
        transition: all ease 0.2s;
    }
    .limagem:hover .lcomprar{
        visibility: visible;
        
     }
     .icon-carrosel {
            color: black;
            text-decoration: none;
        }
`

export{LContainer,LConteudo}