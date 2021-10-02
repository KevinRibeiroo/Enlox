
import styled from 'styled-components';

const Container = styled.div`

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

.group {
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

.agp1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
}

.agp-texto{
    display: flex;
    flex-direction: row;
}

.title {
    font-family: Roboto Slab-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 47px;

    color: #353535;
}

.agp-img{
    display: flex;
    flex-direction: row;
}

.agp-min{
    display: flex;
    flex-direction: column;
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
    width: 9.5em;

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

.imgs-product {
    display: flex;
   
    justify-content: space-evenly;
    align-items: center;
}

.img-principal{
    width: 13em;
     height: auto;
}

.little-img img{
    width: 3em;
     height: auto;
}

.mais {
    font-family: Roboto Slab-Light;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9em;
    line-height: 26px;
    border: hidden;

    color: #545353;
    background-color: transparent;
}

.img-principal{
    display: flex;
    //height: 40vh;
    flex-direction: column;
    justify-content: center;
}


`

export{Container};