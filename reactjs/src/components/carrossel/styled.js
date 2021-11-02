import styled from "styled-components";

const Carrossel = styled.div`
.himagem{
    display:flex;
    justify-content: center;
    align-self:center;
    width:160px;height:160px;
    
    position:relative;}
    
    .himagem2{
        width:160px;height:160px;
        object-fit: cover; 
        margin-top: 1em; 
    }
    .hbox{
        display: flex;
        flex-direction: column;
        width:24em;
        max-height: 22em;//ver aqui
        box-shadow:inset 0 0 1em rgba(0,0,0,0.2);
        border:1px solid #BCBF50;
        border-radius: 10px;
        //overflow:hidden ;  
        margin: 0em 2em;
        
        
    }
    .himagem:hover{transform:scale(1.5);}
    .hdetalhes{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        padding:1em;
    }
    .htitulo{
        font: 1em Roboto-Slab;
        font-weight: 600;
    }
    .hprecode{
        text-decoration: line-through;
        font: 0.8em Roboto-Slab;
        color:red;
    }

    .hprecopor{
        color: green;
        font: 1.2em Roboto-Slab;
    }
    .hsobreposicao{
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
    .hcomprar{
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
    .hcomprar:hover{
        background-color:rgb(238,170,68,73%);
        color:#B0BDC6;
        transition: all ease 0.2s;
    }
    .himagem:hover .hcomprar{
        visibility: visible;
        
     }
     
     .HSetas{
            width: 98%;
            position: absolute;
            z-index: 2;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top:7em;
            
            > img{
                background-color: #fff;
                border-radius:50%;
                //border:10px solid #B0BDC6;
                padding: 2em;
            }

            .HRotacionada{
                transform: rotate(180deg)
            }
        }
        .cs-hidden{display:flex;
        flex-direction:row;
        
        }
        
        .icon-carrosel {
            color: black;
            text-decoration: none;
        }
`
export{Carrossel}