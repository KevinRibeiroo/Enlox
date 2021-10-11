
import styled from 'styled-components';

const Container = styled.div`

.container{
    display: flex;
    flex-direction: row;
}

.fx1{
    display: flex;
    flex-direction: column;

    background-color: #EDEDED;
    
    width: 50%;   
}

.fx2 {
    display: flex;
    background: #ffffff;

    margin-top: 5em;
    width: 50%;
    height: 90%;

    align-self: center;
    justify-content: space-around;
    align-items: center;
}

.agp {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

   padding-right: 4em;
   
}

.agp-texto1{
    display: flex;
    flex-direction: column;

    margin-left: 1.4em; 
}

.btn-comprar{
    align-self: center;
}

.agp-texto2{
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
    margin-left: 2.4em;
}

.cartao {
     border-radius: 10em;
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

.preco span {
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

.agp-total{
    margin: 3em 0em 7em 0em; 
}

.desc-product {

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    
}

.frete {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-size: 1em;
   

    color: #353535;
    align-items: center;
    justify-content: space-between;

    width: 9.5em;
    height: 2.5em;
}

.frete span{
    color: #34D231;
}


.title-agp  {
    font-style: normal;
    font-weight: bolder;
    font-size: 1.2em;
 

    color: #353535;
}

.x {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1em;
   

    color: #353535;
    align-items: center;
    justify-content: space-between;

    width: 11.5em;
    height: 2.5em;
}

.x span {
    padding-top: 0.3em;
}


.total {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-size: 1.1em;
   

    color: #353535;
    align-items: center;
    justify-content: space-between;

    width: 11.5em;
    height: 2.5em;
}

.title-total span {
    padding-top: 0.3em;
}

.img-principal{
    width: 13em;
     height: auto;
}

.little-img img{
    width: 3em;
     height: auto;
}

.img-principal{
    display: flex;
   
    flex-direction: column;
    justify-content: center;
}

.editar img{
    width: 1.5em;
}

.editar{
    margin: 2.5em 0em 0em 1.5em;
}

.seta img{
    width: 1.3em;
}

.seta{
    margin: 7em 0em 0em 1.5em;
}


`

export{Container};