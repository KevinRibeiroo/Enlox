import "styled-components";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 12VH;


.icons-cabecalho{
display: flex;
flex-direction: column;
}
.icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
}

.icon img {
    width: 2.5em;
}
.icon-text {
    display: flex;
    align-self: center;

}

.botao-cabecalho {
    display: flex;
    justify-content: center;
}
button {
    display: flex;
    width: 158px;
    height: 31px;
    left: 861px;
    top: 57px;

    border: solid 1px;
    background-color: #BCBF50;
    border-radius: 15px; 
    align-self: center;
}

span {
    display: flex;
    align-self: center;
    padding-left: 1.9vh;
}

.navegacao {
   
    text-decoration: none;
    font-family: Stoke;
font-style: normal;
font-weight: normal;



text-align: center;


color: #000000;
}

.icon-text {
    font-family: stroke;
}
`

export {Container}