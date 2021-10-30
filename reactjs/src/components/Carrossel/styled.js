import styled from 'styled-components';

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
    flex-direction:column;
    align-items:center;
    padding:0.5em;
    position:relative;}
    .himagem2{
        width:250px;height:250px;
        object-fit: cover;  
    }
    .hbox{
        display: flex;
        flex-direction: column;
        width:22em;
        max-height: 25em;//ver aqui
        box-shadow: 2px 2px 30px rgba(0,0,0,0.3);
        border:1px solid #BCBF50;
        border-radius: 10px;
        overflow:hidden ;  
        margin-right: 1em;
        
    }
    .hdetalhes{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        font:1.5em Roboto-Slab;
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
        background-color: rgba(92,92,236,0.6);
        visibility: hidden;
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
    .himagem:hover .hsobreposicao{
        visibility: visible;
     }

     .HSetas{
            width: 98%;
            position: absolute;
            z-index: 2;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            top:25%;
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
        flex-direction:row;}
        
`

export{HCarrossell}