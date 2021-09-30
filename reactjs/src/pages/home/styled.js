
import styled from 'styled-components';

const HContainer = styled.div`
width: 100%;
height: 100%;
.HSubCabecalho{
    padding: 3em 2em;
    background-color: rgb(79,110,146,0.89);
    input{outline: none;}
}
.HCategorias{
    font:1em Stoke-Regular;
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
    & img:hover{}
    .HElipse{cursor: pointer;}
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
.HFaixa{
    margin-bottom: 6em;
}

.HCorpo{
    display: flex;
    flex-direction: column;
    padding: 4em;
    .HBola{position:absolute;
    top:35%;
    left: 55%;
    animation: quicar 1s infinite;
    }
    
    @keyframes quicar{
    10%{}
    50%{height:50px;
    width:60px;
    transform:translateY(240px);}
    
  
    }
    .HEspecificacao{
        margin-bottom: 2em;
        color:#fff;
        font:2em Roboto-Slab;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #E78A1D;
    }
    .HCarrossel{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #B0BDC6;
        border-radius: 30px;
        height: 16em;
        
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
        left: 16%;
        position: absolute;
        z-index: 1;
        justify-content: center;
        align-items: center;

        .HAnuncio{
            width: 18em;
            background-color: #fff;
            border:1px solid #BCBF50;
            height: 10em;
            padding: 1em;
            display: flex;
            flex-direction: row;
            align-items: center;
            .Hproduto{
                border: 1px solid #BCBF50;
                height: 90%;
                width: 40%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center; 
            }

            .Hdescricao,.Hpreco{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 80%;
                .Hpde{
                    text-decoration: line-through;
                    margin-top: 1em;
                    color:#554949;
                    font:0.7em Roboto;
                }
                .Hppor{font: 1em "Roboto";
                    color:#21953A;
                    font-weight: 550;
                }
                .Htempo{
                font:0.9em Roboto;
                }
            }
        
            .Htitulo{
                font: 1em "Roboto";
                font-weight: 700;
            }
        }
        .HAnuncioMeio{
            width: 20.5em;
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

            }
            
            .HDescricao,.HPreco{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 80%;
                .HPde{
                    text-decoration: line-through;
                    margin-top: 0.9em;
                    color:#554949;
                }
                .HPpor{font: 1.2em "Roboto";
                    color:#21953A;
                    font-weight: 550;
                }
            }
            
        
            .HTitulo{
                font: 1.7em "Roboto";
                font-weight: 700;
            }
            
        }
        }

    }
}
`

export{HContainer};