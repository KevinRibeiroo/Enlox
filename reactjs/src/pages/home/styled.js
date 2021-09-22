
import styled from 'styled-components';

const HContainer = styled.div`
width: 100%;
height: 100%;
.HSubCabecalho{
    padding: 3em 2em;
    background-color: rgb(79,110,146,0.89);
}
.HCategorias{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
    display: flex;
    flex-direction: column;
    align-items : center ;
    padding-bottom: 2em;
    color:#fff;
    }  
}

.HPesquisar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;

    .HProcurando{
    display: flex;
    flex-direction: row;
    width: 95%;
    > input{
        width: 100%;
        padding: 0em 2em;
        border:none;
    }
    }

    .HSimbolo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    .HPesquisou{margin-left:0.3em;}
    }

    
}
`

export{HContainer};