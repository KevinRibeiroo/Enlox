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
    width: 26em;
}


.info {
    display: flex;
    width: 6.5em;
    flex-wrap: wrap;
    text-align: center;
    
    font-family: Artifika;
font-style: normal;
font-weight: normal;
font-size: 14px;

text-align: center;
letter-spacing: 0.1em;

color: rgba(0, 0, 0, 0.75);
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

.info {
    text-align: center !important;
  

    max-width: 10em;
}

.navegacao {
   
   text-decoration: none;
   font-family: Stoke;
font-style: normal;
font-weight: normal;



text-align: center;


color: #000000;
}
`

export {Rodape}