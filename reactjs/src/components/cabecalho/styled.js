import "styled-components";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 10VH;
.icons-cabecalho{
display: flex;
flex-direction: column;
}
.icon {
    display: flex;
    align-self: center;
    align-items: center;
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
`

export {Container}