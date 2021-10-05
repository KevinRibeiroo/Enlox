
import styled from 'styled-components';

const Container = styled.div`

.container{
    display: flex;
    flex-direction: row;
}

.fx1{
    background-color: #EDEDED;
    width: 50%;
}


.fx2 {
    display: flex;
    background: #ffffff;
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
    margin-left: 2.4em;
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