
import styled from 'styled-components';



const HContainer = styled.div`
width: 100%;
height: 100%;

.HSubCabecalho{
    padding: 3em 2em;
    background-color: rgb(79,110,146,0.89);
    input{outline: none;}
}
.HCategorias{
    font:1em Stoke-Regular;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0em 2em;
    > div {
    display: flex;
    flex-direction: column;
    align-items : center ;
    padding-bottom: 2em;
    color:#fff;
    & img:hover{}
    .HElipse{cursor: pointer;}
    }  
  
}

.HPesquisar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;

    .HProcurando{
    display: flex;
    flex-direction: row;
    width: 95%;
    > input{
        width: 100%;
        padding: 0em 1em;
        border:none;
    }
    }

    .HSimbolo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0.3em;

    
    }

    
}
.HFaixa{
    margin-bottom: 6em;
    width: 100%;
    
}

.HCorpo{
    display: flex;
    flex-direction: column;
    padding: 4em 1.5em;


    .HEspecificacao{
        margin-bottom: 2em;
        color:#fff;
        font:2em Roboto-Slab;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #E78A1D;
    }
    
 
        

    
}
`

const HCarrossell = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;

overflow-x: auto;
overflow-y:hidden;


::-webkit-scrollbar{
	width:0;
}


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
        font:1.3em Roboto-Slab;
        padding:1em;
    }
    .hprecode{
        text-decoration: line-through;
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

export{HContainer,HCarrossell};