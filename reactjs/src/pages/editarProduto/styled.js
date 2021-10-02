
import styled from 'styled-components';

const Container = styled.div`

display: flex;
flex-direction: column;



main {
    display: flex;
    flex-direction: column;

    margin-bottom: 8em;

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
    background: #ffffff;
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

    border-right: 1px solid black;
   padding-right: 4em;
   
}


.agp2 {
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

.salvar{
    display: flex;
    justify-content: right;
    margin-right: 9em;
}

.btn-salvar {   
    width: 105px;
    height: 50px;
   
    font-family: Roboto Slab;
    font-weight: 1000;
    line-height: 26px;
    font-size: 20px;
    
    color: #888B0D;  
    background: rgba(176,189,198,1);
  
    border: 1px solid rgba(188,191,80,1);
    border-radius: 50px 50px;  
}

  .btn-salvar button{
    width: 66px;
    color: rgba(0,0,0,0.6499999761581421);
   
    top: 10px;
    left: 20px;
  }
  
`

export{Container};