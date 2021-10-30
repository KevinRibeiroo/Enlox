
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

    
    }

    
}
.HFaixa{
    margin-bottom: 6em;
    width: 100%;
    .HCar{width:100%;}
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
    
  
    .HEspecificacao{
        margin-bottom: 2em;
        color:#fff;
        font:2em Roboto-Slab;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #E78A1D;
    }
    
    /*.HCarrossel{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #B0BDC6;
        border-radius: 30px;
        height: 16em;
        width: 100%;
        
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
        }*/

        .HCentro{
        display: flex;
        flex-direction: row;
        left: 16%;
        position: absolute;
        z-index: 1;
        justify-content: center;
        align-items: center;
        /*overflow: hidden;
        overflow-x: scroll;
        width: 100%;*/
       
        

        .HAnuncio{
            width: 18em;
            background-color: #fff;
            border:1px solid #BCBF50;
            height: 10em;
            padding: 1em;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 1em;
            
          
           
            .Hproduto{
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
                .Hdesc{
                font:0.9em Roboto;
                }
            }
        
            .Htitulo{
                font: 1em "Roboto";
                font-weight: 700;
            }
        /*}     do HCarrossel*/ 
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

const HCarrossell = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;

overflow-x: auto;
overflow-y:hidden;

::-webkit-scrollbar{
	width:0;
}



.himagem{
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0.5em;
    position:relative;}
    .himagem2{
        width:250px;height:250px;
        object-fit: cover;  
    }
    .hbox{
        display: flex;
        flex-direction: column;
        width:22em;
        max-height: 25em;//ver aqui
        box-shadow: 2px 2px 30px rgba(0,0,0,0.3);
        border:1px solid #BCBF50;
        border-radius: 10px;
        overflow:hidden ;  
        margin-right: 1em;
        
    }
    .hdetalhes{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        font:1.5em Roboto-Slab;
        padding:1em;
    }
    .hprecode{
        text-decoration: line-through;
    }
    .hsobreposicao{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(92,92,236,0.6);
        visibility: hidden;
    }
    .hcomprar{
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: white;
        width: 11.5em;
        height: 2.5em;
        border-radius: 25px;
        font: 1em Roboto-Slab;
        letter-spacing: 0.1em;
        font-weight:700;
        color:#554949;
    }
    .hcomprar:hover{
        background-color:rgb(238,170,68,73%);
        color:#B0BDC6;
        transition: all ease 0.2s;
    }
    .himagem:hover .hsobreposicao{
        visibility: visible;
     }

     .HSetas{
            width: 98%;
            position: absolute;
            z-index: 2;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top:7em;
            > img{
                background-color: #fff;
                border-radius:50%;
                padding: 2em;
            }

            .HRotacionada{
                transform: rotate(180deg)
            }
        }
        .cs-hidden{display:flex;
        flex-direction:row;}
        
`

export{HContainer,HCarrossell};