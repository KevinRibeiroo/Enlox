
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

.agp-fx2 {
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
    cursor: pointer;
   
}

.aaa{
    display: flex;
    flex-direction: row;

    align-items: center;
    background-color: #DFDFDF;

    border-radius: 60px;
    height: 3.5em;
    font-size: 17px;

    margin-top: 2em;
    margin-bottom: 3.4em;
    justify-content: space-between;
}


.agp-fx1{
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

   padding-right: 4em;
   
}

.cartao img{
    width: 2.5em;
    height: auto;
    margin-right: 0.5em;
}

.cartao {
    display: flex;
    flex-direction: row;
}

.master{
    margin-top: 0.5em;
}

.btn-alterar button {

    background: transparent;
    border: none !important;
    color: #47A1EF;
    font-size: 17px;
    cursor: pointer;
    margin-right: 0.5em;
}

.btn-comprar button {
 
    width: 350px;
    height: 57px;
    left: 127px;
    top: 800px;

    border: none ;
  
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    cursor: pointer;
    line-height: 32px;
    background: #B0BDC6;
    border-radius: 57px;
}

.detalhes{
    margin-top: 1em;
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

    color: #000000;
}

.dentro{
    margin-left: 1em;
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

.preco {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
   

    color: #000000;
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
 

    color: #000000;
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

span{
    color: #262626;
}

.frete {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-size: 1em;
   

    color: #000000;
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
 

    color: #000000;
}

.x {
    display: flex;
    font-family: Roboto-Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1em;
   

    color: #000000;
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
   

    color: #000000;
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
     cursor: pointer;
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