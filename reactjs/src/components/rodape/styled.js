import styled from "styled-components";



const Rodape = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

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

.icon {
    display: flex;
    //justify-self: end;
}

span {
    padding-left: 1.5vh;
}
`

export {Rodape}