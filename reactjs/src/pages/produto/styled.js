import styled from "styled-components";




const Conteudo = styled.div`
display: flex;
flex-direction: column;

main {
    display: flex;
    flex-direction: column;


    height: 120vh;
    justify-content: space-between;
}

.conteudo {
    display: flex;
    flex-direction: column;
    
    align-self: center;
    width: 65vw;
    background-color: rgba(188, 191, 80, 0.6);
    
    height: 65vh;
    justify-content: center;
}

.container-produts {
    display: flex;
    background: #ECF6FE;
    border: 1px solid #4F6E92;
    box-sizing: border-box;
    width: 90%;
    height: 85%;

    align-self: center;
    justify-content: space-around;
    align-items: center;
}

.produt {
    border: solid;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.title {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 47px;

    color: #353535;
}

.preco {
    display: flex;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
   

    color: #353535;
    align-items: center;
    justify-content: space-between;
    width: 9em;

    height: 2.5em;
}

.preco > span {
    padding-top: 0.3em;
}
.title-preco  {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
 

    color: #353535;

    
}
.imgs-produt {
    display: flex;

}

.icon-produt {
    width: 4em;
}

.desc-produt {
    
    font-family: Roboto Slab;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 26px;

color: #353535;

    width: 13em;
    border: solid;
   text-align: center;
   
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.agp-frete {
    display: flex;
    align-self: center;
    justify-content: space-around;

    width: 25vw;
    align-items: center;
}
.bta-frete {
    background: #34D231;
    border-radius: 10px;
    border: none;

    width: 6em;
    height: 2.2em;
}

.container-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    background: #FFFFFF;
    width: 21vw;
    border: solid;
}

.perfil {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 5em;
}

.agp-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    
    margin-left: 2em;
}

.info-product {
    display: flex;
    justify-content: space-between;
}

.title-info {
    width: 7em;
}

.bta-info {
    display: flex;
    align-items: center;
    justify-content: center;
}

.agp-botao {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15vh;
    align-self: center;
}

.mais {
    font-family: Roboto Slab;
font-style: normal;
font-weight: normal;
font-size: 0.9em;
line-height: 26px;

color: #545353;

}
`


export {Conteudo}