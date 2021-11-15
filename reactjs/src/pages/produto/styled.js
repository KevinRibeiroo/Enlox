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
    width: 75vw;
    background-color: rgba(188, 191, 80, 0.6);
    
    height: 85vh;
    justify-content: center;
}

.container-produts {
    display: flex;
    background: #ECF6FE;
    border: 1px solid #4F6E92;
    box-sizing: border-box;
    width: 90%;
    height: 90%;

    align-self: center;
    justify-content: space-around;
    align-items: center;
}

.produt {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
}

.title {
    font-family: Roboto Slab-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 47px;

    color: #353535;
}

.preco {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
   

    color: #353535;
    align-items: center;
    justify-content: space-between;
    width: 8.2em;

    height: 2.5em;
}

.preco > span {
    padding-top: 0.3em;
}
.title-preco  {
    font-family: Roboto Slab-Bold;
    font-style: normal;
    font-weight: bolder;
    font-size: 1.4em;
 

    color: #353535;

    
}
.imgs-produt {
    display: flex;
   
    justify-content: space-evenly;
    align-items: center;
}

.icon-produt {
    width: 4em;
}

.desc-produt {
    
    font-family: Roboto-Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 26px;

    color: #353535;

    width: 13em;
   text-align: left;
   
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

    font-family: Roboto Slab-Bold;
    color: white;
}
.title-frete {
    font-family: Roboto Slab-Bold;

    font-weight: bold;
    color: #353535;
}
.container-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    background: #FFFFFF;
    width: 21vw;
   
}

.perfil {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 7em;
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
    font-family: Roboto Slab-Bold;
    
    width: 7em;
    color: #353535;
}

.bta-info {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Roboto Slab-Bold;
    color: white;
}
.bta-info img {
margin-right: 0.7em;
   
    
}


.agp-botao {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7.5em;
    align-self: center;
}

.mais {
    font-family: Roboto Slab-Light;
font-style: normal;
font-weight: normal;
font-size: 0.9em;
line-height: 26px;

color: #545353;
background-color: transparent;
}

.seta {
    margin-left: -3em;
}

.img-principal{
    display: flex;
    //height: 40vh;
    flex-direction: column;
    justify-content: center;

    cursor: pointer;
}

.nm-perfil {
    font-family: Roboto Slab-Bold;
    color: #353535;

}

.avaliacao {
    display: flex;
    justify-content: space-around;
    width: 7vw;
}

.desc-info {
    font-family: Roboto Slab;
    color: rgba(53, 53, 53, 0.74);
}

.traco-produt {
    height: 55vh;
}

input[type="file"] {
    display: none;
}

#imgPhoto {
    max-width: 2em;
}

.foto img {
    border-radius: 2em;
    height: 3.5em;
}

.vamo-negociar{
    font-family: Roboto Slab-Bold;
    color: white;
    text-decoration: none;
} 

.produt-min img{
    height: 4em;

    cursor: pointer;
}
`


export {Conteudo}