import styled from "styled-components";



const Rodape = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 12vh;
.sobre-empresa {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 1.2em;
    align-self: center;
}


.info {
    display: flex;
    width: 6.5em;
    flex-wrap: wrap;
    text-align: center;
    font-size: 0.7em;
}


.informacoes-contato {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
}


.contato {
    display: flex;
    flex-direction: row;
    //align-items: flex-end;
    align-self: flex-end;
    width: 20em;
}

.icon img {
    display: flex;
    //justify-self: end;
    width: 3em;
    height: auto;
}

span {
    padding-left: 1.5vh;
    font-size: 0.9em;
}
`

export {Rodape}