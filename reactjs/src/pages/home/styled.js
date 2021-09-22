
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
    padding: 0em 2em;
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
        padding: 0em 1em;
        border:none;
    }
    }

    .HSimbolo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 0.3em;

    .HPesquisou{margin-left:0.3em;}
    }

    
}

.HCorpo{
    display: flex;
    flex-direction: column;
    padding: 4em;
    .HEspecificacao{
        margin-bottom: 4em;
    }
    .HCarrossel{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #B0BDC6;
        border-radius: 30px;
        height: 14em;
        
        .HSetas{
            width: 98%;
            position: absolute;
            z-index: 2;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            > img{
                background-color: #fff;
                border-radius:50%;
                padding: 2em;
            }

            .HRotacionada{
                transform: rotate(180deg)
            }
        }

        .HCentro{
        display: flex;
        flex-direction: row;
        left: 13%;
        position: absolute;
        z-index: 1;
        justify-content: center;
        align-items: center;

        .HAnuncio{
            width: 20em;
            background-color: #fff;
            border:1px solid #BCBF50;
            height: 10em;
        }
        .HAnuncioMeio{
            width: 22em;
            background-color: #fff;
            border:2px solid #BCBF50;
            height: 18em;
            border-radius: 20px;
            padding: 1em;
            display: flex;
            flex-direction: row;
            align-items: center;

            .HProduto{
                border: 1px solid #BCBF50;
                height: 90%;
                width: 40%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-right: 3em;
            }
            
        }
        }

    }
}
`

export{HContainer};