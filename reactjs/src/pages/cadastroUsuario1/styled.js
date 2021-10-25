import styled from "styled-components";

const UContainer= styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
    .UAzul{
        width: 100%;
        height: 30%;
        background-color: #B0BDC6;
    }
    .UBranco{
        width: 100%;
        height: 70%;
        background-color: #fff;
    }
    .UConteudo{
        position: absolute;
        display:flex;
        flex-direction:column;
        align-self: center;
        top:13%;
        background-color: #fff;
        padding: 2em 1em;
        width: 57%;
        border: 1px solid #E78A1D;
        .UTitulo{
            color:#fff;
            font:2em Roboto-Slab;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #000;
            display: flex;
            flex-direction: column;
            align-self:center;
            
        }
        .UAnimacao1{
            width:200px; 
            height:15px;
            animation:linha 5s infinite;
            animation-timing-function: cubic-bezier(0,.77,1,.28);
        }

        .UAnimacao2{
            width:200px; 
            height:15px;
            margin-bottom:2em;
            animation:linha2 5s infinite;
            animation-timing-function: cubic-bezier(0,.77,1,.28)
        }

        @keyframes linha{
            from{transform:translateX(0px);}
            to{
                transform: translateX(540px);
            }
        }
        @keyframes linha2{
            from{transform:translateX(540px);}
            to{
                transform: translateX(0px);
            }
        }

        .UDados{
            background-color: rgb(79,110,146,73%);
            padding: 0.3em 0.7em;
            width: 100%;
            margin-bottom: 1em;
            display:flex;
            flex-direction:row;
            align-items: center;
            
            input{
                border-radius: 20px;
                border:none;
                outline: none;
                padding:0.3em 0.7em;
                width: 90%;
                margin-left: 1em;
                display:flex;
                flex-direction:column;
                align-self: flex-end;
                 
            }
        }
        button{
            border: 2px solid rgb(188,191,80,73%);
            background-color: rgb(238,170,68,73%);
            padding: 0.5em;
            border-radius: 10px;
            width: 40% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: center;
            font:1em Stoke-Regular;
            color:#fff;
            margin-top: 0.5em;
        }
        button:hover{
            opacity: 95%;
            cursor: pointer;
        }
        
    }

`
export{UContainer}
