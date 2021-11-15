import styled from 'styled-components';

const CContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;


.CCorpo{
    height: 100vh;
    background-image: linear-gradient(75deg, #E4FF77, rgb(188,191,80,60%), #B0BDC6);
    display: flex;
    flex-direction: column;
    font:1em Arial;
}

.CBox{
    display: flex;
    flex-direction: column;
    justify-self: center;
    margin-top:5%;
    align-self: center;
    height: 82%;
    width: 60%;
    background-color: white;
    padding: 2em ;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    .CTitulo{text-align:center;
            font:2em Roboto Slab-Bold;
            color:rgb(238,170,68,100%);
            }

    .CInputs{
        display: flex;
        flex-direction: column;
        margin-top: 1.5em;
        justify-content: space-around;
        & input{
            display: flex;
            flex-direction: row; 
        }
        .CRow{ display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
        .CColumn{ display: flex;
        flex-direction: column;
        
        & div{display: flex;
            flex-direction: column;
            width:20em;
            margin-bottom: 0.5em;
        
        }}
    }
    .CBotao{display:flex;
            align-self:center;
            justify-content:center;
            margin-top: 2.5em;
            width: 60%;
            & button{padding:0.8em 1em;
                width: 80%;
                border-radius:15px;
                border:none;
                background-color:rgb(238,170,68,100%);
                cursor: pointer;
                font:1em Stoke-Regular;
                color:white;
            }}
                button:hover{background-color:rgb(238,170,68,73%);}
}

`
export{CContainer}